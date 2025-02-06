var n=prompt("enter the no");
console.log(n);

  var  rev = 0, rem, temp;
   
    temp = n;


    while (n >0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n =Math.floor(n/10);
    }


    if (temp == rev)
    {
        console.log("No is palindrome");

    }
    else
    {
        console.log("No is  not palindrome");
    }
        