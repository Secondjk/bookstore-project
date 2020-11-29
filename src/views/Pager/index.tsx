import React from 'react';
import styles from './Pager.module.css';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { Search } from 'components/Search';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const PagerBase: React.FC<RouteComponentProps> = (x) => {
  return (
    <div className={styles.pager}>
      <Breadcrumbs className={styles.pageName} />
      {x.location.pathname.includes('catalog') ? <Search className={styles.search} /> : null}
    </div>
  );
};

export const Pager = withRouter(PagerBase);