import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import Button from './Button/Button';
import { getImages } from '../pixabay-api';

export class App extends Component {
  state = {
    maxPage: null,
    inputQuery: '',
    foundImages: [],
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputQuery !== this.state.inputQuery &&
      prevState.currentPage === this.state.currentPage
    ) {
      Loading.dots();
      getImages(this.state.inputQuery)
        .then(data => {
          if (data.hits.length === 0) {
            Notify.info('За цим пошуком нічого не знайдено!');
          }
          this.setState({
            foundImages: data.hits,
            maxPage: Math.ceil(data.totalHits / 12),
          });
        })
        .finally(() => Loading.remove());
    }
    if (prevState.currentPage !== this.state.currentPage) {
      Loading.dots();
      getImages(this.state.inputQuery, this.state.currentPage)
        .then(data => {
          this.setState(prevState => {
            return {
              foundImages: [...prevState.foundImages, ...data.hits],
              isLoading: true,
              maxPage: Math.ceil(data.totalHits / 12),
            };
          });
        })
        .finally(() => Loading.remove());
    }
  }

  onButtonLoadMore = () => {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1,
      };
    });
  };

  onSumbitSearch = searchWord => {
    if (searchWord.trim() === this.state.inputQuery) {
      return;
    }
    if (searchWord.trim() === '') {
      return Notify.info('Введіть запит для пошуку!');
    }
    this.setState({ foundImages: [], inputQuery: searchWord, currentPage: 1 });
  };

  render() {
    const { foundImages, maxPage, currentPage } = this.state;
    return (
      <>
        <Searchbar onSumbitSearch={this.onSumbitSearch} />
        <ImageGallery foundImages={foundImages} />
        {foundImages.length === 0 || maxPage === currentPage ? null : (
          <Button
            foundImages={foundImages}
            onButtonLoadMore={this.onButtonLoadMore}
          />
        )}
      </>
    );
  }
}
