import Task, {TaskProps} from "./Task";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Task> = {
	component: Task,
}
export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  render: (args) => <Task {...args} />,
  args: {
    task: {
      id: 1
    }
  }
}

export const Primary: Story = {
  render: (args) => <Task {...args} />,
  args: {
    task: {
      id: 2
    }
  }
}
