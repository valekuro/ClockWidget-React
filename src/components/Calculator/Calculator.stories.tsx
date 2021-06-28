import { Story } from "@storybook/react";
import Theme, { theme } from "../Theme";
import Calculator, { CalculatorProps } from "./Calculator";
import { store } from "../../app/store/store";
import ColumnContainer from "../ColumnsContainer/ColumnsContainer";
import { Provider } from "react-redux";
import styled from "styled-components";
export default {
  title: "Components/Calculator",
  component: Calculator,
  argTypes: {
    variantCalculator: {
      table: {
        category: "Style",
      },
      defaultValue: "light",
      control: {
        type: "select",
        options: ["themeA", "themeB", "themeC"],
      },
    },
    variant: { table: { disable: true } },
  },
};

const Template: Story<CalculatorProps> = (args) => (
  <Theme>
    <Provider store={store}>
      <ColumnContainer variant={args.variant} items={[<div></div>, <Calculator variantCalculator={args.variantCalculator} variant={args.variant} />, <div></div>]} />
    </Provider>
  </Theme>
);

export const Calculator_ = Template.bind({});
Calculator_.args = {
  variant: "light",
  variantCalculator: "themeA",
};
