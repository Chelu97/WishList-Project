import React, { useState } from 'react';
import './App.css';
import { v4 as Uuid } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import WishInput from './WishInput';
import WishList from './WishList';
import WishSave from './WishSave';
import logo from '../../assets/logo.png';

function App() {
  let initialWishes = JSON.parse(localStorage.getItem('WISHES'));
  if (!initialWishes) {
    initialWishes = [
      { id: Uuid(), done: false, text: 'Travel to the moon' },
      { id: Uuid(), done: true, text: 'Make an intro course to React' },
      { id: Uuid(), done: true, text: 'Pay the gym' },
      { id: Uuid(), done: false, text: 'Go to the gym' },
    ];
  }
  const [wishes, setWishes] = useState(initialWishes);

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (

    <div className="app">

      <img className="logotipo" src={logo} alt="Logo" />
      <h1 className="texto-centro">My wishlist app</h1>

      <WishInput onNewWish={(newWish) => {
        setWishes([newWish, ...wishes]);
      }}
      />
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (
            !destination
                    || (source.index === destination.index
                        && source.droppableId === destination.droppableId)
          ) {
            return;
          }

          setWishes((prevWishes) => reorder(prevWishes, source.index, destination.index));
        }}
      >
        <WishList
          wishes={wishes}
          onWishesChange={(updatedWish) => {
            const updatedAppWishes = [...wishes];
            const modifyWish = updatedAppWishes.find(
              (wish) => wish.id === updatedWish.id,
            );
            modifyWish.done = updatedWish.done;
            setWishes(updatedAppWishes);
          }}
        />
      </DragDropContext>
      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
      >
        Delete done
      </button>
      <WishSave
        onWishesSave={() => {
          localStorage.setItem('WISHES', JSON.stringify(wishes));
        }}
      />
    </div>
  );
}

export default App;
