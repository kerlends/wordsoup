import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './styles.scss';

const Page = ({ children }) => {
  return (
    <div className={cx('container', css.page)}>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any.isRequired
}

export default Page;
