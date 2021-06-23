import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
export interface CalculatorScreenProps {
  variant: string;
  digit: string;
}

export default function CalculatorScreen({ variant, digit }: CalculatorScreenProps) {
  return (
    <>
      <div style={{ paddingTop: "10em" }}></div>
      <ColumnContainer variant={variant} items={[<div>calc</div>, <div>TODO: TOGGLE</div>]} />
      <Screen>{digit}</Screen>
    </>
  );
}

export const Screen = styled.div`
  padding: 2em;
`;
