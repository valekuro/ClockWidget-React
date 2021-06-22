import React, { useRef, useState } from "react";
import styled from "styled-components";
import HeroImage from "../HeroImage";
import image from "../../images/Contactus.jpg";
import imagexs from "../../images/Contactusxs.jpg";

import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextArea from "../Textarea";
import Button from "../Button";

export interface ContactUsPageProps {
  variant: string;
}

export default function ContactUsPage({ variant }: ContactUsPageProps) {
  const refName = useRef<HTMLInputElement | null>(null);
  const refEmailAddress = useRef<HTMLInputElement | null>(null);
  const refSubject = useRef<HTMLInputElement | null>(null);
  const refTextArea = useRef<HTMLTextAreaElement | null>(null);

  const [nameValue, setNameValue] = useState<string>("");
  const [emailAddressValue, setEmailAddressValue] = useState<string>("");
  const [subjectValue, setSubjectValue] = useState<string>("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleInputNameOnChange = () => {
    const { current } = refName;
    setNameValue(current!.value!);
  };

  const handleInputNameCloseOnClick = () => {
    setNameValue("");
  };
  const handleInputEmailAddressOnChange = () => {
    const { current } = refEmailAddress;
    setEmailAddressValue(current!.value!);
  };

  const handleInputEmailAddressCloseOnClick = () => {
    setEmailAddressValue("");
  };
  const handleInputSubjectOnChange = () => {
    const { current } = refSubject;
    setSubjectValue(current!.value!);
  };

  const handleInputSubjectCloseOnClick = () => {
    setSubjectValue("");
  };

  const handleTextAreaOnChange = () => {
    const { current } = refTextArea;
    setTextAreaValue(current!.value!);
  };

  const handleTextAreaCloseOnClick = () => {
    setTextAreaValue("");
  };

  return (
    <>
      <HeroImage variant={variant} image={image} imagexs={imagexs} />
      <h1>Contact us</h1>
      <Form variant={variant}>
        <Input
          inputRef={refName}
          variant={variant}
          onChange={handleInputNameOnChange}
          onClickReset={handleInputNameCloseOnClick}
          placeholder={"Nome"}
          onReset={true}
          value={nameValue}
          startAdornments={
            <FontAwesomeIcon
              icon={"user"}
              style={{
                color: "white",
                backgroundColor: "transparent",
                position: "relative",
                zIndex: 100,
              }}
            />
          }
        />

        <Input
          inputRef={refEmailAddress}
          variant={variant}
          placeholder={"E-mail"}
          onChange={handleInputEmailAddressOnChange}
          onClickReset={handleInputEmailAddressCloseOnClick}
          onReset={true}
          value={emailAddressValue}
          startAdornments={
            <FontAwesomeIcon
              icon={"envelope"}
              style={{
                color: "white",
                backgroundColor: "transparent",
                position: "relative",
                zIndex: 100,
              }}
            />
          }
        />

        <Input
          inputRef={refSubject}
          variant={variant}
          onChange={handleInputSubjectOnChange}
          onClickReset={handleInputSubjectCloseOnClick}
          placeholder={"Oggetto"}
          onReset={true}
          value={subjectValue}
          startAdornments={
            <FontAwesomeIcon
              icon={"pencil-alt"}
              style={{
                color: "white",
                backgroundColor: "transparent",
                position: "relative",
                zIndex: 100,
              }}
            />
          }
        />
        <TextArea
          inputRef={refTextArea}
          variant={variant}
          placeholder={"Scrivi il tuo messaggio..."}
          onReset={false}
          value={textAreaValue}
          onChange={handleTextAreaOnChange}
          onClickReset={handleTextAreaCloseOnClick}
        />
        <div>
          <Button style={{}} variant={variant} textOnButton={"invia"} borderRadius={"none"} onClick={() => alert(":)")}></Button>
        </div>
      </Form>
    </>
  );
}

export const Form = styled.form<{ variant: string }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
