import { ReactNode } from 'react';
import * as Styled from './styles';

type HeadingsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSizes = 'small' | 'medium' | 'big' | 'huge';

export interface HeadingProps {
  children: ReactNode;
  colorDark: boolean;
  size: HeadingSizes;
  as: HeadingsType;
  uppercase: boolean;
}

export function Heading({
  children,
  colorDark = false,
  size = 'huge',
  as = 'h1',
  uppercase = false,
}: HeadingProps) {
  return (
    <Styled.Title
      colorDark={colorDark}
      size={size}
      as={as}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
}
