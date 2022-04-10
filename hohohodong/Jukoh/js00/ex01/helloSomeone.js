export function helloSomeone(input)
{
    if (typeof(input) === 'string' && input != "")
        console.log("Hello "+input +"!")
    else if (input == "")
        console.log("Who are you?")
    else if (input === null)
        console.log("I am null and void")
    else if (typeof(input) === 'number')
    {
        if (input <= 0)
            console.log("I am Benjamin Button!")
        else if (input > 0)
            console.log("My age is "+input)
        else if (isNaN(input))
            console.log("Age is just a number!")
    }
    else if (input === undefined)
        console.log("Nobody can define me!")
}