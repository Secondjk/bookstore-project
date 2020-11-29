import React, { CSSProperties } from 'react';
import { Property } from 'csstype';

export type Orientation = 'horizontal' | 'vertical';
export const mappedOrientation: { readonly [key in Orientation]: string } = {
  horizontal: 'column',
  vertical: 'row',
};

export interface LayoutProps {
  orientation: Orientation

  alignItems?: Property.AlignItems
  justify?: Property.JustifyItems
  gap?: Property.GridGap

  className?: string
  style?: CSSProperties
}

export const Grid: React.FC<LayoutProps> = (x) => (
  <div className={x.className} style={{
    ...x.style,
    display: 'grid',
    alignItems: x.alignItems,
    justifyContent: x.justify,
    gridAutoFlow: mappedOrientation[x.orientation],
    gap: x.gap,
  }}>
    { x.children }
  </div>
);

type LayoutPropsFixed = Omit<LayoutProps, 'orientation'>;

export const VGrid: React.FC<LayoutPropsFixed> = (x) => (
  <Grid {...x} orientation='vertical' />
);

export const HGrid: React.FC<LayoutPropsFixed> = (x) => (
  <Grid {...x} orientation='horizontal' />
);
