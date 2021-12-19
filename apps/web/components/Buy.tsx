import React, { useState } from "react"
import { Button, Heading, Stack, Text, Image, Flex, Box
       , InputGroup, Input, InputRightElement, List, ListItem
       , ListIcon, Spacer, Modal, ModalOverlay, ModalContent
       , ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalCloseButton 
} from "@chakra-ui/react"
import utilStyles from "../styles/utils.module.css"
import { IoIosWallet, IoMdPricetag } from 'react-icons/io';
import { FaChevronLeft } from 'react-icons/fa'
import { RiAlarmWarningFill } from 'react-icons/ri'
import { CopyIcon, InfoIcon, SearchIcon } from "@chakra-ui/icons";
import Transaction from "./Transaction";
// import { useToast } from "@chakra-ui/react"
import Address from "./Address";
import PayBtn from "./PayBtn.jsx";

export default function Buy(){
    const [ searchValue, handleSearchValChange] = useState<string>("")
    const [ isSearchInValid, invalidateSearchString] = useState<boolean>(true)
    const [ txSearch, showTxSearch] = useState<boolean>(false)
    const [ mobileAddress, showMobileAddress] = useState<boolean>(false)
    const [ txStatus, showTxStatus ] = useState<boolean>(false)

     const { isOpen, onOpen, onClose } = useDisclosure()

    // const toast = useToast()

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => handleSearchValChange(event.target.value)

    const search = () => {
        if(searchValue.length < 5){
            invalidateSearchString(true)
        }
        else {

            invalidateSearchString(false)
            showTxStatus(true)
        }
    }

    return(
        <>
            <Flex
                align="center"
                margin="auto"
                maxW="80vw"
                mt={["25vh", "25vh", "30vh", "30vh", "20vh", "20vh"]}
                direction="column"
                minH="65vh"
            >   
                <Stack w={["100%", "100%", "100%", "70vw"]} direction={["column", "column", "column", "column", "row"]}>
                    <Flex direction="column"
                        // maxW={["unset", "unset", "unset", "unset", "60vw"]}
                        w={["100%", "100%", "100%", "100%", "40vw"]}
                        mr={48}
                    > 
                        <Flex minH="40vh">
                            <InputGroup 
                                // mt={["5vh", "5vh", "5vh", "5vh", "unset"]}
                                // w={["90vw", "85vw", "60vw", "50vw"]}
                                w={["100%", "100%", "100%", "100%", "40vw"]}
                                margin="auto"
                                display={txStatus ? "none" : txSearch ? "flex" : "none"}
                                // mb={9}
                            >
                                <Input 
                                    placeholder="Check status for txid" 
                                    id="searchInput"
                                    isInvalid={isSearchInValid}
                                    value={searchValue}
                                    onChange={ handleChange }
                                />
                                <InputRightElement onClick={ search } children={<SearchIcon color="gray.600" />} />
                            </InputGroup>
                            {txStatus ? 
                            <Flex minH={["50vh", "50vh", "40vh"]}
                            >
                                <Transaction id={searchValue}/>
                            </Flex>
                            : txSearch ? <></> :
                            <>  
                                <List marginInlineEnd="auto" mt={["3vh", "2vh", "3vh", "5vh"]} w={["80vw","80vw", "80vw", "80vw", "45vw"]}>
                                    <ListItem mb={9}>
                                        <ListIcon as={IoMdPricetag} color="yellow.400" />
                                            Price 20ADA
                                    </ListItem>
                                    <ListItem mb={9}>
                                        <ListIcon as={RiAlarmWarningFill} color="red.400" />
                                            Use Yoroi or Daedalus, do not send ADA from an exchange! Send the exact amount without additional tokens.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={InfoIcon} color="teal.400" />
                                            If you want to buy more NFTs, send multiple transactions with 50ADA. 
                                    </ListItem>
                                    <Spacer/>
                                </List>
                            </>
                        }
                        </Flex>
                        <Button 
                           width={["80vw", "80vw", "80vw", "70vw", "25vw", "25vw"]}
                           mt={["1vh", "1vh", "1vh", "1vh", "1vh", "5vh"]}
                           height={["8vh", "7vh", "15vh", "15vh", "15vh", "15vh"]}
                           variant="ghost"
                           className={utilStyles.shadow}
                           transition="all 0.3s ease-in-out"
                           display={txSearch ? "none" : "flex"}
                           onClick={ () => showTxSearch(true) }
                        >
                           <SearchIcon color="gray.600"/>
                           <Heading fontSize={["1.25rem", "1.25rem", "1.5rem"]} as="h4" textColor="gray.600"
                               fontWeight="normal"
                           >
                               LOOKUP TX
                           </Heading>  
                        </Button>
                        <PayBtn/>
                        {/* <Button 
                           width={["80vw", "80vw", "80vw", "70vw", "25vw", "25vw"]}
                           mt={["1vh", "1vh", "1vh", "1vh", "1vh", "5vh"]}
                           height={["8vh", "7vh", "15vh", "15vh", "15vh", "15vh"]}
                           variant="ghost"
                           className={utilStyles.shadow}
                           transition="all 0.3s ease-in-out"
                           display={txSearch ? "none" : "flex"}
                           onClick={ () => showTxSearch(true) }
                        >
                           <SearchIcon color="gray.600"/>
                           <Heading fontSize={["1.25rem", "1.25rem", "1.5rem"]} as="h4" textColor="gray.600"
                               fontWeight="normal"
                           >
                               LOOKUP TX
                           </Heading>  
                        </Button> */}
                       
                        <Flex direction={txStatus ? ["column", "column", "column", "column", "row-reverse"] : ["column", "column", "column", "column", "row"]}>
                            <Button 
                            width={!txStatus ? "0px" : ["80vw", "80vw", "80vw", "70vw", "25vw", "25vw"]}
                            mt={["1vh", "1vh", "1vh", "1vh", "1vh", "5vh"]}
                            height={["8vh", "7vh", "15vh", "15vh", "15vh", "15vh"]}
                            variant="ghost"
                            className={utilStyles.shadow}
                            transition="all 0.3s ease-in-out"
                            display={txStatus ? "flex" : "none"}
                            onClick={ () => showTxStatus(false) }
                            >
                                <SearchIcon color="gray.600"/>
                                <Heading fontSize="1.5rem" as="h4" textColor="gray.600"
                                    fontWeight="normal"
                                >
                                    LOOKUP ANOTHER
                                </Heading>  
                            </Button>
                            <Button 
                                width={["80vw", "80vw", "80vw", "70vw", "25vw", "25vw"]}
                                mt={["1vh", "1vh", "1vh", "1vh", "1vh", "5vh"]}
                                height={["8vh", "7vh", "15vh", "15vh", "15vh", "15vh"]}
                                variant="ghost"
                                className={utilStyles.shadow}
                                transition="all 0.3s ease-in-out"
                                display={txSearch ? "flex" : "none"}
                                onClick={ () => { 
                                    showTxSearch(!txSearch) 
                                    showTxStatus(false)
                                }}
                            >
                                {/* chakra color var doesn't work here */}
                                <FaChevronLeft fill="#4A5568" />
                                <Heading className={utilStyles.noHovDecor} as="h4" fontSize="1.5rem" textColor="gray.600"
                                    fontWeight="normal"
                                >
                                    GO BACK
                                </Heading>  
                            </Button>
                            <Button 
                                width={["80vw", "80vw", "80vw", "70vw"]}
                                mt={["1vh", "1vh", "1vh"]}
                                height={["8vh", "7vh", "15vh"]}
                                variant="ghost"
                                className={utilStyles.shadow}
                                transition="all 0.3s ease-in-out"
                                display={["flex", "flex", "flex", "flex", "none"]}
                                onClick={onOpen}
                            >
                            <IoIosWallet fill="#4A5568"/>
                            <Heading fontSize={["1.25rem", "1.25rem", "1.5rem"]} as="h4" textColor="gray.600"
                                fontWeight="normal"
                            >
                                ADDRESS
                            </Heading>  
                        </Button>
                        </Flex>
                    </Flex>
                    {/* <Address display={txSearch ? "none" : mobileAddress ? "flex" : ["none", "none", "none", "none", "flex"]} /> */}
                    <Address display={mobileAddress ? "flex" : ["none", "none", "none", "none", "flex"]} />
                </Stack>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cardano address</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Address/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>
                            Close
                        </Button>
                        {/*<Button variant="ghost">Secondary Action</Button>*/}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}