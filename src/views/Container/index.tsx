import React from 'react';
import styles from './Container.module.css';

export const Container: React.FC = (x) => {
  return (
    <div
      style={{ padding: '40px 0', backgroundColor: '#fff', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)' }}>
      {x.children}
    </div>
  );
};
