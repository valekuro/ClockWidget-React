import styled from "styled-components";
import React, { useEffect, useState } from "react";
import HeroImage from "../HeroImage";
import ColumnContainer from "../ColumnsContainer";
import TextContainer from "../TextContainer";
import image from "../../images/imageHome.jpg";
import imagexs from "../../images/imageHome_small.jpg";
import fruit from "../../images/fruit.jpg";
import fruitxs from "../../images/fruitxs.jpg";
import { useFetchData, joinData } from "../../utils/requests";
import { randomId } from "../../utils/functions";
import TestimonialProps from "../../types/Testimonial/Testimonial";
import Avatar from "../Avatar";
import myImage from "../../images/avatar.jpg";
export interface HomeProps {
  variant: string;
}

/**
 * PERSONALIZED COMPONENT - THIS IS NOT A GENERIC COMPONENT -
 * This is the HomePage component. You can personalize this code as you prefer.
 * @param variant mandatory: you can choose if you want light theme or dark theme
 * @returns
 */
export default function Home({ variant }: HomeProps) {
  //react-query to fetch data
  const usersQuery = useFetchData("users", "https://jsonplaceholder.typicode.com/users");
  const postsQuery = useFetchData("posts", "https://jsonplaceholder.typicode.com/posts");
  //in this state I save the union of usersQuery data and postsQuery data (join by userId)
  const [dataUsersPosts, setDataUsersPosts] = useState<Array<TestimonialProps>>([]);
  //take three random post ids
  let randomPostId = randomId(3, 100);
  //filter data to take only the three random posts
  const postToShow: TestimonialProps[] | undefined = dataUsersPosts.filter(
    (element) => element.id === randomPostId[0] || element.id === randomPostId[1] || element.id === randomPostId[2]
  );
  //join by idUser and save on state
  useEffect(() => {
    if (usersQuery && postsQuery) {
      setDataUsersPosts(joinData(usersQuery, postsQuery));
    }
  }, [usersQuery, postsQuery]);

  return (
    <div>
      <HeroImage variant={variant} image={image} imagexs={imagexs} textLabelOnImage={"...WE ARE CREATIVES"} />
      <ColumnContainer
        variant={variant}
        items={[
          <ImageSection src={fruit} />,
          <TextContainer
            title={"Transform your brand"}
            informations={[
              "We are a full-service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
            ]}
            link={"Learn More"}
          />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <TextContainer
            title={"Stand out to the right audience"}
            informations={[
              "Using a collaborative formuila of designers, researchers, photographers, videographers and copywriters, we'll build an extend your brand in digital places.",
            ]}
            link={"Learn More"}
          />,

          <ImageSection src={fruit} />,
        ]}
      />
      <ColumnContainer
        variant={variant}
        items={[
          <CommentsContainer>
            <Avatar src={myImage} size="medium" alt={"Your profile image"} />{" "}
          </CommentsContainer>,
          <CommentsContainer>
            <Avatar src={myImage} size="medium" alt={"Your profile image"} />{" "}
          </CommentsContainer>,
          <CommentsContainer>
            <Avatar src={myImage} size="medium" alt={"Your profile image"} />{" "}
          </CommentsContainer>,
        ]}
      />

      <ColumnContainer
        variant={variant}
        items={postToShow.map((item: TestimonialProps) => {
          return <TextContainer key={item.id} informations={[item.user]} />;
        })}
      />
      <ColumnContainer
        variant={variant}
        items={postToShow.map((item: TestimonialProps) => {
          return <TextContainer key={item.id} informations={[item.post]} />;
        })}
      />
    </div>
  );
}
export const ImageSection = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    content: url(${fruitxs});
  }
`;

export const CommentsContainer = styled.div`
  margin-top: 4em;
  margin-bottom: 1.6em;
`;
