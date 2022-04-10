var helloSomeone = function(input){
    var str;

    if(input == null){
        if(input === undefined){
            str ="Nobody can define me!";
            return console.log(str);
        }
      str = "I am null and void";
    }else if(typeof(input) == "string"){
        if(input == ""){
            str =  "Who are you?";
            return console.log(str);
        };
        str = "Hello " +input;
    }else if(typeof(input) == "number"){
        if(isNaN(input)){
            str = "Age is just a number";
            return console.log(str);
        }
        if(input <= 0){
            str =  "I am Benjamin Button";
            return console.log(str);
        }
       str =  "Myage is "+input;
    };
    return console.log(str);
};

export default helloSomeone;

