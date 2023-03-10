import { ReactNode } from 'react';
import * as Styled from './styles';

interface TextComponentProps {
  children: ReactNode;
}

export function TextComponent({ children }: TextComponentProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
