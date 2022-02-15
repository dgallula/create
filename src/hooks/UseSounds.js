import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

import Loop24 from "Sounds/Loop24.wav";
import Loop25 from "Sounds/Loop25.wav";
import Loop26 from "Sounds/Loop26.wav";
import Loop27 from "Sounds/Loop27.wav";



export default function UseSounds() {
    // useRef 
    const mySampler = useRef(null);

    //  useEffect with empty dependency array. useEffect(()=>{},[ ])
    useEffect(()=> {
        const sampler = new Tone.Sampler({
             
                C4: Loop24,
                "D#4":Loop25,
                "F#4":Loop26,
                A4: Loop27,
            
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current=sampler;

        })
        
    },[]);

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note],4);
    }

    function handleKeyDown ({key}) {
        console.log(key);

        switch (key) {
            case "a":
            soundPlay("C4")
            break;   
            case "b":
            soundPlay("D#4")
            break;  
            case "c":
            soundPlay("F#4")
             break; 
             case "d":
             soundPlay("A4")
            break; 

            default:
                
        }
    } 

    function handleKeyDown ({key}) {
       console.log(key)
    }
    
    useEffect(()=> {
        window.addEventListener("keydown",handleKeyDown);

        return ()=> {
            window.removeEventListener("keydown",handleKeyDown);
        }
    })



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