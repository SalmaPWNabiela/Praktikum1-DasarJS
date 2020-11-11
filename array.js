//pendefinisian array

//array string
let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer dan Jaringan"]
//array numeric
let tingkatan_kelas = [10,11,12]
//array objek
let siswa = [
    //objek pertama
    {
        nama : "Yaya",
        jurusan : "RPL"
    },
    //objek kedua
    {
        nama : "Ying",
        jurusan : "TKJ"
    },
    //objek ketiga
    {
        nama : "Gopal",
        jurusan: "RPL"
    }
]

//1. mendapatkan jumlah data pada array
console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);


//2. menambahkan / memasukkan data pada array
let kota = ["Malang","Surabaya","Tulungagung"]
console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);
console.log("--------------");
//tambah data kota baru
kota.push("Banyuwangi")
console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

//contoh penerapan penambahan data pada array objek
let barang = [
    { nama : "Rinso", harga : 5000 },
    { nama : "Moonlight", harga : 4000 }
]
console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);
console.log("--------------");
//tambah data barang baru
barang.push(
    { nama : "Molto", harga : 1000 }
)
console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);


//3. menghapus data pada array
let nama_org = [ "Ana", "Sulaiman", "Putri", "Gatot", "Adit"]
nama_org.splice(2,1)
console.log(nama_org);


//4. menampilkan data pada array object
let siswa = [
    { nama_depan : "Jack", nama_belakang : "Ma" },
    { nama_depan : "Johnny", nama_belakang : "English" },
    { nama_depan : "John", nama_belakang : "Cena" }
]
//menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)