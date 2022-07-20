import React from "react";
import {Character} from "./Character";

export default function
  CharacterCard(props: {person:Character}){
    return (

        <div className="CharCard">
             <p>{props.person.name}</p>

             <img src={props.person.image} className="App-logo" alt="logo" />
             <p>{props.person.species}</p>

        </div>



 )

}