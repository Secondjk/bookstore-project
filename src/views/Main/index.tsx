import React from 'react';
import styles from './Main.module.css';
import { CatalogData } from 'db/CatalogData';
import { Catalog } from 'views/Catalog';
import { CatalogItem } from 'components/CatalogItem';
import { Flex } from 'layouts/Flex';
import { HGrid, VGrid } from 'layouts/Grid';
import { GrGallery, GrUserManager } from 'react-icons/gr';
import { GiEngagementRing, GiSwordClash } from 'react-icons/gi';
import { FaFan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className="blank floated">
        <section>
          <h3>Последние пополнения каталога</h3>
          <p>Новые товары всегда будут видны на этой странице!</p>
        </section>
        <section>
          <div className={styles.newList}>
            {CatalogData.slice(-4).map((item, idx) => (
              <CatalogItem className={styles.item} item={item} key={idx} />
            ))}
          </div>
        </section>
      </div>
      <div className={styles.categories}>
        <div className={styles.catList}>
          <Link className={styles.catItem} to='/catalog/detectives'>
            <Flex orientation='horizontal' alignItems='center' justify='stretch'>
              <div className={styles.iconWrapper}>
                <GrUserManager className={styles.icon} />
              </div>
              <div className={styles.iconText}>Детективы</div>
            </Flex>
          </Link>
          <Link className={styles.catItem} to='/catalog/fantasy'>
            <Flex orientation='horizontal' alignItems='center' justify='stretch'>
              <div className={styles.iconWrapper}>
                <FaFan color='#a200fc' className={styles.icon} />
              </div>
              <div className={styles.iconText}>Фэнтези</div>
            </Flex>
          </Link>
          <Link className={styles.catItem} to='/catalog/prose'>
            <Flex orientation='horizontal' alignItems='center' justify='stretch'>
              <div className={styles.iconWrapper}>
                <GiSwordClash color='#f79400' className={styles.icon} />
              </div>
              <div className={styles.iconText}>Современная проза</div>
            </Flex>
          </Link><Link className={styles.catItem} to='/catalog/textbooks'>
            <Flex orientation='horizontal' alignItems='center' justify='stretch'>
              <div className={styles.iconWrapper}>
                <GiEngagementRing color='#00cdef' className={styles.icon} />
              </div>
              <div className={styles.iconText}>Школьные учебники</div>
            </Flex>
          </Link>
        </div>
      </div>
    </div>
  );
};
