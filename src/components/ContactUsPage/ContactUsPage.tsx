import { useRef } from "react";
import styled from "styled-components";
import HeroImage from "../HeroImage";
import image from "../../images/Contactus.jpg";
import imagexs from "../../images/Contactusxs.jpg";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataModel } from "./DataModel";
import get from "lodash/get";
import { useAppDispatch } from "../../app/store/hooks";
import { RootState } from "../../app/store/store";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { takeData } from "../../reducers/ContactUsSlice";
import Button from "../Button";
import { TextareaAutosize, TextField, FormControl } from "@material-ui/core";
import TextContainer from "../TextContainer";

export interface ContactUsPageProps {
  variant: string;
}
const useSchema = () => {
  const schema = object().shape({
    name: string().required("Il campo non può essere vuoto"),
    /* email: string().email("Enter a valid email").required("Email is required"), */
    email: string().email("L'indirizzo inserito non è valido").required("Il campo non può essere vuoto"),
    subject: string().required("Il campo non può essere vuoto"),
    message: string().required("Hai dimenticato di scrivere il tuo messaggio!"),
  });
  return schema;
};
/**
 * This component manages the Contact Page. Here you find a form.
 * @param variant mandatory: theme choosen
 * @returns
 */
export default function ContactUsPage({ variant }: ContactUsPageProps) {
  //const hhh = useSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const schema = useSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataModel>({ resolver: yupResolver(schema) });

  const nameError = get(errors, "name.message");
  const emailError = get(errors, "email.message");
  const subjectError = get(errors, "subject.message");
  const messageError = get(errors, "message.message");
  const onSubmit = (data: DataModel) => {
    dispatch(takeData(data));
    history.push(`/contactus/${(state: RootState) => state.ContactUsSlice.data}`);
  };

  const refName = useRef<HTMLInputElement | null>(null);
  const refEmailAddress = useRef<HTMLInputElement | null>(null);
  const refSubject = useRef<HTMLInputElement | null>(null);
  const refTextArea = useRef<HTMLTextAreaElement | null>(null);

  return (
    <>
      <HeroImage image={image} imagexs={imagexs} />
      <TextContainer
        title={"Contattaci"}
        informations={[
          " Se hai bisogno di qualche informazione o condividere un suggerimento, questa è la sezione giusta! Ti risponderemo entro quattro o cinque giorni lavorativi",
        ]}
        textAlignInformation={"center"}
      />
      <Form variant={variant}>
        <FormControl>
          <ElementContainer>
            <TextField {...register("name")} required inputRef={refName} error={nameError} type="text" label={"Name"} />
            <div>{nameError && nameError}</div>
          </ElementContainer>

          <ElementContainer>
            <TextField {...register("email")} required inputRef={refEmailAddress} error={emailError} label={"nickname@example.it"} type="text" />
            <div>{emailError && emailError}</div>
          </ElementContainer>

          <ElementContainer>
            <TextField {...register("subject")} required inputRef={refSubject} error={subjectError} label={"Oggetto"} type="text" />
            <div>{subjectError && subjectError}</div>
          </ElementContainer>

          <ElementContainer>
            <TextareaAutosize {...register("message")} ref={refTextArea} rows={12} placeholder={"Scrivi qui il tuo messaggio"} style={{ minWidth: "20em", maxWidth: "40em" }} />
            <div>{messageError && messageError}</div>
          </ElementContainer>
          <div>
            <Button style={{ marginTop: "2em" }} variant={variant} textOnButton={"invia"} borderRadius={"none"} onClick={handleSubmit(onSubmit)}></Button>
          </div>
        </FormControl>
      </Form>
    </>
  );
}

export const Form = styled.form<{ variant: string }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const ElementContainer = styled.div`
  margin-top: 2em;
`;
