import {Character} from "./Character";
import CharacterCard from "./CharacterCard";

export default function CharacterGallery(props:{allCharacters:Character[]}){
    return (
        <div className="allTheCards">
    {

        props.allCharacters.map((oneCharacter :Character)=>{return CharacterCard({person:oneCharacter});})
    }
        </div>
    )
}

