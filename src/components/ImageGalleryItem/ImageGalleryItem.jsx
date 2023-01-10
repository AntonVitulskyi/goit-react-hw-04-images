import PropTypes from 'prop-types';
import styles from '../../styles.module.css';

export const ImageGalleryItem = ({ largeImageURL, webformatURL }) => {
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
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  id: PropTypes.number,
};
