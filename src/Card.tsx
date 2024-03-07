import { FC } from "react";
import { useMediaQuery } from 'react-responsive';

interface CardProps{
    img : string
    name : string
    position : "1st" | "2nd" | "3rd"
    team : string
}

const Card:FC<CardProps> = ({img, name, position, team}) => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return <div className={(isMobile && position === "1st") ? "card-div order-first": "card-div"}>
            <h1 className="position-text">{position}</h1>
            <img src={img} className="image"></img>
            <h1 className="name-text">{name}</h1>
            <h1 className="team-text">{team}</h1>
        </div>
   

}

export default Card;