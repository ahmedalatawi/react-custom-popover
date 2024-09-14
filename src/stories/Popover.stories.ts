import type { Meta, StoryObj } from "@storybook/react";

import Popover from "../Popover/Popover";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
  },
};
