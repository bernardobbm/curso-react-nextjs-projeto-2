import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export interface GridTwoColumnsProps {
  title: string;
  text: string;
  imageSrc: string;
  background: boolean;
}

export function GridTwoColumns({
  title,
  text,
  imageSrc,
  background = false,
}: GridTwoColumnsProps) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={imageSrc} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
}
