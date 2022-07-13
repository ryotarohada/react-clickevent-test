import { Spinner, HStack } from '@chakra-ui/react'
import { ItemCard } from '@/components/parts/ItemCard'
import type { Item } from '@/types/api'

type Props = {
  items: Item[] | undefined
}

export const ItemList: React.FC<Props> = ({ items }) => {
  if (!items) {
    return <Spinner />
  }
  return (
    <HStack spacing={16} my={32}>
      {items.map((item) => (
        <ItemCard {...item} key={item.id} />
      ))}
    </HStack>
  )
}
