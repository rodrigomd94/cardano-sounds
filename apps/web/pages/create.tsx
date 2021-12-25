import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { RiFileMusicLine } from 'react-icons/ri';//FaFileAudio
import { RiSoundModuleFill } from 'react-icons/ri';
import { RiArtboardLine } from 'react-icons/ri';//MdDesignServices
import { FaEye, FaFileImage } from 'react-icons/fa';//MdDesignServices
//import p5 from 'p5'
import dynamic from "next/dynamic";
import Layout from '../components/layout';
import NextChakraLink from '../components/NextChakraLink';

const P5Comp = dynamic(() => import("../components/p5sequencer"),
  { ssr: false }
);

export default function Create() {
    
    return (
        <Layout>
          <Flex 
            direction={["column", "column", "row"]} 
            w={["80vw", "80vw", "70vw"]} 
            h={["90vh", "90vh", "80vh"]} 
            pt={["25vh", "25vh", "20vh"]} mx="auto"
          >
            <Flex direction="column"w="100%" h="100%" rounded="sm" _hover={{
            }}>
              <Flex w="100%" h="100%" p={2} direction="column" textAlign={"center"}>
                <NextChakraLink href={'/create-sound-demo'} w="100%" h="100%">
                  <Button justifyContent={["flex-start", "flex-start", "center"]} variant={"ghost"} w="100%" rounded="sm" h="100%">CREATE <RiSoundModuleFill/></Button>
                </NextChakraLink>
              </Flex> 
              <Flex w="100%" h="100%" direction="column" p={2} textAlign={"center"}>
                <Button justifyContent={["flex-start", "flex-start", "center"]} variant={"ghost"}  w="100%" h="100%" disabled>USE<RiFileMusicLine/></Button>
                {/* <Text mx="auto" fontWeight={"semibold"} fontSize={"md"}>SOUND</Text> */}
              </Flex>
            </Flex> 
            <Flex direction="column" w="100%" h="100%">
              <Flex w="100%" h="100%" direction="column" p={2} textAlign={"center"}>
                <Button justifyContent={["flex-start", "flex-start", "center"]} variant={"ghost"} w="100%" disabled h="100%">CREATE <RiArtboardLine/></Button>
              </Flex> 
              <Flex w="100%" h="100%" p={2} direction="column" textAlign={"center"}>
                <Button justifyContent={["flex-start", "flex-start", "center"]} variant={"ghost"}  w="100%" h="100%" disabled>USE <FaFileImage/></Button>
              </Flex>
              {/* <Text mx="auto" fontWeight={"semibold"} fontSize={"md"}>VISUAL</Text> */}
            </Flex>
          </Flex> 
        </Layout>
    )
}