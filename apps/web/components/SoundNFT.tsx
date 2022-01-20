import { Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "../interfaces/databaseTx";


export default function SoundNFT({nftData}: {nftData?: Metadata})
{
    let Player: React.ComponentType<{
        size: {
            width: number;
            height: number;
        };
        isDark: boolean;
    }>

    console.log("nftData")
    console.log(nftData)
    let playername = nftData?.player

    if(typeof(playername) != "undefined") playername = playername.split("-")[0]
    console.log("playername")
    console.log(playername)
    switch(playername)
    {
        case "glitch":
            {
                Player = dynamic(() => import("./playerGlitch"),
                                    { ssr: false }
                                );
                break
            }
            case "superformula":
            {
                Player = dynamic(() => import("./playerSuperFormula"),
                                    { ssr: false }
                                );
                break
            }
            case "randomdancers":
            {
                Player = dynamic(() => import("./playerRandomDancers"),
                                    { ssr: false }
                                );
                break
            }
            case "colors":
            {
                Player = dynamic(() => import("./playerColors"),
                                    { ssr: false }
                                );
                break
            }
        default:
            Player = null
            break
        }
        
        return (
            <>
            
                {Player != null ?
                <Flex direction={["column", "column", "row"]} minH="60vh">
                    <Flex maxW={["90%", "90%", "50%"]}>
                        <Player size={{height: 400, width: 400}} isDark={true}/>
                    </Flex>
                    <Spacer></Spacer>
                    <Stack 
                        w={["90%", "90%", "49%"]}
                        align="center"
                        justify="center"
                    >
                        <Flex display="column">
                            <Heading size="sm">token name:</Heading><a><Text>{nftData.token_name}</Text></a>
                            <Heading size="sm">policy:</Heading><Text>97de3506172e572d4e7ba9874af2616c41ae3027c9894fde2c484a62</Text>
                            <Heading size="sm">web:</Heading><a><Text>{nftData.arweave_website_uri}</Text></a>
                            <Heading size="sm">rarity color:</Heading><Text>{nftData.rarity}</Text>
                            <Heading size="sm">probability:</Heading><Text>{nftData.probability} %</Text>
                            <Heading size="sm">sounds:</Heading>{nftData.sounds.map(x => <p key={x.filename}>x.filename</p>)}
                            <Heading size="sm">player:</Heading><Text>{nftData.player}</Text>
                            <Heading size="sm">buying tx:</Heading><Text>{nftData.id}</Text>
                        </Flex>
                    </Stack>
                </Flex>
                :
                <>
                    <Flex minH="60vh" align="center" justify="center">
                        <Heading size="md">Couldn't find sound you were looking for...</Heading>
                    </Flex>
                </>}
		</>
	)
}