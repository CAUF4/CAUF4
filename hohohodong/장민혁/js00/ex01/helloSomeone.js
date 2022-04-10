

function helloSomeone(input)
{
    if (input === "")
        console.log("Who are you?");
    else if (typeof(input) === "string")    
        console.log(`Hello $(input)`)
    else if (input === null)
        console.log("I amd null and void")
    else if (typeof(input) === "number")
    {
        if (input > 0)
            console.log(`My age is $(input)`);
        else
            console.log("I am Benjamin Button!")
    }
    else if (input === NaN)
        console.log("Age is just a number")
    else if(input === undefined)
        console.log("Nobody can define me!");
}

export default helloSomeone;