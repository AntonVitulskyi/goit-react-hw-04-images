import PropTypes from 'prop-types';
import styles from '../../styles.module.css';
import { Component } from 'react';

export default class ImageGalleryItem extends Component {

  render() {
    const { largeImageURL, webformatURL } = this.props;
    return (
      <>
        <li className={styles.ImageGalleryItem}>
          <img
            className={styles.ImageGalleryItemImage}
            data-bigimage={largeImageURL}
            src={webformatURL}
            alt=""
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  id: PropTypes.number
}