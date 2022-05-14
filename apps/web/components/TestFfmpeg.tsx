import { Button } from "@chakra-ui/react";
import getContractAssetsHook from "../hooks/getContractAssetsHook";
import getUserAssetsHook from "../hooks/getUserAssetsHook";
import filetype from 'magic-bytes.js'
import all from 'it-all'
import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
import * as IPFS from 'ipfs-core'
import { useState } from "react";

export default async function TestFfmpeg() {
    // const [ userAssetViews, loadUserAssetViews ] = getUserAssetsHook()
    // const [ contractAssetViews, loadContractAssetViews ] = getContractAssetsHook()
    // const [ipfsNode, setIpfsNode] = useState<IPFS | undefined>()
    const ipfsNode = await IPFS.create()
    // const usersAssets 

    // const loadAssets

    const test = async () => {
        // console.log('contractAssetViews')
        // console.log(contractAssetViews)
        // console.log('userAssetViews')
        // console.log(userAssetViews)
        
        const response = uint8ArrayConcat(await all(ipfsNode.cat('QmbytYGomBm136d3xWm1vuku9givkQS2WxmLxFKTXwXixj')))
        const response2 = uint8ArrayConcat(await all(ipfsNode.cat('QmT79cTHosBWS5mUJ2K8TkFPd9PeZZ7b5a5ZNgmnmewDDh')))
        console.log(response)
        console.log(response2)
        testFfmpeg(response, response2)
        //QmT79cTHosBWS5mUJ2K8TkFPd9PeZZ7b5a5ZNgmnmewDDh
    }
 
    const testFfmpeg = async (picFile: Uint8Array, soundFile: Uint8Array) => {
        // test()
        const picFT = filetype(picFile)
        console.log(picFT)
        const soundFT = filetype(soundFile)
        console.log(soundFT)
        // const message = document.getElementById('message');
        const { createFFmpeg, fetchFile } = await import('@ffmpeg/ffmpeg');
        const ffmpeg = createFFmpeg({
        //    corePath: 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js',
            log: true,

            progress: ({ ratio }) => {
                // message.innerHTML = `Complete: ${(ratio * 100.0).toFixed(2)}%`;
            },
        });
        // ffmpeg -loop 1 -i ima.jpg -i audio.wav -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest out.mp4

        // const joinAudioWithVideo = async (audio: Uint8Array, video: Uint8Array) => {
        await ffmpeg.load();
        ffmpeg.FS('writeFile', 'cs-sound-audio.mp3', soundFile)//await fetchFile('/music.mp3'))//audio)
        ffmpeg.FS('writeFile', 'cs-image.png', picFile)//await fetchFile('/noise.png'))
        await ffmpeg.run('-loop', '1', '-i', 'cs-image.png', '-i', 'cs-sound-audio.mp3', '-c:v', 'libx264', '-tune', 'stillimage', '-c:a', 'aac', '-b:a', '192k', '-pix_fmt', 'yuv420p', '-shortest', 'output.mp4');
        // await ffmpeg.run('-i', 'cs-sound-video.mp4', '-i', 'cs-sound-audio.mp3', '-shortest', 'output.mp4');
        const data = ffmpeg.FS('readFile', 'output.mp4');
        const videoHtml: any = document.getElementById('output-video');
        videoHtml.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
        // }
        // document.getElementById('uploader').addEventListener('change', transcode);
    }

    return (
        <>
            <video id='output-video' controls></video><br/>
            <Button onClick={() => test()}>Click</Button>
        </>
    )
}