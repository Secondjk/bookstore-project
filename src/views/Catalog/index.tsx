import React, { useEffect } from 'react';
import styles from './Catalog.module.css';
import { CatalogEntity, CatalogStore, CatalogStoreData, Tag } from 'store/CatalogItemsStore';
import { useStore } from 'effector-react';
import { CatalogSortData, CatalogSortStore } from 'store/CatalogSortStore';
import { CatalogItem } from 'components/CatalogItem';
import { Sidebar } from 'views/Sidebar';
import { RouteComponentProps } from 'react-router-dom';

interface CatalogParams {
  category: Tag
}

export const Catalog: React.FC<RouteComponentProps<CatalogParams>> = (x) => {
  const data = useStore<CatalogStoreData>(CatalogStore);

  const category = x.match.params.category ?? 'all';
  console.log(category);

  useEffect(() => {
    CatalogSortStore.setOption('popularity');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        {data.filtered.map((item, index) =>
          <CatalogItem item={item} key={index} />,
        )}
      </div>
      <Sidebar className={styles.sidebar} />
    </div>
  );
};
