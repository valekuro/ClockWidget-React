import styled from "styled-components";
import Score from "../Score";
export interface HeaderGameProps {
  elementsToPlay: string[];
}

export default function HeaderGame({ elementsToPlay }: HeaderGameProps) {
  return (
    <ScoreContainer>
      <ListContainer>
        {elementsToPlay.map((element: string, index: number) => {
          return <List key={index}>{element}</List>;
        })}
      </ListContainer>
      <Score score={0} />
    </ScoreContainer>
  );
}

export const ScoreContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: 0.2em solid ${(props) => props.theme.gameTheme.darkText};
  border-radius: 1em;
  padding: 1em;
`;

export const List = styled.span`
  list-style: none;
  text-transform: uppercase;
  align-self: end;
  color: white;
`;

export const ListContainer = styled.div`
  line-height: 0.9em;
  font-size: 1.15em;
  display: flex;
  flex-flow: column nowrap;
`;
