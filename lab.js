//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

let me = {
  name: 'Michael',
  age: 25,
}

console.log(me)

console.log('-----')

//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).

let dog = {
  name: "Rocket",
  color: "black",
  age: 2,
  goodBoy: true
}

console.log(dog)
console.log('-----')


//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

console.log(dog.name)
console.log('-----')


//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

console.log(dog["color"]);
console.log('-----');


//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

let favoriteThings = {
  band: 'Aerosmith',
  food: 'Sushi',
  person: 'Steven Tyler',
  book: 'Born a Crime',
  movie: 'Top Gun',
  holiday: 'Christmas',
}

console.log(favoriteThings)
console.log('-----')

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
*/

favoriteThings.car = "Model S";
favoriteThings.brand = "Tesla";
console.log(favoriteThings);
console.log('-----')

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/

favoriteThings.food = 'Chicken Nuggets';
favoriteThings.book = 'Harry Potter';
console.log(favoriteThings)
console.log('-----')


//////////////////////////// PROBLEM 6 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

user.name = "Bryan G. Smith";
user.email = "bryan.smith@devmounta.in";
console.log(user);
console.log('-----')

//////////////////////////// PROBLEM 7 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

delete user['age']

console.log(user)
console.log('-----')


//////////////////////////// PROBLEM 8 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

const mittens = new Cat("mittens", 3, "grey");
console.log(mittens.name);
console.log('-----')



//////////////////////////// PROBLEM 9 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

class Wizard {
  constructor(name, age, favoriteSpell) {
    this.name = name;
    this.age = age;
    this.favoriteSpell = favoriteSpell;
  }
  castSpell() {
    console.log(`${this.name} has cast ${this.favoriteSpell}`)
  }
}
let gandolf = new Wizard('Gandolf', 88, 'Wingardiam Leviosa')

gandolf.castSpell()
console.log('-----')

//////////////////////////// PROBLEM 10 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

    class Phone {
      constructor(brand, model, storage, color, price, sold) {
        this.brand = brand;
        this.model = model;
        this.storage = storage;
        this.color = color;
        this.price = price;
        this.sold = false;
      }

      sell() {
        this.sold = true;
        console.log(`${this.brand} ${this.model} has been sold.`);
      }

      changePrice(newPrice) {
        this.price = newPrice;
      }
    }

  
/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

    const phone1 = new Phone("Apple", "iPhone 12", 50, "black", 899.99)
    const phone2 = new Phone("Samsung", "Galaxy", 80, "white", 799.99)
    const phone3 = new Phone("Google", "Pixel", 30, "red", 599.99)

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 
  
  phone1.changePrice(1200);
  console.log(phone1);

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

phone1.sell();
console.log(phone1.sold);

console.log('-----')
//////////////////////////// PROBLEM 11 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object


const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

let colorsCopy = {
  ...colors
}

console.log(colorsCopy)

/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

let helensInfo = {
  ...contactInfo,
  ...shippingInfo
}

//Print helensInfo to see what it looks like, there should be no repeating properties.

console.log(helensInfo)
console.log('-----')
//////////////////////////// PROBLEM 12 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

class Vehicle {
  constructor(capacity, color, mileage) {
    this.capacity = capacity;
    this.color = color;
    this.mileage = mileage;
  }

  move(miles) {
    this.mileage += miles;
    console.log(this.mileage)
  }
}

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

const myFirstVehicle = new Vehicle(5, "red", 50000);

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
  Note: You might need to go research 'how to extend a class'. 
*/

class Motorcycle extends Vehicle {
  constructor(capacity, color, mileage, make, isCool) {
    super(capacity, color, mileage)
    this.make = make;
    this.isCool = isCool;
  }
}

/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

const myFirstMotorcycle = new Motorcycle(2, "black", 15000, "Husqvarna", true);

/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/

myFirstMotorcycle.move(15);

console.log('-----')
/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

class Boat extends Vehicle {
  constructor(capacity, color, mileage, name, type, isSeaworthy){
      super(capacity, color, mileage)
      this.name = name;
      this.type = type;
      this.isSeaworthy = isSeaworthy
  }
  checkSeaworthiness(){
    if (this.isSeaworthy === true){
      console.log(`The ${this.color} ${this.type} ${this.name} is seaworthy!`)
    } else console.log(`You need to get your ${this.type} in shape!`)
  }
  performMaintenance(){
    this.isSeaworthy = true
  } 
}


/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

// let myFirstBoat = new Boat()

let myFirstBoat = new Boat (8, 'Red', 2000, 'Sea Senor', 'Wakeboard Boat', 'False')

/*
  Call the checkSeaworthiness method on your new boat
*/

myFirstBoat.checkSeaworthiness()

/*
  Now run the performMaintenance method on your boat
*/

myFirstBoat.performMaintenance()

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

myFirstBoat.checkSeaworthiness()