// input jam masuk
let jamMasuk = prompt("masukkan jam masuk ?");

// input jam keluar
let jamKeluar = prompt("Masukkan jam Keluar?");

let selisih = Number(jamKeluar) - Number(jamMasuk);
let hargaAwal = 3000;

if(selisih <= 2) {
    alert(`Keluaran Biaya : ${hargaAwal}}`);
} else{
    let hasil = hargaAwal + (selisih - 2) * 1000;
    alert(`Keluaran Biaya : ${hasil}`);

}
