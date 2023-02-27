function isString(value: unknown): value is string {
    return typeof value === "string";
  }
//   isString("hi")
  
  function printStringOrLength(value: unknown): void {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log(value.toString());
    }
  }
  
  printStringOrLength(true)

  interface Dog {
    name: string;
    breed: string;
  }
  
  interface Cat {
    name: string;
    age: number;
  }
  
  function isDog(pet: Dog | Cat): pet is Dog {
    return pet.hasOwnProperty('breed');
  }
  
  function printPet(pet: Dog | Cat): void {
    if (isDog(pet)) {
      console.log(`This is a dog named ${pet.name}, of breed ${pet.breed}`);
    } else {
      console.log(`This is a cat named ${pet.name}, aged ${pet.age} years old`);
    }
  }
  
  const myDog: Dog = { name: "Rex", breed: "Labrador" };
  const myCat: Cat = { name: "Whiskers", age: 3 };

  printPet(myDog)
  
  enum A {
    red =1,
    blue = 2,
  }
  console.log(A['red']);
  