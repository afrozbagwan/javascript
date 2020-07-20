
function even_odd()
{
    if (no % 2==0)
    {
        return "even"
    } 
    else
    {
        return "odd" 
    }
}

no = prompt("enter number")
a = even_odd(no)
console.log(`the number entered is ${no} and number is ${a}`)
