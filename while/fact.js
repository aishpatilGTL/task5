var num=parseInt(prompt("Enter the no"));
console.log(num);
var fact=1;
while(num>0)
{
    fact=fact*num;
    num--;
}
console.log("Factorial of no:",fact);