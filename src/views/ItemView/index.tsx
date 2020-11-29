import React from 'react';
import styles from './ItemView.module.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CatalogData } from 'db/CatalogData';
import { Button } from 'components/Button';
import { CartStore } from 'store/CartStore';
import { CatalogItem } from 'components/CatalogItem';
import { Sidebar } from '../Sidebar';

interface ItemViewParams {
  id: string
}

const ItemViewBase: React.FC<RouteComponentProps<ItemViewParams>> = (x) => {
  const itemId = x.match.params.id;
  const item = CatalogData.find((item) => item.id === ~~itemId);

  return (item !== undefined ?
    <div className={styles.itemView}>
      <div className={styles.itemInfo}>
        <div className={styles.info1}>
          <img className={styles.img} src={item.img} alt="item" />
          <div className={styles.info}>
            <h4 className={styles.name}>{item.title}</h4>
            <div className={styles.price}>{item.price} &#8381;</div>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur deleniti earum
              excepturi illum libero nam nisi non
            </div>
            <Button label='Добавить в корзину' onClick={() => CartStore.addItem(item)} />
          </div>
        </div>
        <div className={styles.description}>
          <h4 className={styles.header}>Описание книги</h4>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis cumque deserunt dicta
            dolorem expedita hic ipsam magnam magni minima, nostrum, obcaecati omnis placeat quod rem, sunt? Error,
            eveniet.
          </div>
        </div>
        <div className={styles.related}>
          <h4 className={styles.header}>Рекомендуемые книги</h4>
          <div className={styles.list}>
            {CatalogData.slice(-3).map((item, idx) => (
              <CatalogItem className={styles.item} item={item} key={idx} />
            ))}
          </div>
        </div>
      </div>
      <Sidebar className={styles.sidebar} />
    </div>
    : <h2 className={styles.error}>Товар не найден</h2>
  );
};

export const ItemView = withRouter(ItemViewBase);