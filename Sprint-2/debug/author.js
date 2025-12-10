// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
//The for of loop works on things you can loop over, like arrays or strings.
//A plain object (author) isn’t something you can loop over directly, so for (const value of author) doesn’t work.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {

  console.log(value);
}
