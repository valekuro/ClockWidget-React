import styled from "styled-components";
import React from "react";
export interface ButtonProps {
  borderRadius: string;
  textOnButton?: string;
  iconOnButton?: JSX.Element[];
  variant: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ borderRadius, textOnButton, iconOnButton, variant, style, onClick }: ButtonProps) {
  return (
    <ButtonStyle borderRadius={borderRadius} variant={variant} style={style} onClick={onClick}>
      {textOnButton ? textOnButton : iconOnButton}
    </ButtonStyle>
  );
}

export const ButtonStyle = styled.button<{ borderRadius: string; variant: string }>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundColor};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
`;
