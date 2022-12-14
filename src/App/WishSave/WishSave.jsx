import React from 'react';
import PropTypes from 'prop-types';

/**
 * Callback to run when a user clicks it.
 * @callback onWishesSave - Callback to run when a wish changes.
 */

/**
 * Render a button action.
 * @param {onWishesSave} callback - Callback to run when a user clicks it.
 */
function WishSave({ onWishesSave }) {
  return <button type="button" className="wish-save" value="Save" onClick={onWishesSave}> Save</button>;
}

WishSave.propTypes = {
  onWishesSave: PropTypes.func,
};

WishSave.defaultProps = {
  onWishesSave: () => {},
};

export default WishSave;
