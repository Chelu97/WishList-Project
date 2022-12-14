import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import WishItem from './WishItem';

function WishList({ wishes, onWishesChange }) {
  return (
    <Droppable droppableId="wishes">
      {(droppableProvided) => (
        <ul
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          className="wish-list"
        >
          {wishes.map(({ id, text, done }, index) => (
            <WishItem
              wish={{ id, text, done }}
              index={index}
              key={id}
              onDoneChange={(updatedWish) => {
                onWishesChange(updatedWish);
              }}
            />
          ))}
          {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
