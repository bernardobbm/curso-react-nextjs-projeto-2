import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export interface FooterProps {
  html: string;
}

export function Footer({ html }: FooterProps) {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
}
