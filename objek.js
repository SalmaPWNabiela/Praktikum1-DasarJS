//menyimpan data
//cara kurang efektif karena membutuhkan variabel yang banyak
let nama_siswa1 = "Suneo"
let nis_siswa1 = "101"
let jurusan_siswa1 = "RPL"

let nama_siswa2 = "Jeko"
let nis_siswa2 = "102"
let jurusan_siswa2 = "TKJ"

//cara lebih efektif
let siswa1 = {
    nis : "101",
    nama : "Suneo",
    jurusan : "RPL"
}
let siswa2 = {
    nis : "102",
    nama : "Jeko",
    jurusan : "TKJ"
}


//mengubah atau mendapatkan nilai dari sebuah objek
let siswa1 = {
    nis : "101",
    nama : "Suneo",
    jurusan : "RPL" 
}
//menampilkan nama siswa1
console.log("Nama Siswa 1 = " + siswa1.nama);
//mengubah nama siswa1 menjadi nobita
siswa1.nama = "Nobita"
//menampilkan nama siswa1 setelah diubah
console.log("Nama Siswa 1 = " + siswa1.nama);