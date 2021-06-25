import { Story } from "@storybook/react";
import Theme, { theme } from "../Theme";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { table: { disable: true } },
    iconOnButton: { table: { disable: true } },
    style: { table: { disable: true } },
    showIcon: {
      table: {
        category: "Addons",
      },
      control: {
        type: "radio",
        options: [true, false],
      },
      defaultValue: false,
    },

    borderRadius: {
      table: {
        category: "Style",
      },
      defaultValue: "15%",
      control: "text",
    },
    textOnButton: {
      table: {
        category: "Style",
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

const Template: Story<any> = ({ showIcon, ...args }) => (
  <Theme>
    <Button
      style={{ padding: "1em" }}
      variant={args.variant}
      textOnButton={!showIcon ? args.textOnButton : undefined}
      iconOnButton={showIcon ? <FontAwesomeIcon icon={["fas", "angle-double-right"]} style={{ fontSize: "1.5em" }} /> : undefined}
      borderRadius={args.borderRadius}
    />
  </Theme>
);

export const Button_ = Template.bind({});
Button_.args = {
  variant: "light",
  textOnButton: "Sunnyside",
  borderRadius: "15%",
};
