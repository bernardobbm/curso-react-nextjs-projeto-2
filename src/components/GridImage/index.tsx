import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export interface GridImageProps {
  title: string;
  description: string;
  background?: boolean;
  grid: Array<{ altText: string; imageSrc: string }>;
}

export function GridImage({
  title,
  description,
  grid,
  background = false,
}: GridImageProps) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading as="h2" size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Styled.GridContainer>
          {grid.map((element) => (
            <Styled.GridElement key={element.imageSrc}>
              <Styled.Image src={element.imageSrc} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
}
