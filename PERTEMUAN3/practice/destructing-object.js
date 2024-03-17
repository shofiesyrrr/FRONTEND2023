//membuat object
const req = {
    body : {
        name : "Shofi Syahria Mahram",
        age : 22,
        major : "Informatics"
    }
};

/**
 * Melakukan destructing object berdasarkan key atau kunci
 * kalau object menggunakan {}/ kurung kurawal 
*/
const { name, age, major} = req.body;

console.log(name, age, major);