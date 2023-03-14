import * as Styled from './styles';

export interface TextComponentProps {
  children: string;
}

export function TextComponent({ children }: TextComponentProps) {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
}
