import React, { useRef } from 'react';
import { v4 as Uuid } from 'uuid';
import PropTypes from 'prop-types';

/**
 * Render an input text for adding a new wish.
 * @param {Function} onNewWish - Callback to run when a user introduces a new wish.
 */

function WishInput({ onNewWish }) {
  const wishInputText = useRef();
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        placeholder="Enter your wish here"
        ref={wishInputText}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && wishInputText.current.value.length > 0) {
            onNewWish({
              id: Uuid(),
              done: false,
              text: wishInputText.current.value,
            });
            wishInputText.current.value = '';
          }
        }}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
WishInput.defaultProps = {
  onNewWish: () => {},
};
export default WishInput;
