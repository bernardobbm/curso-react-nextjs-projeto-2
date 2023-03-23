import { ReactNode } from 'react';

import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export interface SectionBackgroundProps {
  children: ReactNode;
  background?: boolean;
  sectionId?: string;
}

export function SectionBackground({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}
