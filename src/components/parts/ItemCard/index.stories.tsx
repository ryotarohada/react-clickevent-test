import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ItemCard } from '.'

export default { component: ItemCard } as ComponentMeta<typeof ItemCard>

export const Primary: ComponentStoryObj<typeof ItemCard> = {
  args: {
    id: '1',
    name: 'Item_1',
    price: 5000,
    quantity: 10,
  },
}
