import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import ToggleMultiOptions from "../ToggleMultiOptions";
import { useAppSelector } from "../../app/store/hooks";
export interface CalculatorScreenProps {
  variant: string;
  variantCalculator: string;
}
/**
 * Calculator Screen Component: it contains the logo "Calculator", the three themes to choosen and the screen
 * @param variant mandatory: theme choosen
 * @param variantCalculator mandatory: calculator has three different themes totally unrelated from application theme
 * @returns
 */
export default function CalculatorScreen({ variant, variantCalculator }: CalculatorScreenProps) {
  const digit = useAppSelector((state) => state.CalculatorSlice.digits);
  return (
    <>
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
  perspective: 2px;
`;

export const Screen = styled.div<{ variantCalculator: string }>`
  padding: 2em;
  height: auto;
  min-height: 5em;
  width: 30em;
  max-width: 27em;
  min-width: 11em;
  background-color: ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorScreen};
  border: 4px solid ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
  font-family: "Courier";
  bottom: 0px;
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll;
  @media only screen and (max-width: 900px) {
    width: 11em;
  }
  @media only screen and (min-width: 900px) and (max-width: 1366px) {
    width: 17em;
  }
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
