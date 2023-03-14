import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export interface GridTextProps {
  title: string;
  description: string;
  grid: Array<{ title: string; description: string }>;
  background?: boolean;
}

export function GridText({
  title,
  description,
  background = false,
  grid,
}: GridTextProps) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading as="h2" size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Styled.GridContainer>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading as="h3" size="medium" colorDark={!background}>
                {element.title}
              </Heading>
              <TextComponent>{element.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
}
