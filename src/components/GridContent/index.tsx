import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export interface GridContentProps {
  title: string;
  html: string;
  background: boolean;
}

export function GridContent({ title, html, background }: GridContentProps) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading as="h2" uppercase colorDark={!background}>
          {title}
        </Heading>

        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
}
