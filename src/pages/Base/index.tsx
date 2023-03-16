import { ReactNode } from 'react';

import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export interface BaseProps {
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHtml: string;
  children: ReactNode;
}

export function Base({
  links = [],
  logoData,
  footerHtml,
  children,
}: BaseProps) {
  return (
    <>
      <Menu logoData={logoData} links={links} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
}
