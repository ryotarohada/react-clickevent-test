import { Box, Text, Stack } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { Item } from '@/types/api'

type Props = {} & Item & BoxProps

export const ItemCard: React.FC<Props> = ({
  id,
  name,
  price,
  quantity,
  maxW = 350,
  p = 16,
  borderRadius = 1,
  ...rest
}) => {
  return (
    <Box maxW={maxW} p={p} borderRadius={borderRadius} {...rest}>
      <Stack spacing={8}>
        <Text as='span'>Item ID : {id}</Text>
        <Text as='span'>Item Name : {name}</Text>
        <Text as='span'>Item Price : {price}</Text>
        <Text as='span'>Item quantity : {quantity}</Text>
      </Stack>
    </Box>
  )
}
