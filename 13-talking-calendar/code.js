const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function daySuffix(dayInput) {
  let suffix = "";
  let dayString = dayInput.toString();
  let last = dayString.slice(-1);

  if (last === "1" && dayString !== "11") {
    suffix = "st";
  } else if (last === "2") {
    suffix = "nd";
  } else if (last === "3") {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  return suffix;
}

function talkingCalendar(dateString) {
  const date = new Date(dateString);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  monthOutput = months[month];
  dayOutput = day + daySuffix(day);
  yearOutput = year;

  return monthOutput + " " + dayOutput + ", " + yearOutput;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
