import { ReactNode } from 'react';

import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export interface SectionBackgroundProps {
  children: ReactNode;
  background?: boolean;
}

export function SectionBackground({
  children,
  background = false,
}: SectionBackgroundProps) {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}
