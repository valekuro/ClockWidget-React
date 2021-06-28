import styled from "styled-components";
export interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps) {
  return (
    <ScoreContainer>
      <HeaderScore>Score: </HeaderScore>
      <SpanNumberScore>{score}</SpanNumberScore>
    </ScoreContainer>
  );
}

export const SpanNumberScore = styled.span`
  color: ${(props) => props.theme.gameTheme.darkText};
  font-size: 3em;
`;
export const HeaderScore = styled.span`
  color: ${(props) => props.theme.gameTheme.scoreText};
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 1px;
`;
export const ScoreContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid white;
  border-radius: 4%;
  background-color: white;
  justify-content: center;
  width: 6em;
  height: 5em;
`;
