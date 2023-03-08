import { ReactNode } from 'react';
import * as Styled from './styles';

export interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <Styled.Title>{children}</Styled.Title>;
}
