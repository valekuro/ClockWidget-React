import styled from "styled-components";

export interface TextContainerProps {
  title?: string;
  informations?: string[];
  link?: string;
}
/**
 * The component manages all text boxes
 * @param title optional
 * @param informations optional: in this array you can put all the informations you need. Every array element is a <p></p> tag
 * @param link optional: if you need a link to another page.
 * @returns
 */

export default function TextContainer({ title, informations, link }: TextContainerProps) {
  return (
    <Container>
      {title ? <h2>{title}</h2> : undefined}
      {informations
        ? informations.map((label: string, index: number) => {
            return <p key={index}>{label}</p>;
          })
        : undefined}
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
