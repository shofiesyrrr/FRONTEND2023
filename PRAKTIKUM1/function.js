/**
 * Membuat fungsi menghitung umur
 * dibuat menggunakan function declartion
 * 
 */

function age(bod){
    const year = 2024;
    const now = year - bod;
    const kalimat = `Umur saya ${year - bod}`

    return kalimat;
}

//memanggil fungsi age menggunakan console.log
console.log(age(2001));
console.log(age(2011));