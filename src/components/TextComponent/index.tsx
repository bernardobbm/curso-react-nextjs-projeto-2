import { ReactNode } from 'react';
import * as Styled from './styles';

export interface TextComponentProps {
  children: ReactNode;
}

export function TextComponent({ children }: TextComponentProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
