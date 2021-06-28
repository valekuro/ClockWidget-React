import styled from "styled-components";
export interface ColumnContainerProps {
  items?: JSX.Element[] | undefined;
  variant?: string;
  paddingBetweenItems?: string;
}
/**
 * The component manages a row box in the page. It divided the row into columns. Every element of items represents a column.
 * @param items optional: an array which contains JSXes to see in column
 * @param @param variant mandatory: theme choosen
 * @param paddingBetweenItems optional: you could need to padding between items added in the array. Set here the padding.If you don't set anything, you have "padding: 0px" by default.
 * @returns
 */
export default function ColumnContainer({ items, variant, paddingBetweenItems }: ColumnContainerProps) {
  return (
    <ItemsContainer variant={variant}>
      {items?.map((item: JSX.Element, index: number) => {
        return (
          <Item key={index} paddingBetweenItems={paddingBetweenItems}>
            {item}
          </Item>
        );
      })}
    </ItemsContainer>
  );
}

export const ItemsContainer = styled.div<{ variant?: string }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;
export const Item = styled.div<{ paddingBetweenItems: string | undefined }>`
  align-self: center;
  width: 100%;
  display: flex;
  padding: ${(props) => (props.paddingBetweenItems ? props.paddingBetweenItems : "0px")};
  flex-flow: column nowrap;
`;
