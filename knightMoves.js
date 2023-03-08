function Node(coordVal, prevVal) {
    return {coord: coordVal, prev: prevVal};
}

function knightMoves(start, end) {
    let visited = [];
    let curNode = Node(start, null);
    let match = false;

    if (!onBoard(start) || !onBoard(end)) return "Please enter valid coordinates between 0 and 8";

    while(!match) {
        let moves = [
            [curNode.coord[0] + 2, curNode.coord[1] - 1],
            [curNode.coord[0] + 2, curNode.coord[1] + 1],
            [curNode.coord[0] - 2, curNode.coord[1] - 1],
            [curNode.coord[0] - 2, curNode.coord[1] + 1],
            [curNode.coord[0] + 1, curNode.coord[1] - 2],
            [curNode.coord[0] + 1, curNode.coord[1] + 2],
            [curNode.coord[0] - 1, curNode.coord[1] - 2],
            [curNode.coord[0] - 1, curNode.coord[1] + 2],
          ];

        moves.forEach((move) => {
            if (onBoard(move)) {
                visited.push(Node(move, curNode));
            }
            if (move[0] == end[0] && move[1] == end[1]) {
                curNode = Node(move, curNode);
                match = true;
            }
        });
        if (match) break;
        curNode = visited.shift();
    }

    let output = [curNode.coord];
    while (curNode.coord != start) {
        output.unshift(curNode.prev.coord);
        curNode = curNode.prev;
    }
    let outputString = "";
    output.forEach((item) => outputString +=`\n[${item}]`);
    return `You made it in ${output.length-1} moves! Here's your path: ${outputString}`;
}

function onBoard(coord) {
    if (coord[0] > 0 && coord[1] > 0 && coord[0] < 8 && coord[1] < 8) return true;
    return false;
}


console.log(knightMoves([3,3], [4,3]));