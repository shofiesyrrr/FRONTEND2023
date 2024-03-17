//import data dari file data.mjs
import users from "./data.mjs";

/**
 * membuat user controller
 * terdapat method index dan store
 */
const index = () => {
    console.log("Hasil");
    users.forEach(function (user){
        console.log(user);
    });
};
const store = (user) => {
    users.push(user);
}

//kemudian export data
export { index, store};