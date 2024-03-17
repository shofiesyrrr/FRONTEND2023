/**
 * membuat fungsi pertambahan
 * menggunakan rest parameter
 */
function sum (... numbers){
    let hasil = 0 //menggunakan looping

    for (const number of numbers){
        hasil += number;
    }
    return hasil;
}

console.log(sum(1, 2, 3, 4, 5));