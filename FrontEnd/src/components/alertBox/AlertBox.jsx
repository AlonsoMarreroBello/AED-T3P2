import PropTypes from 'prop-types';
import style from './alertBox.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

library.add(faXmark, faCircleInfo);

/**
 * The `AlertBox` component displays a message in an alert box.
 * It takes a `message` prop and a `setShowMessage` prop.
 * The `message` prop is the text of the message to be displayed.
 * The `setShowMessage` prop is a function that sets the `showMessage` state to false.
 * @param {string} message - The text of the message to be displayed.
 * @param {Function} setShowMessage - A function that sets the `showMessage` state to false.
 * @returns {JSX.Element} - The JSX element representing the `AlertBox` component.
 */
const AlertBox = ({ message, setShowMessage }) => {
  /**
   * The `handleClose` function sets the `showMessage` state to false.
   */
  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <div className={style.alert}>
      <FontAwesomeIcon className={style.icon} icon={faCircleInfo} />
      <span className="alert-text">{message}</span>
      <button className={style.button} onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

AlertBox.propTypes = {
  message: PropTypes.string,
  setShowMessage: PropTypes.func
};

export default AlertBox;
