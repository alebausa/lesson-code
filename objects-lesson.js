const students = [
  {
    name: 'Carlos',
    age: 32,
    level: 'intermediate',
    scholarhsip: true,
    favoriteFood: ['pizza', 'pasta', 'salad'],
    hasAnimals: undefined,
  },
  {
    name: 'Cristian',
    age: 31,
    level: 'intermediate',
    scholarhsip: false,
    favoriteFood: ['pizza', 'pasta', 'salad'],
    hasAnimals: undefined,
  },
]

// Change data with dot notation
// student.age = 33;

// Change data with bracket notation
// student['age'] = 34

// Access elements with objects & arrays combined
// console.log(students[0].favoriteFood[1])

const classRoom = {
  teacher: {
    firstName: 'Marcelino',
    lastName: 'Padberg',
    age: 25,
    specialty: 'WEB DEV',
  },
  students: [
    { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
    { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
    { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
    { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
    { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 },
  ],
}

// Change a value inside an object
classRoom.teacher.specialty = classRoom.teacher.specialty.toLowerCase()

console.log(classRoom)
