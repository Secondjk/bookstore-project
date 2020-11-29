import React, { CSSProperties, FC } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps {
  label?: string
  disabled?: boolean
  size?: 'small' | 'medium'

  onClick?: () => void

  style?: CSSProperties
  className?: string
}

export const Button: FC<ButtonProps> = (x) => {
  const btnClass = cn(
    styles.button,
    x?.className,
    x?.size === 'medium' ? styles.medium : undefined,
    x?.disabled ? styles.disabled : undefined,
  );

  return <button
    style={x?.style}
    className={btnClass}
    disabled={x.disabled}
    onClick={x.disabled ? undefined : x?.onClick}>
    { x.label ?? '' }
  </button>;
};
