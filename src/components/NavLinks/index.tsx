import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';

export interface NavLinksProps {
  links?: MenuLinkProps[];
}

export function NavLinks({ links = [] }: NavLinksProps) {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => {
        return <MenuLink key={link.link} {...link}></MenuLink>;
      })}
    </Styled.Container>
  );
}
