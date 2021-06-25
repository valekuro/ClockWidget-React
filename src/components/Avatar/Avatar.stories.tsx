import { Story, Meta } from "@storybook/react";
import Theme, { theme } from "../Theme";
import AvatarPlaceholder from "../../images/avatar.jpg";
import Avatar, { AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: { defaultValue: { AvatarPlaceholder }, table: { disable: true } },
    alt: { table: { disable: true } },
    borderStyle: { table: { disable: true } },
    size: {
      defaultValue: "large",
      control: {
        type: "select",
        options: Object.keys(theme.avatarSizes),
      },
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => (
  <Theme>
    <Avatar {...args} />
  </Theme>
);

export const Avatar_ = Template.bind({});
Avatar_.args = {
  src: AvatarPlaceholder,
  alt: "Sunnyside",
  size: "medium",
};
