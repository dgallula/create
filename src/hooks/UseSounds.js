import { useEffect, useRef,useState  } from 'react';
import * as Tone from 'tone';

import Loop24 from "Sounds/Loop24.wav";
import Loop25 from "Sounds/Loop25.wav";
import Loop26 from "Sounds/Loop26.wav";
import Loop27 from "Sounds/Loop27.wav";



export default function UseSounds() {
    // useRef 
    const mySampler = useRef(null);

    // useState
    const [isLoop24Played, isLoop24PlayedChange] = useState(false);
    const [isLoop25Played, isLoop25PlayedChange] = useState(false);
    const [isLoop26Played, isLoop26PlayedChange] = useState(false);
    const [isLoop27Played, isLoop27PlayedChange] = useState(false);



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
            isLoop24PlayedChange(true);
            window.setTimeout(() => { isLoop24PlayedChange(false)}, 3000);
            soundPlay("C4")
            break;   
            case "b":
             isLoop25PlayedChange(true);   
             window.setTimeout(() => { isLoop25PlayedChange(false)}, 3000);
            soundPlay("D#4")
            break;  
           case "c":
            soundPlay("F#4")
            window.setTimeout(() => { isLoop26PlayedChange(false)}, 3000);
            isLoop26PlayedChange(true);
             break; 
             case "d":
             soundPlay("A4")
             window.setTimeout(() => { isLoop27PlayedChange(false)}, 3000);
             isLoop27PlayedChange(true)  
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

     function handleSampleChange(note,file) {
       let fileURL = URL.createObjectURL(file) ;
       let buffer = new Tone.Buffer(fileURL);
       mySampler.current.add(note,buffer,()=>alert('sample succesfully changed'));
     }

    const buttonsList=
      [
         
        {
         soundPlay: ()=> soundPlay("C4"),
         isPlayed: isLoop24Played,
         id: 'loop24',
         
        },    

        {

         soundPlay: ()=> soundPlay("D#4"),
        isPlayed: isLoop25Played,
        id:'loop25',

        },    

        {
        soundPlay: ()=> soundPlay("D#4"),
        isPlayed: isLoop26Played,
        id:'loop25',
        },

        {
         soundPlay: ()=> soundPlay("A4"),
         isPlayed: isLoop27Played,
         id: 'loop27',
        },  

      ]
     
        return{buttonsList} ;
}