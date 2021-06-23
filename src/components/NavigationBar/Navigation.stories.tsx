import { Story } from "@storybook/react";
import Theme, { theme } from "../Theme";
import NavigationBar, { NavigationBarProps } from "./NavigationBar";
import styled from "styled-components";

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
    <NavigationBar navigationItems={args.navigationItems} variant={args.variant} logo={<LogoContainer variant={args.variant}>Sunnyside</LogoContainer>} />
  </Theme>
);

export const NavigationBar_ = Template.bind({});
NavigationBar_.args = {
  variant: "light",
  navigationItems: [<div>About</div>, <div>Contact us</div>, <div>Language</div>],
};

export const LogoContainer = styled.div<{
  variant: string;
}>`
  display: flex;
  padding: 0.5em;
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: ${(props) => props.theme.logoStyles.fontSizeLogo};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
`;
