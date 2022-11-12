// organizing instructors

const organizeInstructors = (instructors) => {
  let sorted = {};

  for (let instructor of instructors) {
    if (sorted[instructor.course]) {
      sorted[instructor.course].push(instructor.name);
    } else {
      sorted[instructor.course] = [instructor.name];
    }
  }
  return sorted;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
