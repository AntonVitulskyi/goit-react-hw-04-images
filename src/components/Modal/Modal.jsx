import PropTypes from 'prop-types';
import { useEffect } from 'react';

import styles from '../../styles.module.css';

export const Modal = ({ onClickCloseModal, modalImage }) => {
  const onOverlayClick = event => {
    if (event.target.dataset.name === 'Overlay') {
      onClickCloseModal();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onClickCloseModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div
      onClick={onOverlayClick}
      data-name="Overlay"
      className={styles.Overlay}
    >
      <div className={styles.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.string,
  onClickCloseModal: PropTypes.func,
};
