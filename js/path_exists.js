function pathExists(maze, i, j, map) {
    if (maze[i] === undefined || maze[i][j] === undefined || map.has(i.toString() + j.toString()) ) {
        return false;
    }

    if (i === maze.length - 1 && j === maze.length - 1) {
        console.log(map);
        return true;
    }

    map.set(i.toString() + j.toString());
    const directions = [ [i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1] ];
    for (var k = 0; k < directions.length - 1; k++) {
        if (pathExists(maze, directions[k][0], directions[k][1], map)) {
            return true;
        }
    }

    map.delete(i.toString() + j.toString());
    return false;
}

const maze = [ 
    [ 0, 1, 1, 1],
    [ 0, 0, 1, 0],
    [ 1, 0, 0, 0],
    [ 1, 1, 1, 0]
];


pathExists(maze, 0, 0, new Map());