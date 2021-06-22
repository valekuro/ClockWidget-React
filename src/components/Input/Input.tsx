import React from "react";
import styled from "styled-components";
import { StartAdornmentInput } from "./../StartAdornmentInput/StartAdornmentInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../Theme";

export interface InputProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  variant: string;
  placeholder?: string;
  endAdornments?: JSX.Element;
  startAdornments?: JSX.Element;
  onReset: boolean;
  value: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.EventHandler<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickReset?: React.MouseEventHandler<SVGSVGElement>;
}

/**
 * This component helps you to create an input text. You can specialized the input passing it only the parameters you need. If you set only
 * mandatory parameters, you have a simple input text in which the current value is saved on a state. To use correctly this component,
 * you have to pass it a state value to manage the input value (value props) and a ref for the input (inputRef props).
 * @param placeholder optional: inheritance from Input. It represents the input placeholder.
 * @param variant  mandatory: here you can choose if you want dark theme or light theme passing it "light" or "dark"
 * @param endAdornments optional: it allows to add something in JSX at the end of the input (for example a button search)
 * @param startAdornments optional: it allows to add something in JSX at the top of the input (for example an inside the input)
 * @param onReset mandatory: addons that allows you to show a button useful to clear the input
 * @param inputRef  mandatory: useRef for input
 * @param showListUnderInput optional: insert a list under the component (for example a search list)
 * @param onFocus optional: input onFocus
 * @param onBlur optional: input onBlur
 * @param onChange optional: input onChange
 * @param value mandatory: a state value to manage the input value (useState)
 * @param onClickReset optional: reset onClick: put here the button reset action (you can use it only if onReset is setted to true)
 * @returns
 */
export default function Input({ variant, placeholder, endAdornments, startAdornments, onReset, value, onFocus, onBlur, onChange, inputRef, onClickReset }: InputProps) {
  return (
    <InputContainer>
      <InputText ref={inputRef} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} value={value} variant={variant} onChange={onChange} maxLength={50} />
      <div style={{ marginLeft: "-10em", marginTop: "0.3em" }}>{startAdornments}</div>
      {onReset && value ? (
        <FontAwesomeIcon
          icon={"times"}
          style={{
            zIndex: 100,
            color: `${variant === "light" ? theme.navBarStyles[`light`].colorsecondary : theme.navBarStyles[`dark`].colorsecondary}`,
            cursor: "pointer",
            marginLeft: "20em",
            marginTop: "0.5em",
          }}
          onClick={onClickReset}
        />
      ) : null}
      {endAdornments}
    </InputContainer>
  );
}
export const InputContainer = styled.div`
  display: flex;
  padding: 1em;
  justify-content: center;
`;

export const InputText = styled.input<{ variant: string }>`
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundColor};
  padding: 10px 10px 10px 40px;
  border: 1px solid transparent;
  position: absolute;
  font-size: 12px;
  color: ${(props) => props.theme.navBarStyles[props.variant].color};

  /* Start placeholder style */
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.navBarStyles[props.variant].color};
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.navBarStyles[props.variant].color};
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.navBarStyles[props.variant].color};
  }
  /* End placeholder style */

  &:focus {
    border: 1px solid #000;
    outline: none;
    color: ${(props) => props.theme.navBarStyles[props.variant].colorsecondary};
    background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundOnHoverItem};
  }
`;
