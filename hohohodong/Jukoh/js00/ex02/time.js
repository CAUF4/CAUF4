const month = {nMonth : 7};
let day = 13;

const timeWarp = (newMonth, newDay) =>
{
    month.nMonth = newMonth;
    day = newDay;
    console.log(`${month.nMonth}월 ${day}일`)
}

timeWarp(5,10);
timeWarp(11,20);
