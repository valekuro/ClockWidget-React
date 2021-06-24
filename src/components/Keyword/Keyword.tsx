import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import Button from "../Button";
import { useAppDispatch } from "../../app/store/hooks";
import { takeDigits, deleteDigit, resetCalculator, resultCalculator, errorCalculator } from "../../reducers/CalculatorSlice";
import { RootState } from "../../app/store/store";
import { useAppSelector } from "../../app/store/hooks";
import Theme, { theme } from "../Theme";
const Parser = require("expr-eval").Parser;

export interface KeywordProps {
  variant: string;
  variantCalculator: string;
}

export default function Keyword({ variant, variantCalculator }: KeywordProps) {
  const dispatch = useAppDispatch();

  const [error, setError] = useState<boolean>(false);

  const digit = useAppSelector((state) => state.CalculatorSlice.digits);

  const handlePrintDigit = (digit: string) => {
    if (error) {
      setError(false);
      dispatch(resetCalculator());
      dispatch(takeDigits(digit));
    } else {
      dispatch(takeDigits(digit));
    }
  };

  const handleDeleteDigit = () => {
    dispatch(deleteDigit());
  };

  const handleReset = () => {
    dispatch(resetCalculator());
  };

  const handleResult = () => {
    try {
      var expression = Parser.parse(digit);
      var result = expression.evaluate({});
      dispatch(resultCalculator(result));
      if (result == "Infinity") {
        setError(true);
      }
    } catch (error) {
      dispatch(errorCalculator());
      setError(true);
    }
  };

  return (
    <KeywordContainer variantCalculator={variantCalculator}>
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"7"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("7")} />,
          <Button style={{}} variant={variant} textOnButton={"8"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("8")} />,
          <Button style={{}} variant={variant} textOnButton={"9"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("9")} />,
          <Button style={{}} variant={variant} textOnButton={"DEL"} borderRadius={"10%"} onClick={() => handleDeleteDigit()} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"4"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("4")} />,
          <Button style={{}} variant={variant} textOnButton={"5"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("5")} />,
          <Button style={{}} variant={variant} textOnButton={"6"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("6")} />,
          <Button style={{}} variant={variant} textOnButton={"+"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("+")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"1"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("1")} />,
          <Button style={{}} variant={variant} textOnButton={"2"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("2")} />,
          <Button style={{}} variant={variant} textOnButton={"3"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("3")} />,
          <Button style={{}} variant={variant} textOnButton={"-"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("-")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"."} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit(".")} />,
          <Button style={{}} variant={variant} textOnButton={"0"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("0")} />,
          <Button style={{}} variant={variant} textOnButton={"/"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("/")} />,
          <Button style={{}} variant={variant} textOnButton={"X"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("*")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"RESET"} borderRadius={"10%"} onClick={() => handleReset()} />,
          <Button style={{}} variant={variant} textOnButton={"="} borderRadius={"10%"} onClick={() => handleResult()} />,
        ]}
      />
    </KeywordContainer>
  );
}

export const KeywordContainer = styled.div<{ variantCalculator: string }>`
  margin-top: -0.8em;
  padding-bottom: 1em;
  background-color: ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
  border: 5px solid ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
  box-shadow: 0 3px 26px rgb(0 0 0 / 31%), 0 16px 47px rgb(0 0 0 / 65%);
`;

//
