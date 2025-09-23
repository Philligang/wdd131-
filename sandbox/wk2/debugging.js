const pi = 3.14;
let radius = 3;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * pi;
    return area
}
area = circleArea(10)
console.log("Area1:", area)

area = circleArea(12)
console.log("Area2:", area)

area = circleArea(3)
console.log("Area3:", area)
