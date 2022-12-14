import React, { useRef } from 'react';
import { v4 as Uuid } from 'uuid';
import PropTypes from 'prop-types';

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
