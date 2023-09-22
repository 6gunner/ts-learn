export {

}

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square
square.color = "blue"
square.sideLength = 10;


interface Colorful {
  color: string;
}

// interface ColorfulSub extends Colorful {
//   color: number
// }

type ColorfulSub = Colorful & {
  color: number
}
let color1: ColorfulSub;
color1.color = 1;