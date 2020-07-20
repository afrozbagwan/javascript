marks =prompt("enter marks")
//USING CONDITIONAL STATEMENT
/*if (marks >= 85)
{
    console.log("Marks are " + marks + " And Grade is A")
}
else if(marks >= 75)
{
    console.log("Marks are " + marks + " And Grade is B")
}
else if(marks >= 55)
{
    console.log("Marks are " + marks + " And Grade is C")
}
else 
{
    console.log("Marks are " + marks + " And you are Pass")
}
*

//USING SWITCH CASE
/*
switch(true)
{
    case (marks >= 85):
        {
        console.log("Marks are " + marks + " And Grade is A")
        }
        break
    case (marks >= 75):
        {
            console.log("Marks are " + marks + " And Grade is B")
        }
        break
    case (marks >= 45):
        {
            console.log("Marks are " + marks + " And Grade is C")
        }
        break
    default:
    {
        console.log("Marks are " + marks + " And you are Pass")
    }
    break
        

}*/

//  USING ternary


var a = (marks >= 85)? console.log("Marks are " + marks + " And Grade is A")
: (marks >= 75)?  console.log("Marks are " + marks + " And Grade is B")
:(marks >= 45)? console.log("Marks are " + marks + " And Grade is C")
: console.log("Marks are " + marks + " And you are Pass")
