interface drawType {
    width: number;
    height: number;
}
function draw(options: drawType) {
    console.log(options.height);
    console.log(options.width);

}
let add = {
    width:30,
    height:60
}
draw(add)