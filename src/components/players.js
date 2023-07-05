import {useState} from 'react'
  
export default function PlayersTurn(props) {
    const [playerToken, setPlayerToken] = useState(false);

    const showplayerTurns = () => {
        setPlayerToken(playerToken[0] !== playerToken[0])
       }

    return (
        <div>
            <button className="player-turn" type="button" onClick={showplayerTurns}>player turn</button> 
            <h3>{playerToken.length === 0 ? "X" : "O"}</h3>
        </div>
    )

}