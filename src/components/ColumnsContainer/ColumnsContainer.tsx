import styled from "styled-components";
export interface ColumnContainerProps {
  items: JSX.Element[];
  variant: string;
}
export default function ColumnContainer({ items, variant }: ColumnContainerProps) {
  return (
    <ItemsContainer>
      {items.map((item: JSX.Element, index: number) => {
        return <Item key={index}>{item}</Item>;
      })}
    </ItemsContainer>
  );
}

export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;
export const Item = styled.div`
  width: 100%;
  align-self: center;

`;
