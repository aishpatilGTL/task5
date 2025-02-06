var num=parseInt(prompt("Enter the no"));
console.log(num);
var rev=0,rem;
while(num>0)
{
    rem=num%10;
    rev=rev*10+rem;
    num=num/10;


}
console.log("reverse no is",rev);