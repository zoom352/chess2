import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellProps {
    cell: Cell;
    selectedCell: Boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selectedCell, click}) => {
    return (
        <div
            className={['cell', cell.color, selectedCell ? 'selected' : ''].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className={'available'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
        </div>
    )
}

export default CellComponent;
