import styled from "styled-components";
import HeaderGame from "../HeaderGame";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import ChooseMove from "../ChooseMove";
/* export interface GameProps {
  variant: string;
} */

export default function Game() {
  return (
    <>
      <ColumnContainer items={[<HeaderGame elementsToPlay={["Rock", "Paper", "Scissors", "Lizard", "Spock"]} />]} />
      <ColumnContainer paddingBetweenItems={"2em"} items={[<ChooseMove />]} />
    </>
  );
}
