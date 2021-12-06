import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import { Flex, Stack } from '@chakra-ui/react'
import dynamic from 'next/dynamic';


const Button = dynamic(() => import("../components/PayBtn"));

export default function Test() {
  return (
    <>
      <Stack 
      as="main"
      align="center" 
      >
        <Flex 
          flexDirection="column"
        >
          <Layout home>
            <Head>
              <title>{siteTitle}</title>
            </Head>
            <Button></Button>
          </Layout>
        </Flex>
      </Stack>
    </>
  )
}
