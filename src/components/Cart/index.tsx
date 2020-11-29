import React, { CSSProperties } from 'react';
import styles from './Cart.module.css';
import cn from 'classnames';
import { useStore } from 'effector-react';
import { CartStoreData } from 'store/CartStore';
import { CartStore } from 'store/CartStore';
import { Button } from 'components/Button';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface CartProps extends RouteComponentProps {
  className?: string
  showButtons?: boolean
  style?: CSSProperties
}

const CartBase: React.FC<CartProps> = (x) => {
  const cart = useStore<CartStoreData>(CartStore);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <div className={cn(styles.cart, x?.className)} style={x?.style}>
      <div className={styles.list}>
        {!isCartEmpty ? cart.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>{item.title}</div>
              <AiOutlineClose className={styles.infoIcon}
                              color='red'
                              onClick={() => CartStore.deleteItem(item.id)} />
            </div>
            <div className={styles.price}>{item.price} &#8381;</div>
          </div>
        )) : <div className={styles.empty}>Корзина пуста</div>}
      </div>
      {!isCartEmpty &&
        <div className={styles.info}>
          <div className={styles.total}>
            Сумма покупки: {total} &#8381;
          </div>
          {x.showButtons &&
            <div className={styles.options}>
              <Button className={styles.buy}
                      label='Оплатить'
                      onClick={() => x.history.push('/order')}
                      disabled={isCartEmpty} />
              <Button className={styles.clear}
                      label='Очистить'
                      onClick={() => CartStore.clear()}
                      disabled={isCartEmpty} />
            </div>
          }
        </div>
      }
    </div>
  );
};

export const Cart = withRouter(CartBase);