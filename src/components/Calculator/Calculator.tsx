import styled from "styled-components";
import Keyword from "../Keyword";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import CalculatorScreen from "../CalculatorScreen";
export interface CalculatorProps {
  variant: string;
  variantCalculator: string;
}
/**
 * Calculator components: it contains a component for the screen and a component for the keyword
 * @param variant mandatory: theme choosen
 * @param variantCalculator mandatory: calculator has three different themes totally unrelated from application theme
 * @returns
 */
export default function Calculator({ variant, variantCalculator }: CalculatorProps) {
  return (
    <CalculatorContainer>
      <ColumnContainer variant={variant} items={[<CalculatorScreen variantCalculator={variantCalculator} variant={variant} />]} />
      <ColumnContainer variant={variant} items={[<Keyword variant={variant} variantCalculator={variantCalculator} />]} />
    </CalculatorContainer>
  );
}

export const CalculatorContainer = styled.div`
  box-shadow: 0 3px 26px rgb(0 0 0 / 31%), 0 16px 47px rgb(0 0 0 / 65%);
  display: flex;
  flex-flow: column nowrap;
`;
