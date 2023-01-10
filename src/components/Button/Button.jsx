import PropTypes from 'prop-types';

import styles from '../../styles.module.css';

export default function Button({ onButtonLoadMore }) {
  return (
    <button onClick={onButtonLoadMore} type="button" className={styles.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onButtonLoadMore: PropTypes.func,
};
