import React from 'react';
import styles from './Footer.module.css';
import { HGrid, VGrid } from 'layouts/Grid';
import { Flex } from 'layouts/Flex';
import { BiMap, BiUser, BiEnvelope } from 'react-icons/bi';
import { FaCcVisa, FaCcApplePay, FaCcPaypal } from 'react-icons/fa';
import { SiMastercard, SiSamsungpay } from 'react-icons/si';

export const Footer = () => {
  return (
    <React.Fragment>
      <VGrid className={styles.footer}>
        <HGrid className={styles.top} alignItems='stretch'>
          <div className={styles.about}>
            <h2 className={styles.aboutHeader}>Книжный магазин</h2>
            <p className={styles.aboutText}>Morbi gravida imperdiet rutrum fusce
              mattis, lectus consequat vestibulum,
              duinibh fermentum ligula.
            </p>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.contactsHeader}>Контакты</h3>
            <div className={styles.contactsRow}>
              <BiMap className={styles.icon} color='white' />
              <p className={styles.contactsText}>
                <strong className={styles.strong}>Адрес:</strong> 123 Книжная улица, Москва, Россия
              </p>
            </div>
            <div className={styles.contactsRow}>
              <BiUser className={styles.icon} color='white' />
              <p className={styles.contactsText}>
                <strong className={styles.strong}>Телефон:</strong> +7 (800) 555-35-35
              </p>
            </div>
            <div className={styles.contactsRow}>
              <BiEnvelope className={styles.icon} color='white' />
              <p className={styles.contactsText}>
                <strong className={styles.strong}>E-mail:</strong> knigi@example.com
              </p>
            </div>
          </div>
          <div className={styles.help}>
            <h3 className={styles.contactsHeader}>Помощь</h3>
            <p>Отслеживание товара</p>
            <p>Частые вопросы</p>
            <p>Возврат товара</p>
            <p>Любимые авторы</p>
          </div>
        </HGrid>
      </VGrid>
      <Flex innerClassName={styles.bottom} orientation='vertical' alignItems='center' justify='space-between'>
        <div>© Copyright 2020 <span className={styles.name}>Книжный магазин</span>. All Rights Reserved.</div>
        <div className={styles.payments}>
          <FaCcVisa className={styles.payment} color='white' />
          <SiMastercard className={styles.payment} color='white' />
          <FaCcApplePay className={styles.payment} color='white' />
          <FaCcPaypal className={styles.payment} color='white' />
          <SiSamsungpay className={styles.payment} color='white' />
        </div>
      </Flex>
    </React.Fragment>
  );
};
