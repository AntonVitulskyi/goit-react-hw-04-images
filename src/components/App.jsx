import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import Button from './Button/Button';
import { getImages } from '../pixabay-api';

export const App = () => {
  const [maxPage, setMaxPage] = useState(null);
  const [inputQuery, setInputQuery] = useState('');
  const [foundImages, setFoundImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (inputQuery === '') return;
    Loading.dots();
    getImages(inputQuery)
      .then(data => {
        if (data.hits.length === 0) {
          Notify.info('За цим пошуком нічого не знайдено!');
        }
        setFoundImages(data.hits);
        setMaxPage(Math.ceil(data.totalHits / 12));
      })
      .finally(() => Loading.remove());
  }, [inputQuery]);

  useEffect(() => {
    if (currentPage === 1) return;
    Loading.dots();
    getImages(inputQuery, currentPage)
      .then(data => {
        setFoundImages(prevState => [...prevState, ...data.hits]);
        setMaxPage(Math.ceil(data.totalHits / 12));
      })
      .finally(() => Loading.remove());
  }, [currentPage, inputQuery]);

  const onButtonLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const onSumbitSearch = searchWord => {
    if (searchWord.trim() === inputQuery) {
      return;
    }
    if (searchWord.trim() === '') {
      return Notify.info('Введіть запит для пошуку!');
    }
    setFoundImages([]);
    setInputQuery(searchWord);
    setCurrentPage(1);
  };

  return (
    <>
      <Searchbar onSumbitSearch={onSumbitSearch} />
      <ImageGallery foundImages={foundImages} />
      {foundImages.length === 0 || maxPage === currentPage ? null : (
        <Button foundImages={foundImages} onButtonLoadMore={onButtonLoadMore} />
      )}
    </>
  );
};
