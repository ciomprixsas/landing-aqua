import React from 'react';

interface TitleProps {
  children: any;
  color: string;
  size: string;
  align: string;
  weight?: number;
  cssClass?: string;
}

export const Title: React.FC<TitleProps> = ({
  children,
  color,
  size,
  align,
  weight,
  cssClass,
}: TitleProps): JSX.Element => {
  return (
    <span
      className={`block w-full tracking-wide leading-tight ${align} ${cssClass}`}
      style={{ color, fontSize: size, fontWeight: weight }}
    >
      {children}
    </span>
  );
};