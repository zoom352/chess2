import {Board} from '../models/Board';
import React, {FC, useEffect, useState} from "react";
import CellComponent from "./CellComponent";
import {Cell} from '../models/Cell';
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null,
    swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = (
    {
        board,
        setBoard,
        currentPlayer,
        swapPlayer
    }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        hightlightCells()
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) { //ячейка не равняется той ячейки на которую мы хотим нажать
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    function hightlightCells() { // на какие ячейки может перемещаться фигура которая выбранна в данный момент
        board.hightlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>текущий игрок {currentPlayer?.color}</h3>
            <div className='board'>
                {board.cells.map((row, index) => {
                    return (
                        <React.Fragment key={index}>
                            {row.map((cell) => {
                                return (
                                    <CellComponent
                                        click={click}
                                        cell={cell}
                                        key={cell.id}
                                        selectedCell={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                    />
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default BoardComponent;
