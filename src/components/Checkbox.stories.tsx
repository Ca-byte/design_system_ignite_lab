import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators:  [
    (story) => {
      return(
        <div className='flex items-center gap-2'>
          {story()}
          <Text size="sm"> Remember for 30 days</Text>
        </div>
      )
    }
  ]

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

