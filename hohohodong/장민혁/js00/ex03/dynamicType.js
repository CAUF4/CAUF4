// in dynamicType.js
const dynamicType = {
    put : (input) => {
        data = input;
        cast_data = data;
    },
    change : (type) => {
        if (data === undefined)
            return;
        if(type === "String"){
            cast_data = String(data);
        }else if(type === "Number"){
            cast_data = data;
        }else if(type === "Object"){
            cast_data = {data}
        }else if(type === "Array"){
            cast_data = [data]
        }
    },
    printType : () => {
        console.log(cast_data)
    }
}

t = dynamicType;

t.put(42);
t.printType();
t.change("String");
t.printType();
t.change("Number");
t.printType();
t.change("Object");
t.printType();
t.change("Array");
t.printType();