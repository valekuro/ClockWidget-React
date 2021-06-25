import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import image from "../../images/Contactus.jpg";
import imagexs from "../../images/Contactusxs.jpg";
import HeroImage from "../HeroImage";
import { useAppSelector } from "../../app/store/hooks";

export interface ThanksProps {
  variant: string;
}
export default function Thanks({ variant }: ThanksProps) {
  const data = useAppSelector((state) => state.ContactUsSlice.data);
  return (
    <>
      <HeroImage image={image} imagexs={imagexs} />
      <ThanksContainer>
        <ColumnContainer variant={variant} items={[<h1>Messaggio Inviato!</h1>]} />
        <ColumnContainer
          variant={variant}
          items={[
            <>
              <h2>Grazie, {data.name} per averci scritto. </h2> <h3> Ti risponderemo all'indirizzo {data.email} entro quattro o cinque giorni lavorativi</h3>
            </>,
          ]}
        />
      </ThanksContainer>
    </>
  );
}

export const ThanksContainer = styled.div`
  padding: 3em;
`;
