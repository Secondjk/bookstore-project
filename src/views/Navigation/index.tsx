import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'components/NavbarLink';
import { NavigationControls } from 'db/NavigationControls';

export const Navigation: React.FC = (x) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        {NavigationControls.map((navItem, idx) => (
          <NavLink key={idx} icon={navItem.icon} link={navItem.path} name={navItem.name} subMenu={navItem?.subMenu} />
        ))}
      </ul>
    </nav>
  );
};