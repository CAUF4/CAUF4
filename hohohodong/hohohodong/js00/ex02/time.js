const month = {mt : 7};
let day = 13;

const timeWarp = (newMonth, newDay) => {
    day = newDay;
    month.mt = newMonth
    console.log(month,day);
}

timeWarp(5, 10);
timeWarp(11, 20);