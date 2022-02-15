import { useEffect, useRef } from 'react';
import * as Tone from 'tone'


export default function UseSounds() {
    // useRef 
    const mySampler = useRef(null);

    //  useEffect with empty dependency array. useEffect(()=>{},[ ])
    useEffect(()=> {
        const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current=sampler;

        })
        
    },[]);

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note],4);
    }

    const buttonsList=
      [
         
        {
            soundPlay: ()=> soundPlay("C4"),
        },    

        {
            soundPlay: ()=> soundPlay("D#4"),
        },    

        {
            soundPlay: ()=> soundPlay("F#4"),
        },    

        {
            soundPlay: ()=> soundPlay("A4"),
        },    

      ]
     
        return{buttonsList} ;
}