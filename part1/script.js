class shape{
    constructor(name,sides,sideLength){
        this.name = name ;
        this.sides = sides ;
        this.sideLength = sideLength ;
    }

    calcPerimeter() {
        let result =  this.sides * this.sideLength ;
        console.log(result);
    }
}

const square = new shape("square" , 4 , 5);
square.calcPerimeter(); // 20

const triangle = new shape ("triangle" , 3 , 3);
triangle.calcPerimeter(); // 9