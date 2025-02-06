let sum = 0;

while (sum < 50)
{
    let randomNum = Math.floor(Math.random() * 10) + 1; 
    sum += randomNum;
    console.log("Generated number:", randomNum, "Current sum:", sum);
}

console.log("Final sum:", sum);
