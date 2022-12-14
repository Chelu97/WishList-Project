import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import WishItem from './WishItem';

/**
 * Callback to run when a wish changes.
 * @callback onWishesChange - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish updated.
 * @param {String} updatedWish.id - Identifier of a wish.
 * @param {String} updatedWish.text - Text of a wish.
 * @param {Boolean} updatedWish.done - Done/Pending wish.
 */

/**
 * Render list of wishes.
 * @param {Object[]} wishes - Array of wishes.
 * @param {String} wishes[].id - Identifier of a wish.
 * @param {String} wishes[].text - Text of a wish.
 * @param {Boolean} wishes[].done - Done/Pending wish.
 * @param {onWishesChange} callback - Callback to run when a wish changes.
 */

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
