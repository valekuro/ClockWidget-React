import styled from "styled-components";
import React, { useEffect, useState, useCallback, useMemo } from "react";
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
import Posts from "../Posts";
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
  const [dataUsersPosts, setDataUsersPosts] = useState<TestimonialProps[]>(joinData(usersQuery, postsQuery));
  //take three random post ids
  const [nextElements, setNextElements] = useState<TestimonialProps[]>([]);
  //filter data to take only the three random posts
  const [postToShow, setPostToShow] = useState<TestimonialProps[]>([]);

  //join by idUser and save on state
  useEffect(() => {
    setDataUsersPosts(joinData(usersQuery, postsQuery));
  }, [usersQuery !== undefined, postsQuery !== undefined]);
  useEffect(() => {
    setNextElements(dataUsersPosts);
    setPostToShow([...dataUsersPosts.slice(0, 3)]);
  }, [dataUsersPosts]);
  const handleClickForward = () => {
    let calculateNextElement = nextElements;
    let next = calculateNextElement.slice(3, nextElements.length);
    if (next.length == 0) {
      next = [...dataUsersPosts];
    }
    setNextElements(next);
    setPostToShow([...next.slice(0, 3)]);
  };
  const handleClickBackward = () => {
    const previousPosts = postToShow.map((post: TestimonialProps) => {
      const id: number = post.id ? +post.id : 0;
      /* console.log("actual post id     ", post.id);
      console.log("new id calc    ", id - 3); */
      return id - 3;
    });
    const newPreviuosPosts = dataUsersPosts.filter((el) => el.id === previousPosts[0] || el.id === previousPosts[1] || el.id === previousPosts[2]);
    console.log(newPreviuosPosts);
  };
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
      <Posts items={postToShow} variant={variant} onClickForward={handleClickForward} onClickBackward={handleClickBackward} />
    </div>
  );
}
export const ImageSection = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    content: url(${fruitxs});
  }
`;
