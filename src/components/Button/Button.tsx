import styled from "styled-components";
import React from "react";
export interface ButtonProps {
  borderRadius: string;
  textOnButton?: string;
  iconOnButton?: JSX.Element;
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
  padding: 1em;
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundColor};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
  box-shadow: 0 0.6em rgba(0, 0, 0, 0.6), 0 0.9em rgba(0, 0, 0, 0.4);
  position: relative;
  top: 0;
  transition: all 100ms ease-in-out;

  :active {
    top: 0.4em;
    box-shadow: 0 0.2em rgba(0, 0, 0, 0.6), 0 0.5em rgba(0, 0, 0, 0.4);
  }
`;
