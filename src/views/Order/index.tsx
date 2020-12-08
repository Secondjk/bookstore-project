import React, { useState } from 'react';
import styles from './Order.module.css';
import { CartStore, CartStoreData } from 'store/CartStore';
import { useStore } from 'effector-react';
import { Cart } from 'components/Cart';
import { RouteComponentProps } from 'react-router-dom';
import { FcCheckmark } from 'react-icons/fc';

export const Order: React.FC<RouteComponentProps> = (x) => {
  const cart = useStore<CartStoreData>(CartStore);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  if (!isSubmitted) {
    setTimeout(() => {
      x.history.push('/');
    }, 3000);

    return (
      <div className={styles.success}>
        <div className={styles.success1}>
          <FcCheckmark className={styles.icon} />
          <div className={styles.successText}>Спасибо за покупку!</div>
        </div>
        <div>Через 3 секунды, вы автоматически будете переведены на стартовую страницу.</div>
      </div>
    );
  }

  return (
    <div className={styles.order}>
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Форма заказа</h4>
        <form className="needs-validation" onSubmit={() => setSubmitted(true)}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">Имя</label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Фамилия</label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email <span className="text-danger">*</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            <div className="invalid-feedback">
              Пожалуйста, введите верный Email адрес.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address">Адрес доставки <span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <label htmlFor="country">Страна <span className="text-danger">*</span></label>
              <select className="custom-select d-block w-100" id="country" required>
                <option>Выберите из списка...</option>
                <option>Россия</option>
                <option>Украина</option>
                <option>Беларусь</option>
                <option>Казахстан</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">Область <span className="text-danger">*</span></label>
              <input type="text" className="form-control d-block w-100" id="state" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="zip">Индекс <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="zip" required />
            </div>
          </div>
          <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="same-address" />
            <label className="custom-control-label" htmlFor="same-address">Оформить посылку как подарок</label>
          </div>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="save-info" />
            <label
              className="custom-control-label" htmlFor="save-info">Сохранить информацию для последующих покупок</label>
          </div>
          <hr />
          <h4 className="mb-3">Способ оплаты</h4>
          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
              <label className="custom-control-label" htmlFor="credit">Онлайн банковской картой</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
              <label className="custom-control-label" htmlFor="debit">Онлайн-деньги</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
              <label className="custom-control-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-name">Имя держателя карты</label>
              <input type="text" className="form-control" id="cc-name" required />
              <small className="text-muted">Полное имя, указанное на лицевой стороне карты</small>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-number">Номер банковской карты</label>
              <input type="text" className="form-control" id="cc-number" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">Срок действия</label>
              <input type="text" className="form-control" id="cc-expiration" required />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-cvv">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" required />
            </div>
          </div>
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">Оформить заказ</button>
        </form>
      </div>
      <Cart className={styles.cart} showButtons={false} style={{ height: '100%' }} />
    </div>
  );
};
