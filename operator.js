//operator aritmatika
let a = 2, b = 5, c= "10"
console.log("a + b = " + (a+b))
console.log("a + c = " + (a+c))
console.log("a - b = " + (a-b))
console.log("a * b = " + (a*b))
console.log("b / a = " + (b/a))
console.log("b % a = " + (b%a))
console.log("b ** a = " + (b**a))

//operator perbandingan
let a = 5, b = 10, c = "5"
console.log("a == c -> " + (a == c))
console.log("a === c -> " + (a === c))
console.log("a != c -> " + (a != c))
console.log("a !== c -> " + (a !== c))
console.log("a > c -> " + (a > c))
console.log("a >= c -> " + (a >= c))
console.log("a < c -> " + (a < c))
console.log("a <= c -> " + (a <= c))

//percabangan (bentuk if)
let tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
}

//percabangan (bentuk if else)
let tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
}
else{
    console.log(tahun + " bukan tahun kabisat");
}

//percabangan (if else if)
let nilai = 80
if (nilai > 80){
    console.log("Excellent")
}else if (nilai <= 80 && nilai > 70){
    console.log("Good")
}else if (nilai <= 70 && nilai > 60){
    console.log("Not Bad")
}else{
    console.log("So Bad")
}

//perulangan (for loop)
for (let index = 1; index <= 10; index++){
    console.log("Perulangan ke-" + index)
}

//perulangan (for/in loop)
let siswa = {
    nama : "Kusuma Seta",
    gender : "Wanita",
    jurusan : "RPL",
    usia : "300",
    alamat : "Ngantru"
}
for (key in siswa){
    console.log(key);
}

//perulangan (for/of loop)
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden){
    console.log(pres)
}

//perulangan (while loop)
let laptop = ["Lenovo", "HP", "Acer", "Asus"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}

//perulangan (do while loop)
let gadget = ["Xiaomi", "Samsung", "Motorola", "Sony Ericson"]
let i = 0
do{
    console.log(gadget[i])
    i++
}while(gadget[i])