import * as Styled from './styles';
import { Heading } from '../Heading';

export interface LogoLinkProps {
  text: string;
  imageSrc?: string;
  link: string;
}

export function LogoLink({ text, imageSrc = '', link }: LogoLinkProps) {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!imageSrc && <img src={imageSrc} alt={text} />}
        {!imageSrc && text}
      </Styled.Container>
    </Heading>
  );
}
