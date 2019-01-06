const DIM = 9; // sudoku dimension, 9 x 9
const BLANK = 0; // unsolved cell

function isInColumn(grid, col, num) {
    for (var row = 0; row < DIM; row++) {
        if (grid[row][col] === num) {
            return true;
        }
    }

    return false;
}

function isInRow(grid, row, num) {
    for (var col = 0; col < DIM; col++) {
        if (grid[row][col] === num) {
            return true   
        }
    }
    return false;
}

const BOX_MOD = Math.sqrt(DIM);
function isInBox(grid, boxStartRowIndex, boxStartColumnIndex, num) {
    for (var row = 0; row < BOX_MOD; row++) {
        for (var col = 0; col < BOX_MOD; col++) {
            if (grid[row + boxStartRowIndex][col + boxStartColumnIndex] === num) {
                return true;
            }
        }
    }

    return false;
}


function isValidFill(grid, row, col, num) {
    return !isInColumn(grid, col, num) &&
            !isInRow(grid, row, num) &&
            !isInBox(grid, row - row % BOX_MOD, col - col % BOX_MOD, num);
}

function getUnSolvedLocation(grid) {
    for (var row = 0; row < DIM; row++) {
        for (var col = 0; col < DIM; col++) {
            if (grid[row][col] === BLANK) {
                return [ row, col ];
            }
        }
    }    

    return undefined;
}

function solveSudoku(grid) {
    const unsolvedLocation = getUnSolvedLocation(grid);
    
    if (unsolvedLocation === undefined) {
        return true;
    }

    const [ row, col ] = unsolvedLocation;

    for (var num = 1; num <=9; num++) {
        if (isValidFill(grid, row, col, num)) {
            grid[row][col] = num;

            if (solveSudoku(grid)) {
                return true;
            }

            // reset the cell in case guees was wrong
            grid[row][col] = BLANK;
        }
    }

    // back track to try another number
    return false;
}

function sudokuPrinter(grid) {
    grid.forEach(row => console.log(row.join('|')));
}
const test = [ 
    [ 0, 9, 0, 0, 0, 0, 8, 5, 3 ],
    [ 0, 0, 0, 8, 0, 0, 0, 0, 4 ],
    [ 0, 0, 8, 2, 0, 3, 0, 6, 9 ],
    [ 5, 7, 4, 0, 0, 2, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 9, 0, 0, 6, 3, 7 ],
    [ 9, 4, 0, 1, 0, 8, 5, 0, 0 ],
    [ 7, 0, 0, 0, 0, 6, 0, 0, 0 ],
    [ 6, 8, 2, 0, 0, 0, 0, 9, 0 ] 
];

solveSudoku(test);

sudokuPrinter(test);

// todo: handle unsolvable ones