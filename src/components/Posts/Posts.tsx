import styled from "styled-components";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import Avatar from "../Avatar";
import TextContainer from "../TextContainer";
import TestimonialProps from "../../types/Testimonial/Testimonial";
import myImage from "../../images/avatar.jpg";
import Button from "../Button";
export interface PostsProps {
  items: TestimonialProps[];
  variant: string;
  onClickForward?: React.MouseEventHandler<HTMLButtonElement>;
  onClickBackward?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Posts({ items, variant, onClickBackward, onClickForward }: PostsProps) {
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap", width: "100%", justifyContent: "center" }}>
      <div style={{ width: "100%", position: "absolute", display: "flex", justifyContent: "flex-start" }}>
        <Button style={{ flexGrow: 1, position: "absolute" }} variant={variant} textOnButton={"df"} borderRadius={"100%"} onClick={onClickBackward} />
      </div>
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
      <div style={{ width: "100%", position: "absolute", display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ flexGrow: 1, position: "absolute", alignSelf: "end" }} variant={variant} textOnButton={"df"} borderRadius={"100%"} onClick={onClickForward} />
      </div>
    </div>
  );
}

export const CommentsContainer = styled.div`
  margin-top: 4em;
  margin-bottom: 1.6em;
`;
