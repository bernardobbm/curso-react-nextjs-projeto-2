import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export interface GridTwoColumnsProps {
  title: string;
  text: string;
  imageSrc: string;
  background: boolean;
  sectionId?: string;
}

export function GridTwoColumns({
  title,
  text,
  imageSrc,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading as="h2" uppercase colorDark={!background}>
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
