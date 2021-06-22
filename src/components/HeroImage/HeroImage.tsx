import styled from "styled-components";
export interface HeroImageProps {
  image: string;
  imagexs: string;
  variant: string;
  textLabelOnImage?: string;
}

/**
 * Landing page hero image. This image is placed under the navigationbar
 * @param image mandatory: hero image source for large screen
 * @param imagexs mandatory: hero image source for small screen
 * @param variant mandatory: theme color (dark or light)
 * @param textLabelOnImage optional: if you want insert a text on the hero image, fill this parameter
 * @returns
 */
export default function HeroImage({ image, imagexs, variant, textLabelOnImage }: HeroImageProps) {
  return (
    <ImageContainer>
      <Image image={image} imagexs={imagexs} />
      {textLabelOnImage ? <LabelOnImage variant={variant}>{textLabelOnImage}</LabelOnImage> : undefined}
    </ImageContainer>
  );
}

export const Image = styled.img<{
  image: string;
  imagexs: string;
}>`
  position: relative;
  content: url(${(props) => props.image});
  width: 100%;
  opacity: 0.8;
  @media only screen and (max-width: 600px) {
    content: url(${(props) => props.imagexs});
  }
`;

export const ImageContainer = styled.div`
  z-index: -1;
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;

export const LabelOnImage = styled.div<{
  variant: string;
}>`
  position: absolute;
  width: 100%;

  top: 15rem;
  z-index: 1;
  padding: 1em;
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: 4em;
  color: whitesmoke;

  @media only screen and (max-width: 1366px) {
    top: 6.5rem;
    font-size: 2em;
  }
`;
