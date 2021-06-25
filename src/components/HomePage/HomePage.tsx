import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import HeroImage from "../HeroImage";
import ColumnContainer from "../ColumnsContainer";
import TextContainer from "../TextContainer";
import image from "../../images/imageHome.jpg";
import imagexs from "../../images/imageHome_small.jpg";
import fruit from "../../images/fruit.jpg";
import fruitxs from "../../images/fruitxs.jpg";
import { useFetchData, joinData } from "../../utils/requests";
import TestimonialProps from "../../types/Testimonial/Testimonial";
import Posts from "../Posts";
import Button from "../Button";
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
  //the state helps to keep track of the next element (forward button posts' carousel)
  const [nextElements, setNextElements] = useState<TestimonialProps[]>([]);
  //keep track of posts to show
  const [postToShow, setPostToShow] = useState<TestimonialProps[]>([]);

  useEffect(() => {
    setDataUsersPosts(joinData(usersQuery, postsQuery));
  }, [usersQuery !== undefined, postsQuery !== undefined]);

  useEffect(() => {
    setNextElements(dataUsersPosts);
    setPostToShow([...dataUsersPosts.slice(0, 3)]);
  }, [dataUsersPosts]);

  //manage click forward (posts' carousel)
  //nextElements is initialized by the entire dataUserPosts and then remove the previous elements to it.
  //if you arrive at the last element, nextElements is populated again
  const handleClickForward = () => {
    let calculateNextElement = nextElements;
    let next = calculateNextElement.slice(3, nextElements.length);
    console.log(next.length);
    if (next.length === 0) {
      setPostToShow([dataUsersPosts[dataUsersPosts.length - 1]]);
    } else {
      setNextElements(next);
      setPostToShow([...next.slice(0, 3)]);
    }
  };

  //manage click backward (posts' carousel)
  // previousPosts array takes the posts' id on the screen in this moment and returns the previuos three ids
  const handleClickBackward = () => {
    let calculatePrevElement = dataUsersPosts;
    const previousPosts = postToShow.map((post: TestimonialProps) => {
      const id: number = post.id ? +post.id : 0;
      return id - 3;
    });
    //not negative indexes! If you are at the end of the array, you can see only the first three elements
    if (previousPosts[1] <= 0) {
      setPostToShow([dataUsersPosts[0], dataUsersPosts[1], dataUsersPosts[2]]);
    } else {
      //previuosArray takes all the previous items
      const previousArray = calculatePrevElement.slice(0, previousPosts[2]);
      setNextElements(dataUsersPosts.slice(previousPosts[0] - 1, dataUsersPosts.length));
      setPostToShow([previousArray[previousArray.length - 3], previousArray[previousArray.length - 2], previousArray[previousArray.length - 1]]);
    }
  };
  return (
    <div>
      <HeroImage image={image} imagexs={imagexs} textLabelOnImage={"Welcome to Sunnyside"} />
      <ColumnContainer
        variant={variant}
        items={[
          <ImageSection src={fruit} />,
          <TextContainer
            title={"Transform your brand"}
            informations={[
              "We are a full-service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
            ]}
            link={"...Learn More"}
            paddingContent={"1em"}
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
            link={"...Learn More"}
            paddingContent={"1em"}
          />,

          <ImageSection src={fruit} />,
        ]}
      />
      <ColumnContainer variant={variant} items={[<p></p>]} />
      <ColumnContainer variant={variant} items={[<p></p>]} />
      <Posts
        items={postToShow}
        variant={variant}
        forwardButton={
          <div style={{ width: "100%", position: "absolute", display: "flex", justifyContent: "flex-start" }}>
            <Button
              style={{ flexGrow: 1, position: "absolute" }}
              variant={variant}
              iconOnButton={<FontAwesomeIcon icon={["fas", "angle-double-left"]} style={{ fontSize: "1.5em" }} />}
              borderRadius={"15%"}
              onClick={handleClickBackward}
            />
          </div>
        }
        backwardButton={
          <div style={{ width: "100%", position: "absolute", display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ flexGrow: 1, position: "absolute", alignSelf: "end" }}
              variant={variant}
              iconOnButton={<FontAwesomeIcon icon={["fas", "angle-double-right"]} style={{ fontSize: "1.5em" }} />}
              borderRadius={"15%"}
              onClick={handleClickForward}
            />
          </div>
        }
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
