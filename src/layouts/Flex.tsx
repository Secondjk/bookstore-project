import React from 'react';
import { LayoutProps, mappedOrientation } from './Grid';
import { Property } from 'csstype';

interface FlexLayoutProps extends LayoutProps {
  justify?: Property.JustifyContent

  innerClassName?: string
  outerClassName?: string

  innerStyle?: React.CSSProperties
  outerStyle?: React.CSSProperties

  reverse?: boolean
}

export const Flex: React.FC<FlexLayoutProps> = (x) => {
  const direction = mappedOrientation[x.orientation] + (x.reverse ? '-reverse' : '') as Property.FlexDirection;

  return (
    <div style={x.outerStyle} className={x.outerClassName}>
      <div className={x.innerClassName} style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: x.justify,
        alignItems: x.alignItems,
        ...x.innerStyle,
      }}>
        {x.children}
      </div>
    </div>
  );
};
