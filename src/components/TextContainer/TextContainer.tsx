import styled from "styled-components";

export interface TextContainerProps {
  title?: string;
  subtitle?: string;
  content?: string;
  link?: string;
}

export default function TextContainer({ title, subtitle, content, link }: TextContainerProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{content}</p>
      <LinkText>{link}</LinkText>
    </Container>
  );
}
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const LinkText = styled.a`
 text-decoration:underline;
 text-decoration-color: yellow;
 cursor:pointer;

`;