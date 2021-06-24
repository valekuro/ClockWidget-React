import styled from "styled-components";
import { useState } from "react";
import Keyword from "../Keyword";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import CalculatorScreen from "../CalculatorScreen";
export interface CalculatorProps {
  variant: string;
  variantCalculator: string;
}

export default function Calculator({ variant, variantCalculator }: CalculatorProps) {
  console.log(variantCalculator);
  return (
    <>
      <ColumnContainer variant={variant} items={[<div></div>, <CalculatorScreen variantCalculator={variantCalculator} variant={variant} />, <div></div>]} />
      <ColumnContainer variant={variant} items={[<div></div>, <Keyword variant={variant} variantCalculator={variantCalculator} />, <div></div>]} />
    </>
  );
}
