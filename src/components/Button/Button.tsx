import styled from "styled-components";
import React from "react";
export interface ButtonProps {
  borderRadius: string;
  textOnButton?: string;
  iconOnButton?: JSX.Element;
  variant: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  shadowPrimary?: string;
  shadowSecondary?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/**
 * This component generates a generic button. With props you can create different buttons' style.
 * @param borderRadius mandatory: you have to specify (in percentage) the border radius
 * @param textOnButton optional: you can fill the button with a text or...
 * @param iconOnButton optional: ...or you can add an icon
 * @param variant mandatory: the theme choosen (change only the opacity)
 * @param style optional: you can add other css properties if you need
 * @param backgroundColor optional: you can change the default background color if you need
 * @param color optional: you can change the default text color if you need
 * @param fontSize optional: you can change the default font size if you need
 * @param onClick optional: you can add an event to the button (what does button do?)
 * @returns
 */
export default function Button({
  borderRadius,
  shadowPrimary,
  shadowSecondary,
  textOnButton,
  iconOnButton,
  variant,
  style,
  backgroundColor,
  color,
  fontSize,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyle
      borderRadius={borderRadius}
      variant={variant}
      style={style}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      shadowPrimary={shadowPrimary}
      shadowSecondary={shadowSecondary}
      onClick={onClick}
    >
      {textOnButton ? textOnButton : iconOnButton}
    </ButtonStyle>
  );
}

export const ButtonStyle = styled.button<{
  borderRadius: string;
  color: string | undefined;
  fontSize: string | undefined;
  variant: string;
  backgroundColor: string | undefined;
  shadowPrimary: string | undefined;
  shadowSecondary: string | undefined;
}>`
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => (props.fontSize ? props.fontSize : props.fontSize)};
  padding: 1em;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : props.theme.navBarStyles[props.variant].backgroundColor)};
  color: ${(props) => (props.color ? props.color : props.theme.navBarStyles[props.variant].color)};
  box-shadow: 0 0.6em ${(props) => (props.shadowPrimary ? props.shadowPrimary : "rgba(0, 0, 0, 0.6)")},
    0 0.9em ${(props) => (props.shadowSecondary ? props.shadowSecondary : "rgba(0, 0, 0, 0.4)")};
  position: relative;
  top: 0;
  transition: all 100ms ease-in-out;

  :active {
    top: 0.4em;
    box-shadow: 0 0.2em ${(props) => (props.shadowPrimary ? props.shadowPrimary : "rgba(0, 0, 0, 0.6)")},
      0 0.5em ${(props) => (props.shadowSecondary ? props.shadowSecondary : "rgba(0, 0, 0, 0.4)")};
  }
`;
