import styled from "styled-components";
export interface ColumnContainerProps {
  items?: JSX.Element[] | undefined;
  variant: string;
}
/**
 * The component manages a row box in the page. It divided the row into columns. Every element of items represents a column.
 * @param items
 * @param variant
 * @returns
 */
export default function ColumnContainer({ items, variant }: ColumnContainerProps) {
  return (
    <ItemsContainer>
      {items?.map((item: JSX.Element, index: number) => {
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
  align-self: center;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
