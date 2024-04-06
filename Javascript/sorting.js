const people = [
  {
    name: "Rhianna Johnson",
    birth: "11/30/2011",
  },
  {
    name: "Aiden Shaw",
    birth: "09/16/1992",
  },
  {
    name: "Trevon Floyd",
    birth: "01/16/1992",
  },
  {
    name: "Melanie Yates",
    birth: "12/12/2001",
  },
  {
    name: "Chris Andrews",
    birth: "02/09/1891",
  },
  {
    name: "Jacinda Miller",
    birth: "12/01/1982",
  },
  {
    name: "Will Davis",
    birth: "11/30/2011",
  },
  {
    name: "Eliza Baxter",
    birth: "10/31/1999",
  },
];

const sortByname = people.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
  return 0;
});

//sortByBirth

const sortByBirth = people.sort((a, b) => {
  const birthA = new Date(a.birth);
  const birthB = new Date(b.birth);
  return birthA - birthB;
});
console.log(sortByBirth)
// console.log(sortByname);
