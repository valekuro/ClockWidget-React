import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import Avatar from "../Avatar";
import TextContainer from "../TextContainer";
import TestimonialProps from "../../types/Testimonial/Testimonial";
import myImage from "../../images/avatar.jpg";
export interface PostsProps {
  items: TestimonialProps[];
  variant: string;
  backwardButton?: JSX.Element;
  forwardButton?: JSX.Element;
}
/**
 * The component creates a carousel if you set the buttons. Otherwise you can see elements columns
 * @param items
 * @param variant mandatory: theme choosen
 * @param backwardButton optional: previous button
 * @param forwardButton optional: next button
 * @returns
 */
export default function Posts({ items, variant, backwardButton, forwardButton }: PostsProps) {
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap", width: "100%", justifyContent: "center" }}>
      {forwardButton}
      <div style={{ flexGrow: 1 }}>
        <ColumnContainer
          variant={variant}
          items={items.map((item: TestimonialProps, index: number) => {
            return (
              <CommentsContainer key={index}>
                <Avatar src={myImage} size="medium" alt={"Your profile image"} />{" "}
              </CommentsContainer>
            );
          })}
        />

        <ColumnContainer
          variant={variant}
          items={items.map((item: TestimonialProps) => {
            return <TextContainer key={item.id} subtitle={item.user} />;
          })}
        />
        <HideContent>
          <ColumnContainer
            variant={variant}
            items={items.map((item: TestimonialProps) => {
              return <TextContainer key={item.id} informations={[item.post]} />;
            })}
            paddingBetweenItems={"0.8rem"}
          />
        </HideContent>
      </div>
      {backwardButton}
    </div>
  );
}

export const CommentsContainer = styled.div`
  margin-top: 4em;
  margin-bottom: 1.6em;
`;
export const HideContent = styled.span`
  display: block;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
