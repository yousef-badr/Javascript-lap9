class shape{
    constructor(sideLength,name,sides){
        this.name = name ;
        this.sides = sides ;
        this.sideLength = sideLength ;
    }

    calcPerimeter() {
        let result =  this.sides * this.sideLength ;
        console.log(result);
    }
}

class square extends shape {
    constructor(sideLength , name = "square" , slides = 4 ){
        super(sideLength,name,slides);
    }

    calcArea(){
        let area = this.sideLength**2;
        console.log(area);
    }
}

const square2 = new square(5);
square2.calcPerimeter(); // 20
square2.calcArea(); // 25
