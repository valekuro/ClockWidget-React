import { Story } from "@storybook/react";
import Theme, { theme } from "../Theme";
import NavigationBar, { NavigationBarProps } from "./NavigationBar";
import styled from "styled-components";
import LogoContainer from "./LogoContainer";
export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    navigationItems: { table: { disable: true } },
    logo: { table: { disable: true } },
    variant: {
      table: {
        category: "Style",
      },
      defaultValue: "light",
      control: {
        type: "select",
        options: Object.keys(theme.navBarStyles),
      },
    },
  },
};

const Template: Story<NavigationBarProps> = (args) => (
  <Theme>
    <NavigationBar navigationItems={args.navigationItems} variant={args.variant} logo={<LogoContainer variant={args.variant} label={"Sunnyside"} />} />
  </Theme>
);

export const NavigationBar_ = Template.bind({});
NavigationBar_.args = {
  variant: "light",
  navigationItems: [<div>Calc</div>, <div>Contact</div>, <div>Language</div>],
};
