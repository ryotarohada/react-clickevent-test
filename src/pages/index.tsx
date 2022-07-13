import type { NextPage } from 'next'
import { useCallback } from 'react'
import { Heading, Button, useToast } from '@chakra-ui/react'
import { Template } from '@/components/templates'
import { ItemList } from '@/components/parts/ItemList'
import { useFetchItems } from '@/services'
import { useSeo } from '@/lib/seo'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  const { data, error, mutate } = useFetchItems()
  const onMutate = useCallback(() => mutate(data), [data, mutate])

  const toast = useToast()

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <Heading as='h1'>Hello, Boilerplate_Next!</Heading>
      <ItemList items={data?.items} />
      {error &&
        toast({
          title: 'Error!',
          description: '通信エラーが発生しました',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })}
      <Button variant='contained' onClick={onMutate}>
        update
      </Button>
    </Template>
  )
}

export default Index
