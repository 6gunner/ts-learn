let oneString: any = 'this is a string';

let size = (oneString as string).length

console.log(size);

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
