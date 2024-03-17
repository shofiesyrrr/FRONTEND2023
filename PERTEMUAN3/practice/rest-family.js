/**
 * membuat fungsi show family dengan parameter ketiga menggunakan rest parameters
 */
function showFamilies (suami, istri, ... anak2){
    console.log(`Suami: ${suami}`);
    console.log(`Istri: ${istri}`);

    for (const anak of anak2){
        console.log(`Anak : ${anak}`);
    }
}

showFamilies("Mikel", "Hannah", "Jonas", "Martha", "Magnuz");