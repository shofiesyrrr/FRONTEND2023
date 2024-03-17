//membuat array names
const names = ["Michael", "Hannah", "Jonas"]

//membuat array of object
const users = [
    {
        name: "Jonas",
        age: 15
    },
    {
        name: "Michael",
        age: 40
    },
    {
        name: "Hannah",
        age: 35
    }
]

names.forEach((name) => console.log(`Nama : ${name}`));

const formattedName = names.map((name) => `Mr/Mrs. ${name}`);
console.log(formattedName);

const foundUser = users.find((user) => user.age > 21);
console.log(foundUser);

const filteredUser = users.filter((user) => user.age > 21);
console.log(filteredUser);