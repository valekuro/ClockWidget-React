import styled from "styled-components";

export interface TextContainerProps {
  title?: string;
  informations?: string[];
  link?: string;
  subtitle?: string;
  textAlignInformation?: string;
  paddingContent?: string;
}
/**
 * The component manages all text boxes
 * @param title optional
 * @param informations optional: in this array you can put all the informations you need. Every array element is a <p></p> tag
 * @param link optional: if you need a link to another page.
 * @returns
 */

export default function TextContainer({ title, informations, link, subtitle, textAlignInformation, paddingContent }: TextContainerProps) {
  return (
    <Container>
      {title ? <Title>{title}</Title> : undefined}
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : undefined}
      {informations
        ? informations.map((label: string, index: number) => {
            return (
              <ContentContainer key={index} textAlignInformation={textAlignInformation} paddingContent={paddingContent}>
                {label}
              </ContentContainer>
            );
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

export const Subtitle = styled.h3`
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
`;

export const ContentContainer = styled.p<{ textAlignInformation: string | undefined; paddingContent: string | undefined }>`
  font-size: 1em;
  padding: ${(props) => (props.paddingContent ? props.paddingContent : "0px")};
  text-align: ${(props) => (props.textAlignInformation ? props.textAlignInformation : "justify")};
  @media only screen and (max-width: 1025px) {
    font-size: 1em;
  }
`;

export const LinkText = styled.a`
  text-decoration: underline;
  text-decoration-color: orange;
  margin-top: 1em;
  text-transform: uppercase;
  font-size: 1em;
  cursor: pointer;
  text-align: left;
  margin-left: 2em;
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: 2.5em;
  text-decoration: underline;
  @media only screen and (max-width: 1025px) {
    font-size: 1.5em;
  }
`;
