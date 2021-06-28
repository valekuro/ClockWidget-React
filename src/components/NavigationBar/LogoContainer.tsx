import styled from "styled-components";

export interface LogoContainerProps {
  label: string;
  variant: string;
}

export default function LogoContainer({ variant, label }: LogoContainerProps) {
  return <Container variant={variant}>{label}</Container>;
}

export const Container = styled.div<{
  variant: string;
}>`
  display: flex;
  padding: 0.5em;
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: ${(props) => props.theme.logoStyles.fontSizeLogo};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
`;
