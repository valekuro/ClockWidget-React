import styled from "styled-components";
import { useState } from "react";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import Button from "../Button";
import { useAppDispatch } from "../../app/store/hooks";
import { takeDigits, deleteDigit, resetCalculator, resultCalculator, errorCalculator } from "../../reducers/CalculatorSlice";
import { useAppSelector } from "../../app/store/hooks";
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
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"7"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("7")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"8"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("8")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"9"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("9")}
          />,
          <Button
            variant={variant}
            backgroundColor={"#ccccff"}
            style={{ fontWeight: "bold" }}
            color={"black"}
            textOnButton={"DEL"}
            borderRadius={"10%"}
            onClick={() => handleDeleteDigit()}
          />,
        ]}
        paddingBetweenItems={"0.5em"}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"4"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("4")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"5"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("5")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"6"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("6")}
          />,
          <Button style={{}} variant={variant} textOnButton={"+"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("+")} />,
        ]}
        paddingBetweenItems={"0.5em"}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"1"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("1")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"2"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("2")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"3"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("3")}
          />,
          <Button style={{}} variant={variant} textOnButton={"-"} borderRadius={variantCalculator === "themeB" ? "100%" : "10%"} onClick={() => handlePrintDigit("-")} />,
        ]}
        paddingBetweenItems={"0.5em"}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button
            style={{ fontWeight: "bold" }}
            variant={variant}
            textOnButton={"."}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit(".")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            color={"black"}
            variant={variant}
            backgroundColor={"whitesmoke"}
            textOnButton={"0"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("0")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            variant={variant}
            textOnButton={"/"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("/")}
          />,
          <Button
            style={{ fontWeight: "bold" }}
            variant={variant}
            textOnButton={"X"}
            borderRadius={variantCalculator === "themeB" ? "100%" : "10%"}
            onClick={() => handlePrintDigit("*")}
          />,
        ]}
        paddingBetweenItems={"0.5em"}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button
            variant={variant}
            style={{ fontWeight: "bold" }}
            color={"black"}
            backgroundColor={"#ccccff"}
            textOnButton={"RESET"}
            borderRadius={"10%"}
            onClick={() => handleReset()}
          />,
          <Button style={{ fontWeight: "bold" }} backgroundColor={"red"} variant={variant} textOnButton={"="} borderRadius={"10%"} onClick={() => handleResult()} />,
        ]}
        paddingBetweenItems={"0.5em"}
      />
    </KeywordContainer>
  );
}

export const KeywordContainer = styled.div<{ variantCalculator: string }>`
  padding-bottom: 1em;
  background-color: ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
  border: 5px solid ${(props) => props.theme.calculatorThemes[props.variantCalculator].backgroundColorCalculator};
`;

//
