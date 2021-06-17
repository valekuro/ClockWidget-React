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
      {title ? <h2>{title}</h2> : undefined}
      {subtitle ? <h3>{subtitle}</h3> : undefined}
      {content ? <p>{content}</p> : undefined}
      {link ? <LinkText>{link}</LinkText> : undefined}
    </Container>
  );
}
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const LinkText = styled.a`
  text-decoration: underline;
  text-decoration-color: yellow;
  cursor: pointer;
`;
