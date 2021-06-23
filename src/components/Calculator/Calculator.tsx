import styled from "styled-components";
import { useState } from "react";
import Keyword from "../Keyword";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import CalculatorScreen from "../CalculatorScreen";
export interface CalculatorProps {
  variant: string;
}

export default function Calculator({ variant }: CalculatorProps) {
  const [output, setOutput] = useState<string>("");
  const handleOnClick = (digit: string) => {
    setOutput(digit);
  };
  return (
    <CalculatorContainer>
      <ColumnContainer variant={variant} items={[<div></div>, <CalculatorScreen variant={variant} digit={output} />, <div></div>]} />
      <ColumnContainer variant={variant} items={[<div></div>, <Keyword variant={variant} onClick={() => handleOnClick("")} />, <div></div>]} />
    </CalculatorContainer>
  );
}

export const CalculatorContainer = styled.div``;
