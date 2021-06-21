import { Story, Meta } from "@storybook/react";
import Theme, { theme } from "../Theme";
import NavigationBar, { NavigationBarProps } from "./NavigationBar";
export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    navigationItems: { table: { disable: true } },
    logo: {
      table: {
        category: "Logo text",
      },

      defaultValue: "Sunnyside",
      control: "text",
    },
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
    <NavigationBar {...args} />
  </Theme>
);

export const NavigationBar_ = Template.bind({});
NavigationBar_.args = {
  variant: "light",
  logo: "Sunnyside",
  navigationItems: [<div>About</div>, <div>Services</div>, <div>Projects</div>],
};
