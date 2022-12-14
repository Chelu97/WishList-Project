import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

function WishItem({
  wish, index, onDoneChange,
}) {
  return (
    <Draggable key={wish.id} draggableId={wish.id} index={index}>
      {(dragableProvided) => (
        <li
          {...dragableProvided.draggableProps}
          ref={dragableProvided.innerRef}
          {...dragableProvided.dragHandleProps}
          className={classNames('wish-list__item', {
            'wish-list__item--done': wish.done,
          })}
        >
          <input
            id={`wishItem-${wish.id}`}
            type="checkbox"
            defaultChecked={wish.done}
            onChange={(event) => {
              onDoneChange({
                id: wish.id,
                done: event.target.checked,
                text: wish.text,
              });
            }}
          />
          <label htmlFor={wish.id}>{wish.text}</label>
        </li>
      )}
    </Draggable>
  );
}

WishItem.propTypes = {
  wish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  index: PropTypes.number,
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  wish: { id: '', text: 'First Wish', done: true },
  index: 0,
  onDoneChange: () => {},
};

export default WishItem;
