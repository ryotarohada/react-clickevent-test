import type { NextPage } from 'next'
import { Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { Template } from '@/components/templates'
import { useSeo } from '@/lib/seo'
import { useSingleOrDoubleClick } from '@/lib/useDoubleClick'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  const [message, setMessage] = useState('')

  const singleClick: React.MouseEventHandler = () => setMessage('Single Click!')
  const doubleClick: React.MouseEventHandler = () => setMessage('Double Click!')

  const { handleOnSingleOrDoubleClick } = useSingleOrDoubleClick({
    singleClick,
    doubleClick,
  })

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <Heading as='h1'>Let's, Single or Double click! </Heading>
      <p>Message : {message}</p>
      <Button onClick={handleOnSingleOrDoubleClick}>Click!</Button>
    </Template>
  )
}

export default Index
