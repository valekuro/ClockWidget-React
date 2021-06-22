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

export default function Posts({ items, variant, backwardButton, forwardButton }: PostsProps) {
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap", width: "100%", justifyContent: "center" }}>
      {forwardButton}
      <div style={{ flexGrow: 1 }}>
        <ColumnContainer
          variant={variant}
          items={items.map((item: TestimonialProps) => {
            return (
              <CommentsContainer>
                <Avatar src={myImage} size="medium" alt={"Your profile image"} />{" "}
              </CommentsContainer>
            );
          })}
        />

        <ColumnContainer
          variant={variant}
          items={items.map((item: TestimonialProps) => {
            return <TextContainer key={item.id} informations={[item.user]} />;
          })}
        />
        <ColumnContainer
          variant={variant}
          items={items.map((item: TestimonialProps) => {
            return <TextContainer key={item.id} informations={[item.post]} />;
          })}
        />
      </div>
      {backwardButton}
    </div>
  );
}

export const CommentsContainer = styled.div`
  margin-top: 4em;
  margin-bottom: 1.6em;
`;
