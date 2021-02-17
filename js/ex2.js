const r = Number(prompt("Enter the circle radius:"));

function circle(radius)
{
    this.radius = r;
  // area 
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // circumference
    this.circumference = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var circle = new circle(3);

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

