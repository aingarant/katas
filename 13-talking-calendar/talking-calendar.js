const talkingCalendar = (dateStr) => {
  const options = { month: "long" };

  const date = new Date(dateStr);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];


  console.log(month, day, year);
};

console.log(talkingCalendar("2017/12/02"));
