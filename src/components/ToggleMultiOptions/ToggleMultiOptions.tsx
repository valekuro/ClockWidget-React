import styled from "styled-components";
import React, { useRef } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { chooseTheme } from "../../reducers/CalculatorSlice";

export interface ToggleMultiOptionsProps {
  options: string[];
}

export default function ToggleMultiOptions({ options }: ToggleMultiOptionsProps) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement[]>([]);
  const handleInputRadio = (index: number) => {
    console.log(ref.current.map((el) => el.checked));
    //console.log(ref.current[index].checked);
    dispatch(chooseTheme(ref.current[index].value));
  };

  return (
    <div>
      {options.map((item: string, index: number) => {
        return (
          <label>
            <input
              ref={(el: any) => {
                ref.current[index] = el;
              }}
              onChange={() => handleInputRadio(index)}
              value={item}
              type={"radio"}
              key={index}
              name="theme"
            />
            {item}
          </label>
        );
      })}
    </div>
  );
}
//ref={(el) => (ref.current[index] = el)}
export const Radio = styled.input``;
