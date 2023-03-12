import { ReactNode } from 'react';
import * as Styled from './styles';

export interface SectionContainerProps {
  children: ReactNode;
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
