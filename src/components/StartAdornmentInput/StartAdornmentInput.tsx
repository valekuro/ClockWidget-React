import styled from "styled-components";

export interface StartAdornmentInputProps {
  variant: string;
}
/**
 * this container is on another file because it is used both in Input component and in Input.stories.
 * In this way it is easiest call it in both files.
 */

export const StartAdornmentInput = styled.span<StartAdornmentInputProps>`
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
  z-index: 100;
`;

export default StartAdornmentInput;
