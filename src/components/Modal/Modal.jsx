import PropTypes from 'prop-types';
import { Component } from 'react';

import styles from '../../styles.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClickCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.target.dataset.name === 'Overlay') {
      this.props.onClickCloseModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div
        onClick={this.onOverlayClick}
        data-name="Overlay"
        className={styles.Overlay}
      >
        <div className={styles.Modal}>
          <img src={this.props.modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  onClickCloseModal: PropTypes.func,
};
