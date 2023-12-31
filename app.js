// console.log("di luar pembungkus");
// if (1 + 1 === 2) {
//     console.log("betul")
// }
// console.log("di luar pembungkus");

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("Angka lebih dari 0.5");
// } else {
//   console.log("Angka kurang dari 0.5");
// }

// const iniHari = 'Sabtu';

// if (iniHari === 'Senin') {
//     console.log("Selamat bekerja kawan!")
// } else if (iniHari === 'Sabtu') {
//     console.log('Semoga jangan cepat berlalu!')
// }

// const nilai = '49';

// if (nilai < 50) {
//     console.log('E');
// } else if (nilai < 60) {
//     console.log('D');
// } else if (nilai < 70) {
//     console.log('C');
// } else if (nilai < 80) {
//     console.log('B');
// } else if (nilai < 100) {
//     console.log('A');
// }

// const hari = prompt("Isikan hari").toLowerCase();

// if (hari === "senin") {
//   console.log("Selamat bekerj akawan!");
// } else if (hari === "sabtu") {
//   console.log("Semoga jangan cepat berlalu!");
// } else {
//   console.log("Yah biasa aja!");
// }

// const password = prompt("buat pasword");

// if (password.length >= 6) {
//   console.log("Password valid");
// } else {
//   console.log("Password minimal 6 karakter");
// }

// if (password.indexOf(" ") === -1) {
//   console.log("Password tidak ada spasi");
// } else {
//   console.log("Password tidak boleh ada spasi");
// }

// nested if
// const password = prompt("buat pasword");

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak boleh ada spasi");
//   }
// } else {
//   console.log("Password minimal 6 karakter");
// }

// AND
// const password = prompt("buat pasword");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password valid");
// } else {
//   console.log("Password tidak memenuhi syarat!");
// }

// OR
// const role = prompt("Masukkan role akun");

// if (role === "admin" || role === "spv") {
//   console.log("bisa akses");
// } else {
//   console.log("tidak bisa akses");
// }

// NOT
// const role = prompt("Masukkan role akun");

// if (role !== "admin") {
//   console.log("akses ditolak");
// } else {
//   console.log("Bisa akses");
// }

// switch case
// const balonku = prompt("input warna balon:");
// switch (balonku) {
//   case "merah":
//     console.log("warna merah");
//     break;
//   case "hijau":
//     console.log("dorrrrr");
//     break;
//   default:
//     console.log("bukan balon saya");
// }

// let maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Isi tebakan pertama kamu!"));
// let attemps = 1;

// while (parseInt(guess) !== targetNum) {
//   attemps++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("terlalu tinggi!"));
//   } else {
//     guess = parseInt(prompt("terlalu rendah!"));
//   }
// }

// alert(`Selamat! Tebakan Anda benar! Dengan percobaan ${attemps} kali`);

// const fruits = ["Banana", "Pisang", "Orange", "Apple"];

// // FOR BIASA
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(`Buah ${fruits[i]}`);
// // }

// // FOR OF
// for (let fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

// const studentScore = {
//   Olip: 20,
//   Bila: 30,
//   Cici: 54,
//   Dita: 34,
//   Jaja: 76,
//   Amel: 90,
//   Ara: 100,
//   Vina: 87,
// };

// for (let student in studentScore) {
//   console.log(`${student} mendapatkan skor ${studentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores) {
//   total += score;
// }
// console.log(total / scores.length);

// FUNGCTION
// function nyanyi() {
//   console.log("DOREMI FASOLA SI DOOO");
// }

// ARGUMENTS DAN PARAMETER
// function morning(name) {
//   console.log(`Halo, ${name}. Good morning!`);
// }

// morning("Slamet");

// function jumlah(a = 0, b = 0) {
//   const total = a + b;
//   console.log(total);
// }

// RETURN
// function jumlah(a = 0, b = 0) {
//   const total = a + b;
//   return total;
// }

// const hasil = jumlah(8 + 9);
// hasil;

// function jumlah(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "false dan bukan angka";
//   }
//   return a + b;
// }

// SCOPE;
// output di luar dan di dalam fungsi

// let programming = "Javascript";

// function typeSafe() {
//   let programming = "Typescript";
//   console.log(programming);
// }
// typeSafe();

// console.log(programming);

// scope

// let linux = "Redhat";

// function easyLinux() {
//   let linux = "Debian";
//   linux; //Debian
// }

// linux; //Redhat

// eror tidak bisa
// function tyoe() {
//   let programming = "Typerscritpt";
// }

// tyoe();

// BLOCKED SCOPE VARIABLE
// tidak bisa dipanggil variabel di dalam scope (kecuali pakek var)
// let tinggi = 8;
// if (tinggi > 5) {
//   let lebar = 10;
//   //   console.log(lebar);
// }
// // console.log(lebar);

// for (let index = 0; index < 10; index++) {
//   const indexNumber = index;
// //   console.log(indexNumber);
// }
// console.log(indexNumber);

// let tinggi = 8;
// if (tinggi > 5) {
//   var lebar = 10;
//   //   console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++) {
//   var indexNumber = index;
//   //   console.log(indexNumber);
// }
// console.log("indexNumber", indexNumber);

// LEXICAL SCOPE
// function fungsiLuar() {
//   const nilaiLuar = "Ini adalah luar";

//   function fungsiDalam() {
//     let nilaiDalam = `Di dalam mengambil ${nilaiLuar}`;
//     console.log(nilaiDalam);
//   }

//   fungsiDalam();
// }

// function lamarKerja() {
//   const jabatan = "Programmer";

//   function orangDalam() {
//     let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//     console.log(kenalan);
//   }
//   orangDalam();
// }

// lamarKerja();

// FUNCTION EXPRESSIONS
// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// singkatnya pakek function expression
// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;
// };

// hasilPerpangkatan(6);

// FUNCTION SEBAGAI ARGUMEN
// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const nilai = Math.floor(Math.random() * 6) + 1;
//   console.log(nilai);
// }

//FUNCTION BERNILAI BALIK FUNCTION
// function hasilnyaAdalahFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, mungkin bisa coba lagi");
//     };
//   }
// }

// METHOD
// function myFun() {
//   //function biasa
//   console.log("Hi");
//   return "Hello";
// }

// const myMath = {
//   //object
//   perkalian: function (x, y) {
//     //method
//     return x * y;
//   },
// };

// const aritmatika = {
//   perkalian: function (x, y) {
//     return x * y;
//   },
//   pembagian: function (x, y) {
//     return x / y;
//   },
//   pangkat: function (x) {
//     return x * x;
//   },
// };

// // THIS ADALAH KUNCI
// const saya = {
//   nama: "aziz",
//   pacar: "memed",
//   ngomong: function () {
//     return `Halo nama saya ${this.nama}. Saya punya pacar namanya ${this.pacar}.`;
//   },
// };

// cara panggilnya adalah saya.ngomong()
// namanya juga bisa dirubah pakek saya.nama = "Aziz"

// TRY AND CATCH
// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Silahkan masukkan tipe data string pada argumen teriak()");
//   }
// }
