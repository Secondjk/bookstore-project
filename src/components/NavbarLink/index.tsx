import React, { useState } from 'react';
import styles from './Link.module.css';
import { IconType } from 'react-icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CatalogStore, Tag } from 'store/CatalogItemsStore';

export interface NavigationLink {
  name: string
  link: string
}

interface LinkProps extends RouteComponentProps, NavigationLink {
  icon?: IconType
  subMenu?: NavigationLink[]
}

const NavigationLink: React.FC<LinkProps> = (x) => {
  const [isSubOpen, setSubMenuOpen] = useState<boolean>(false);
  const toggleSubMenuState = (state: boolean) => () => x?.subMenu && setSubMenuOpen(state);
  const toLink = (link: string, category?: Tag[]) => (e) => {
    e.stopPropagation();
    x.history.push(link);

    if (category) CatalogStore.filterTags(category);
  };

  return (
    <div
      className={styles.linkItem}
      onClick={toLink(x.link)}
      onMouseOver={toggleSubMenuState(true)}
      onMouseLeave={toggleSubMenuState(false)}
      onFocus={toggleSubMenuState(true)}
      onBlur={toggleSubMenuState(false)}>
      <div className={styles.link}>
        {x.icon ? <x.icon className={styles.icon} /> : null} {x.name}
      </div>
      {isSubOpen &&
        <ul className={styles.subMenu}>
          {x.subMenu.map((item, idx) => (
            <li className={styles.subItem} key={idx} onClick={toLink(item.link, [item.link as Tag])}>
              <div className={styles.subLink}>
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export const NavLink = withRouter(NavigationLink);
