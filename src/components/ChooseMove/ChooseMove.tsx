import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import Button from "../Button";
import { theme } from "../Theme";
import Scissors from "../../images/gameImages/icon-scissors.svg";
import Lizard from "../../images/gameImages/icon-lizard.svg";
import Spock from "../../images/gameImages/icon-spock.svg";
import Rock from "../../images/gameImages/icon-rock.svg";
import Paper from "../../images/gameImages/icon-paper.svg";
//export interface ChooseMoveProps {}

export default function ChooseMove() {
  return (
    <>
      <ColumnContainer
        items={[
          <div></div>,

          <LineTwo></LineTwo>,
          <Button
            style={{ border: "1em solid #ffa420", zIndex: 2 }}
            shadowPrimary={"#e57800"}
            shadowSecondary={"transparent"}
            color={`${theme.gameTheme.darkText}`}
            variant={"light"}
            backgroundColor={"whitesmoke"}
            iconOnButton={<img src={`${Scissors}`} />}
            borderRadius={"100%"}
            onClick={() => console.log("ciao")}
          />,
          <div></div>,
          <LineOne></LineOne>,
        ]}
      />
      <ColumnContainer
        items={[
          <Button
            style={{ border: "1em solid #00eFF0", zIndex: 2 }}
            shadowPrimary={"#239899"}
            shadowSecondary={"transparent"}
            color={`${theme.gameTheme.darkText}`}
            variant={"light"}
            backgroundColor={"whitesmoke"}
            iconOnButton={<img src={`${Spock}`} />}
            borderRadius={"100%"}
            onClick={() => console.log("ciao")}
          />,

          <div></div>,

          <Button
            style={{ border: "1em solid #1560bd", zIndex: 2 }}
            shadowPrimary={"#1e407a"}
            shadowSecondary={"transparent"}
            color={`${theme.gameTheme.darkText}`}
            variant={"light"}
            backgroundColor={"whitesmoke"}
            iconOnButton={<img src={`${Paper}`} />}
            borderRadius={"100%"}
            onClick={() => console.log("ciao")}
          />,
        ]}
        paddingBetweenItems={"2em"}
      />
      <ColumnContainer
        items={[
          <LineThree></LineThree>,
          <Button
            style={{ border: "1em solid #AB40FF", zIndex: 2 }}
            shadowPrimary={"#542677"}
            shadowSecondary={"transparent"}
            color={`${theme.gameTheme.darkText}`}
            variant={"light"}
            backgroundColor={"whitesmoke"}
            iconOnButton={<img src={`${Lizard}`} />}
            borderRadius={"100%"}
            onClick={() => console.log("ciao")}
          />,
          <div></div>,

          <Button
            style={{ border: "1em solid #ff0000", zIndex: 2 }}
            color={`${theme.gameTheme.darkText}`}
            shadowPrimary={"#a51b0b"}
            shadowSecondary={"transparent"}
            variant={"light"}
            backgroundColor={"whitesmoke"}
            iconOnButton={<img src={`${Rock}`} />}
            borderRadius={"100%"}
            onClick={() => console.log("ciao")}
          />,
          <div></div>,
        ]}
        paddingBetweenItems={"2em"}
      />
    </>
  );
}

export const LineOne = styled.div`
  background-color: ${(props) => props.theme.gameTheme.darkText};
  padding: 0;
  margin: 0;
  width: 15em;
  height: 0.6em;
  margin-top: 7em;
  margin-left: -11em;
  border-bottom: 1px solid black;
  transform: translateY(-24px) translateX(5px) rotate(45deg);
  position: absolute;
  z-index: 0;
  /* top: -20px; */
`;

export const LineTwo = styled.div`
  background-color: ${(props) => props.theme.gameTheme.darkText};

  border-bottom: 1px solid black;
  transform: translateY(60px) translateX(7px) rotate(-40deg);
  width: 9em;
  height: 0.6em;
  position: absolute;
`;

export const LineThree = styled.div`
  background-color: ${(props) => props.theme.gameTheme.darkText};
  padding: 0;
  margin: 0;
  width: 8em;
  height: 0.6em;
  margin-top: -3em;
  margin-left: 2em;
  border-bottom: 1px solid black;
  transform: translateY(-24px) translateX(5px) rotate(60deg);
  position: absolute;
  z-index: 0;
`;
