import styled from "styled-components";
import React, { useRef } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { chooseTheme } from "../../reducers/CalculatorSlice";

export interface ToggleMultiOptionsProps {
  options: string[];
}

export default function ToggleMultiOptions({ options }: ToggleMultiOptionsProps) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement[] | null>([]);
  const handleInputRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(chooseTheme(e.target.value));
  };

  return (
    <div>
      {options.map((item: string, index: number) => {
        return (
          <label>
            <Radio onChange={(e) => handleInputRadio(e)} value={item} type={"radio"} key={index} name="theme" />
            {item}
          </label>
        );
      })}
    </div>
  );
}
//ref={(el) => (ref.current[index] = el)}
export const Radio = styled.input``;
