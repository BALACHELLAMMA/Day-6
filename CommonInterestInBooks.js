// const students = [
//     {
//       id: 0,
//       name: ‘Arun’,
//       books: [‘Wings of Fire’, ‘Chakra’],
//     },
//     {
//       id: 1,
//       name: ‘Ashok’,
//       books: [‘Chakra’, ‘War and Peace’, ‘The Shining’]
//     },
//     {
//       id: 2,
//       name: ‘Balu’,
//       books: [‘Wings of Fire’, ‘All about Cricket’],
//     },
//     {
//       id: 3,
//       name: ‘Cathi’,
//       books: [‘Against the wind’, ‘The Shining’, ‘War and Peace’]
//     },
//   ];
//   Find the common interest in books for the students
//   Output
//   Wings of Fire - [‘Arun’, ‘Balu’]
//   Chakra - [‘Arun’, ‘Ashok’]
//   War and Peace - [‘Ashok’, ‘Cathi’],
//   All about Cricket- [‘Balu’],
//   Against the wind- [‘Cathi’]
//   The Shining - [‘Cathi’, ‘Ashok’]
//   Find the user who shares most interest with other users.
//   For example: Ashok since he shares book interest with Arun, Cathi.
//   And also Arun since he shares interest with Balu and Ashok

const students = [
        {
          id: 0,
          name: 'Arun',
          books: ['Wings of Fire', 'Chakra'],
        },
        {
          id: 1,
          name: 'Ashok',
          books: ['Chakra','War and Peace', 'The Shining']
        },
        {
          id: 2,
          name: 'Balu',
          books: ['Wings of Fire', 'All about Cricket'],
        },
        {
          id: 3,
          name: 'Cathi',
          books: ['Against the wind', 'The Shining', 'War and Peace']
        },
];



// const booksArrayOfObject = students.map((currentObject)=> 
// currentObject.books);
// console.log(booksArrayOfObject);



// //Find common interests in books for the students
// function findCommonInterestsInBooksForStudents(students){

//       if(!Array.isArray(students) || students.length === 0){
//         console.error("Invalid Array");
//         return false;
//       }

//       const bookInterests = {};

//       let index=0;
//       for (const student of students) {

//         //destructing name and books of current index
//         const { name, books } = student;
  
        //traverse the currentindex's books
//         for(const book of books) {
           
//           if (!bookInterests[book]) {
//                 bookInterests[book] = [];
//           }

//           //currentindex's book = ["currentindex's name"]
//           bookInterests[book].push(name);

//           // console.log(bookInterests);
//           // console.log(book ,name);

//         }
 
//       }
//     return bookInterests;
// }


// let commonInterests =findCommonInterestsInBooksForStudents(students);
// console.log(commonInterests);

const bookInterests = {};
for (const student of students) {
  const { name, books } = student;
  for (const book of books) {
    if (!bookInterests[book]) {
      bookInterests[book] = [];
    }
    bookInterests[book].push(name);
  }
}


let maxSharedInterestsCount = 0;
let userWithMostSharedInterests = '';

for (const student of students) {
  const sharedInterests = {};
  for (const book of student.books) {
    for (const user of bookInterests[book]) {
      if (user !== student.name) {
        if (!sharedInterests[user]) {
          sharedInterests[user] = 0;
        }
        sharedInterests[user]++;
      }
    }
  }

  for (const user in sharedInterests) {
    if (sharedInterests[user] > maxSharedInterestsCount) {
      maxSharedInterestsCount = sharedInterests[user];
      userWithMostSharedInterests = student.name;
    }
  }
}


console.log('Common interests in books:');
for (const book in bookInterests) {
  console.log(`${book} - [${bookInterests[book].join(', ')}]`);
}

console.log('User who shares the most interests with others:', userWithMostSharedInterests);

















