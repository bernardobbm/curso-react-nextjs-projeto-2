import { ReactNode } from 'react';
import * as Styled from './styles';

export interface HeadingProps {
  children: ReactNode;
  light: boolean;
}

export function Heading({ children, light }: HeadingProps) {
  return <Styled.Title light={light}>{children}</Styled.Title>;
}
