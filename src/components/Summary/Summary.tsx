import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import HeroImage from "../HeroImage";
import image from "../../images/Contactus.jpg";
import imagexs from "../../images/Contactusxs.jpg";
import { useAppSelector } from "../../app/store/hooks";
import { RootState } from "../../app/store/store";

import { useHistory, BrowserRouter as Router, withRouter, Switch, Route, Link } from "react-router-dom";

import Button from "../Button";
export interface SummaryProps {
  variant: string;
}

export default function Summary({ variant }: SummaryProps) {
  const history = useHistory();

  const data = useAppSelector((state) => state.ContactUsSlice.data);
  const handleSubmit = () => history.push(`/contactus/${(state: RootState) => state.ContactUsSlice.data}/send`);

  return (
    <>
      <HeroImage image={image} imagexs={imagexs} />

      <SummaryContainer>
        <h1>Riepilogo del messaggio:</h1>
        <InfoContainer>
          <Label>Nome: </Label>
          <ColumnContainer variant={variant} items={[<div>{data.name}</div>]} />
        </InfoContainer>
        <InfoContainer>
          <Label>Email: </Label>
          <ColumnContainer variant={variant} items={[<div>{data.email}</div>]} />
        </InfoContainer>
        <InfoContainer>
          <Label>Subject: </Label>
          <ColumnContainer variant={variant} items={[<div>{data.subject}</div>]} />
        </InfoContainer>
        <InfoContainer>
          <Label>Message: </Label>
          <ColumnContainer variant={variant} items={[<div>{data.message}</div>]} />
        </InfoContainer>
        <Button style={{ marginTop: "2em" }} variant={variant} textOnButton={"invia"} borderRadius={"none"} onClick={handleSubmit}></Button>
      </SummaryContainer>
    </>
  );
}
export const Label = styled.p``;

export const InfoContainer = styled.div`
  border: 1px solid #000;
  margin-top: 1em;
  width: 16em;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
