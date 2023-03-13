import { LogoLink } from '../LogoLink';
import { SectionContainer } from '../SectionContainer';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import * as Styled from './styles';
import { MenuLinkProps } from '../MenuLink';
import { LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { useState } from 'react';

export interface MenuProps {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
}

export function Menu({ links = [], logoData }: MenuProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <Styled.Button
        visible={isVisible}
        onClick={() => {
          setIsVisible(true);
        }}
        aria-label="Open/Close menu"
      >
        {isVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>

      <Styled.Container
        visible={isVisible}
        onClick={() => {
          setIsVisible(false);
        }}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}
