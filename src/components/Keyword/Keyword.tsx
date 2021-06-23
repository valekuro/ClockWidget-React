import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import Button from "../Button";
export interface KeywordProps {
  variant: string;
  onClick: (x: string) => void;
}

export default function Keyword({ variant, onClick }: KeywordProps) {
  return (
    <>
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"7"} borderRadius={"10%"} onClick={() => onClick("7")} />,
          <Button style={{}} variant={variant} textOnButton={"8"} borderRadius={"10%"} onClick={() => onClick("8")} />,
          <Button style={{}} variant={variant} textOnButton={"9"} borderRadius={"10%"} onClick={() => onClick("9")} />,
          <Button style={{}} variant={variant} textOnButton={"DEL"} borderRadius={"10%"} onClick={() => onClick("DEL")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"4"} borderRadius={"10%"} onClick={() => onClick("4")} />,
          <Button style={{}} variant={variant} textOnButton={"5"} borderRadius={"10%"} onClick={() => onClick("5")} />,
          <Button style={{}} variant={variant} textOnButton={"6"} borderRadius={"10%"} onClick={() => onClick("6")} />,
          <Button style={{}} variant={variant} textOnButton={"+"} borderRadius={"10%"} onClick={() => onClick("+")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"1"} borderRadius={"10%"} onClick={() => onClick("1")} />,
          <Button style={{}} variant={variant} textOnButton={"2"} borderRadius={"10%"} onClick={() => onClick("2")} />,
          <Button style={{}} variant={variant} textOnButton={"3"} borderRadius={"10%"} onClick={() => onClick("3")} />,
          <Button style={{}} variant={variant} textOnButton={"-"} borderRadius={"10%"} onClick={() => onClick("-")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"."} borderRadius={"10%"} onClick={() => onClick(".")} />,
          <Button style={{}} variant={variant} textOnButton={"0"} borderRadius={"10%"} onClick={() => onClick("0")} />,
          <Button style={{}} variant={variant} textOnButton={"/"} borderRadius={"10%"} onClick={() => onClick("/")} />,
          <Button style={{}} variant={variant} textOnButton={"X"} borderRadius={"10%"} onClick={() => onClick("X")} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <Button style={{}} variant={variant} textOnButton={"RESET"} borderRadius={"10%"} onClick={() => onClick("RESET")} />,
          <Button style={{}} variant={variant} textOnButton={"="} borderRadius={"10%"} onClick={() => onClick("=")} />,
        ]}
      />
    </>
  );
}
