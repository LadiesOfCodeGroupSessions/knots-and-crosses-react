import React from 'react'

// note here need to be able to select the spaces. The css needs setting/connecting for this

export const Gameboard = () => {
  const [gameBoard, setGameBoard] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  const [score, setScore] = useState("");
  const [winningPatterns, setWinningPatterns] = useState([
    [0, 4, 8],
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ]);

  function toggle(id) {
  setGameBoard((prevGameBoard) => {
    return prevGameBoard.map((gameBoard) => {
      return gameBoard.id === id ? {...gameBoard, on: !gameBoard.on} : gameBoard
    })
  })
}
    const Square = (props) => {
        return  <button>-</button>
    }
   
  return (
    
    <div>
    {

    }
    
    
    Gameboard</div>
  )
}
