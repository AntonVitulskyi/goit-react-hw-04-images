import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState } from 'react';
import styles from '../../styles.module.css';
import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ foundImages }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const onClickCloseModal = () => {
    setModalIsOpen(false);
  };

  const onClickChange = event => {
    if (event.target.nodeName === 'IMG') {
      setModalIsOpen(true);
      setModalImage(event.target.dataset.bigimage);
    }
  };

  return (
    <>
      <ul onClick={onClickChange} className={styles.ImageGallery}>
        {foundImages.map(image => (
          <ImageGalleryItem
            key={image.id}
            largeImageURL={image.largeImageURL}
            webformatURL={image.webformatURL}
            id={image.id}
          />
        ))}
      </ul>
      {modalIsOpen && (
        <Modal modalImage={modalImage} onClickCloseModal={onClickCloseModal} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  foundImages: PropTypes.array,
};
