import React from 'react';
import styles from './Breadcrumbs.module.css';
import cn from 'classnames';
import { Route, RouteComponentProps,withRouter } from 'react-router-dom';
import { mappedPaths } from 'db/MappedPaths';

const BreadcrumbsBase: React.FC<RouteComponentProps & { className?: string }> = (x) => (
  <React.Fragment>
    <h2 className={cn(styles.breadcrumbs, x?.className)}>
      {mappedPaths[x.location.pathname.slice(1)] ?? 'Каталог книг'}
    </h2>
    <Route path={`${x.match.url}/:path`} component={BreadcrumbsBase} />
  </React.Fragment>
);

export const Breadcrumbs = withRouter(BreadcrumbsBase);
