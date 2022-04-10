const dynamicType = {
    put : (input) =>
    {
        newData = input
    },
    change : (dataType) =>
    {
        if (dataType =="String")
            newData = String(newData)
        else if(dataType == "Number")
            newData = newData
        else if(dataType == "Array")
            newData = [newData]
        else if(dataType == "Object")
            newData = {newData}   
    },
    printType : () =>
    {
        console.log(newData)
    }
}

type = dynamicType

type.put(42);
type.change("String");
type.printType();
