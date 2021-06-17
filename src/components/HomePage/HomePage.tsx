import styled from "styled-components";
import NavigationBar from "../NavigationBar";
import HeroImage from "../HeroImage";
import ColumnContainer from "../ColumnsContainer";
import TextContainer from "../TextContainer";
import image from "../../images/imageHome.jpg";
import imagexs from "../../images/imageHome_small.jpg";
import fruit from "../../images/fruit.jpg";

export interface HomeProps {
  variant: string;
}

export default function Home({ variant }: HomeProps) {
  return (
    <div>
      <NavigationBar navigationItems={[<div>About</div>, <div>Services</div>, <div>Projects</div>]} logo={"Sunnyside"} variant={variant} />
      <HeroImage variant={variant} image={image} imagexs={imagexs} textLabelOnImage={"...WE ARE CREATIVES"} />
      <ColumnContainer
        variant={variant}
        items={[
          <ImageSection src={fruit} />,
          <TextContainer
            title={"Transform your brand"}
            content={"We are a full-service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."}
            link={"Learn More"}
          />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <TextContainer
            title={"Stand out to the right audience"}
            content={"Using a collaborative formuila of designers, researchers, photographers, videographers and copywriters, we'll build an extend your brand in digital places."}
            link={"Learn More"}
          />,

          <ImageSection src={fruit} />,
        ]}
      />
    </div>
  );
}

export const ImageSection = styled.img`
  width: 100%;
`;

export const ItemSection = styled.img``;
