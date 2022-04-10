const month = {mmonth: 7};
let day = {mday: 13};

const timeWarp = (newMonth, newDay) => {
  month.mmonth = newMonth
  day.mday = newDay
}

timeWarp(4,5);
console.log(month, day);