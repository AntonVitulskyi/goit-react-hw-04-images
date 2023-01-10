import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import styles from '../../styles.module.css';
import Modal from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    modalIsOpen: false,
    modalImage: '',
  };

  onClickCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onClickChange = event => {
    if (event.target.nodeName === 'IMG') {
      this.setState({
        modalIsOpen: true,
        modalImage: event.target.dataset.bigimage,
      });
    }
  };

  render() {
    return (
      <>
        <ul onClick={this.onClickChange} className={styles.ImageGallery}>
          {this.props.foundImages.map(image => (
            <ImageGalleryItem
              key={image.id}
              largeImageURL={image.largeImageURL}
              webformatURL={image.webformatURL}
              id={image.id}
            />
          ))}
        </ul>
        {this.state.modalIsOpen && (
          <Modal
            modalImage={this.state.modalImage}
            onClickCloseModal={this.onClickCloseModal}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  foundImages: PropTypes.array,
};
