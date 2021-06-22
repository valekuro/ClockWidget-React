import styled from "styled-components";
export interface NavigationBarProps {
  navigationItems: JSX.Element[];
  logo?: string;
  variant: string;
}

/**
 * Navigation Bar Component
 * @param navigationItem mandatory: navbar elements array. Put here all the navigation bar items.
 * @param variant mandatory: you can choose if you want light theme or dark theme
 * @param logo optional: you can insert a logo on your navigationbar
 * @returns
 */
export default function NavigationBar({ navigationItems, variant, logo }: NavigationBarProps) {
  return (
    <NavigationNav>
      <NavigationBarContainer variant={variant}>
        <LogoContainer variant={variant}>{logo}</LogoContainer>
        <NavigationBarItemsContainer>
          {navigationItems.map((item: JSX.Element, index: number) => {
            return (
              <NavItemContainer key={index} variant={variant}>
                {item}
              </NavItemContainer>
            );
          })}
        </NavigationBarItemsContainer>
      </NavigationBarContainer>
    </NavigationNav>
  );
}

export const NavigationNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 6;
`;
export const NavigationBarContainer = styled.div<{
  variant: string;
}>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundColor};
  box-shadow: ${(props) => props.theme.navBarStyles[props.variant].boxShadowNavBar};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
`;

export const NavigationBarItemsContainer = styled.div<{}>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

export const NavItemContainer = styled.div<{
  variant: string;
}>`
  display: flex;
  padding: 1.3em;
  cursor: pointer;
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundOnHoverItem};
  }
`;

export const LogoContainer = styled.div<{
  variant: string;
}>`
  display: flex;
  padding: 0.5em;
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: ${(props) => props.theme.logoStyles.fontSizeLogo};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
`;
