
let cols, rows;
let size;
let grid = [];
let stack = [];
let red =   [255, 255, 255, 255, 0,   0,   0,   180, 0, 255];
let green = [255, 0,   132, 255, 255, 255, 0,   0,   0, 0];
let blue =  [255, 0,   0,   0,   0,   255, 255, 255, 0, 187];
let closedSet = [];
let openSet = [];
let path = [];
let running = true;
let input = undefined;

let start;
let end;

function index(x, y) {
  if (x < 0 || y < 0 || x > cols-1 || y > rows-1) {
    return -1
  }
  return x + y * cols
}

function getCellDir(c1, c2) {

  if (c1.y > c2.y) {
    return 0
  }
  if (c1.y < c2.y) {
    return 2
  }
  if (c1.x > c2.x) {
    return 3
  }
  return 1

}

function preload() {

    input = loadStrings('data.txt');

}

function setup() {
  createCanvas(600, 600);
  let data = '';
  for (let i = 0; i < input.length; i++) {
      data = data.concat(input[i]);
  }
  cols = floor(sqrt(data.length));
  rows = cols;
  w = width/cols;
  h = height/rows;
  if (w > h) {
    size = h;
  } else {
      size = w;
  }
  //noLoop();
  //frameRate(1);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        grid.push(new Cell(x, y, data[index(x, y)]))
    }
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i].addNeighbors();
  }

  start = grid[0];
  end = grid[grid.length-1];
  openSet.push(start);
  
}

function draw() {
  //print([...openSet]);
  //print([...closedSet]);
    if (running) {
  if (openSet.length > 0) {

    let winner = 0;
    for (i = 0; i < openSet.length; i++) {

        if (openSet[i].f < openSet[winner].f) {
            winner = i;
        }
    }
        let current = openSet[winner];

        if (current === end) {
            console.log('done');
            let temp = current;
            let risk = 0;
            path.push(temp);
            while (temp.parent) {
                risk = risk + temp.risk;
                path.push(temp.parent);
                temp = temp.parent;
            }
            print(risk);
        }
        openSet.splice(winner, 1);
        closedSet.push(current);
        let neighbors = current.neighbors;
        let neighs = [];
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!closedSet.includes(neighbor)) {

                let tempG = current.g + neighbor.h;

                if (openSet.includes(neighbor)) {

                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                        neighbor.parent = current;
                    }

                } else {

                    neighbor.g = tempG;
                    neighbor.parent = current;

                }
                neighbor.f = neighbor.g + neighbor.h;
                if (neighs.length === 0) {
                    neighs.push(neighbor);
                    nRisk = neighbor.risk;
                } else if (nRisk >= neighbor.risk) {
                    neighs.push(neighbor);
                }
            }

        }

        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (neighs.includes(neighbor)) {
                openSet.push(neighbor);
            } else {
                closedSet.push(neighbor);
            }
        }



  } else {

  }

  background(51);
  for (let i = 0; i < grid.length; i++) {
      grid[i].show(color(255));
  }
  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }
  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }
  for (let i = 0; i < path.length; i++) {
    path[i].show(color(0, 0, 255));
  }
} else {

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
}
}
}

class Cell {

    constructor(x, y, risk) {

        this.x = x;
        this.y = y;
        this.risk = parseInt(risk);
        this.g = 0;
        this.h = this.risk;
        this.f = 0;
        this.neighbors = []
        this.parent = undefined;

    }

    show(color) {
        
        if (color) {
            fill(color);
        } else {
            fill(red[this.risk], green[this.risk], blue[this.risk]);
        }
        rect(this.x*size, this.y*size, size, size);
        fill(255);
        //text(this.g, this.x*size+size/2, this.y*size+size/2);

    }

    addNeighbors() {
        let is = [index(this.x+1, this.y), index(this.x-1, this.y), index(this.x, this.y+1), index(this.x, this.y-1)]
        for (let j = 0; j < is.length; j++) {
            if (is[j] > -1) {

                this.neighbors.push(grid[is[j]]);

            }
        }

    }

}
