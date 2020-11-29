import React from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { CatalogData } from 'db/CatalogData';
import { Cart } from 'components/Cart';
import { Form } from 'react-bootstrap';
import { CatalogSortData, CatalogSortStore } from 'store/CatalogSortStore';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { Catalog } from '../Catalog';

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = (x) => {
  const { option } = useStore<CatalogSortData>(CatalogSortStore);
  
  return (
    <div className={cn(styles.sidebar, x?.className)}>
      <div className={styles.inf1}>
        <h4>Корзина товаров</h4>
        <Cart />
      </div>
      <div className={styles.sort}>
        <h4>Сортировка товаров</h4>
        <div className={styles.radioGroup}>
          <Form.Check className={styles.radiobutton}
                      type='checkbox'
                      label='По популярности'
                      onChange={() => CatalogSortStore.setOption('popularity')}
                      id={`radio-${Math.ceil(Math.random() * 1000).toString(36)}`}
                      checked={option === 'popularity'} />
          <Form.Check className={styles.radiobutton}
                      type='checkbox'
                      label='По возрастанию цены'
                      onChange={() => CatalogSortStore.setOption('min-price')}
                      id={`radio-${Math.ceil(Math.random() * 1000).toString(36)}`}
                      checked={option === 'min-price'} />
          <Form.Check className={styles.radiobutton}
                      type='checkbox'
                      label='По убыванию цены'
                      onChange={() => CatalogSortStore.setOption('max-price')}
                      id={`radio-${Math.ceil(Math.random() * 1000).toString(36)}`}
                      checked={option === 'max-price'} />
          <Form.Check className={styles.radiobutton}
                      type='checkbox'
                      label='По количеству на складе'
                      onChange={() => CatalogSortStore.setOption('count')}
                      id={`radio-${Math.ceil(Math.random() * 1000).toString(36)}`}
                      checked={option === 'count'} />
        </div>
        <div className={styles.popular}>
          <h4>Популярные товары</h4>
          {CatalogData.sort((a, b) => Math.sign(b.popularity - a.popularity))
            .slice(-3).map((item, idx) =>
              <div className={styles.popularItem} key={idx}>
                <Link className={styles.popularLink} to={`/catalog/item/${item.id}`}>
                  <img className={styles.popularImg} src={item.img} alt="item"  />
                  <div className={styles.popularInfo}>
                    <div>{item.title}</div>
                    <div>{item.price} &#8381;</div>
                  </div>
                </Link>
              </div>,
            )}
        </div>
      </div>
    </div>
  );
};
