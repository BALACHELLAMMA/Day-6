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


function findCommonInterestsAndMostSharedInterestsUsers(students){
   //type and length check 
  
      if(!Array.isArray(students) || students.length === 0){
        console.error("Invalid Array");
        return false;
      }


//common interests in books
const bookInterests = {};

for (const student of students) {

  //destructing
  const { name, books } = student;
  
  for (const book of books) {
    
    if (!bookInterests[book]) {
      bookInterests[book] = [];
    }
    bookInterests[book].push(name);
  }

}


console.log('Common interests in books:\n');
for (const book in bookInterests) {
  console.log(`${book} - [${bookInterests[book].join(', ')}]`);
}

//user who shares the most interests with others
let maxSharedInterestsCount = 0;
let userWithMostSharedInterests = '';

//iterate students array of object 
for (const student of students) {

  const sharedInterests = {};
 
  //iterate books property in student array
  for (const book of student.books) {

    //get user from bookinterests[book] 
    for (const user of bookInterests[book]) {
    // console.log(user);

    //not to check the same user
      if (user !== student.name) {

        //if the user is not in sharedInterests, then their count will 0
        if (!sharedInterests[user]) {
          sharedInterests[user] = 0;
        }
        sharedInterests[user]++;
      }
    }
  }

  for (const user in sharedInterests) {

    //finding maxsharedInterest user basend on max count of sharedInterests
    if (sharedInterests[user] > maxSharedInterestsCount) {
         maxSharedInterestsCount = sharedInterests[user];
         userWithMostSharedInterests = student.name;
    }
    else if (sharedInterests[user] === maxSharedInterestsCount) {
      // If there are multiple users with the same number of shared interests, 
      //then store them in an array
       userWithMostSharedInterests += `, ${student.name}`;
    }
  }
}

console.log('\nUser who shares the most interests with others:\n', userWithMostSharedInterests);

}
 

findCommonInterestsAndMostSharedInterestsUsers(students);



















