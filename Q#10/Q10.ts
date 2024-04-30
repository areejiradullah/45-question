// Areej 30 may 2024
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "Saba";

// lowercase

console.log(personName.toLowerCase()); //show the name in small letter

// uppercase

console.log(personName.toUpperCase()); //show the name in capital letter

//titlecase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
