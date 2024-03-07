import { FC } from "react"
import Card from "./Card";
import hamilton from '/hamilton.png'
import leclerc from '/leclerc.png'
import vettel from '/vettel.png'


const App:FC = () => {

  return <div className="main-cont">
                <h1 className="title-txt">2019 Canadian GP</h1>
                <div className="inner-cont">
                    <Card img={vettel}  position="2nd" name="Sebastian Vettel" team="Scuderia Ferrari"/>
                    <Card img={hamilton}  position="1st" name="Lewis Hamilton" team="Mercedes AMG Petronas"/>
                    <Card img={leclerc}  position="3rd" name="Charles Leclerc" team="Scuderia Ferrari"/>
                </div>
          </div>

}

export default App;