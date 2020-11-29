import React, { CSSProperties } from 'react';
import styles from './CatalogItem.module.css';
import cn from 'classnames';
import { CatalogEntity } from 'store/CatalogItemsStore';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { CartStore } from 'store/CartStore';
import { Cart } from '../Cart';

interface CatalogItemProps {
  item: CatalogEntity
  style?: CSSProperties
  className?: string
}

export const CatalogItem: React.FC<CatalogItemProps> = (x) => {
  return (
    <div className={cn(styles.catalogItem, x?.className)} style={x?.style}>
      <Link className={styles.itemLink} to={`/catalog/item/${x.item.id}`}>
        <img className={styles.itemImg} src={x.item.img} alt={x.item.title} />
      </Link>
      <div className={styles.description}>
        <Link className={styles.descriptionLink} to={`/catalog/item/${x.item.id}`}>
          {x.item.title}
        </Link>
        <div className={styles.price}>
          {x.item.price} &#8381;
        </div>
        <Button label="Добавить в корзину"
                style={{ display: 'inline-block' }}
                onClick={() => CartStore.addItem(x.item)} />
      </div>
    </div>
  );
};
