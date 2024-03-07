import { FC } from "react";


interface CardProps{
    img : string
    name : string
    position : "1st" | "2nd" | "3rd"
    team : string
}

const Card:FC<CardProps> = ({img, name, position, team}) => {


    return <div className="card-div">
            <h1 className="position-text">{position}</h1>
            <img src={img} className="image"></img>
            <h1 className="name-text">{name}</h1>
            <h1 className="team-text">{team}</h1>
        </div>
   

}

export default Card;