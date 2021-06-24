import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import ToggleMultiOptions from "../ToggleMultiOptions";
import { useAppSelector } from "../../app/store/hooks";
export interface CalculatorScreenProps {
  variant: string;
  variantCalculator: string;
}

export default function CalculatorScreen({ variant, variantCalculator }: CalculatorScreenProps) {
  const digit = useAppSelector((state) => state.CalculatorSlice.digits);
  return (
    <>
      <div style={{ paddingTop: "8.4em" }}></div>
      <ScreenContainer variantCalculator={variantCalculator}>
        <ColumnContainer variant={variant} items={[<Calc variantCalculator={variantCalculator}>Calcolatrice</Calc>, <ToggleMultiOptions options={["A", "B", "C"]} />]} />
        <Screen variantCalculator={variantCalculator}>
          <DigitItem>{digit}</DigitItem>
        </Screen>
      </ScreenContainer>
    </>
  );
}

export const ScreenContainer = styled.div<{ variantCalculator: string }>`
  background-color: ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
  box-shadow: 0 3px 26px rgb(0 0 0 / 31%), 0 16px 47px rgb(0 0 0 / 65%);
  perspective: 2px;
`;

export const Screen = styled.div<{ variantCalculator: string }>`
  padding: 2em;
  height: auto;
  min-height: 5em;
  width: -webkit-fill-available;
  max-width: 17em;
  min-width: 10em;
  background-color: ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorScreen};
  border: 4px solid ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
  font-family: "Courier";
  bottom: 0px;
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll;
`;

export const DigitItem = styled.span`
  height: auto;
  min-height: 5em;
  width: auto;
  max-width: 17em;
  min-width: 10em;
  font-size: 3em;
`;

export const Calc = styled.div<{ variantCalculator: string }>`
  font-family: "Pacifico", cursive;
  font-size: large;
  color: ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorScreen};
`;
