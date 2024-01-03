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

// FOREACH
// dapat menggunakan callback function yang berarti dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (n) {
//   console.log(n * n);
// });

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //bukan di bawah ini
// // function print(element) {
// //   console.log(element);
// // }

// // // print(angka[0]);
// // // print(angka[1]);
// // angka.forEach(print);

// //callback function
// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//   },
//   {
//     title: "One Peace",
//     rating: 99,
//   },
//   {
//     title: "Bleach",
//     rating: 89,
//   },
//   {
//     title: "Naruto",
//     rating: 99,
//   },
// ];

// animes.forEach(function (anime) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

// MAP METHOD
// map nilai baliknya adalah array baru yang sudah dimodifikasi melalui callbak function dari suatu array
// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//   },
//   {
//     title: "One Peace",
//     rating: 99,
//   },
//   {
//     title: "Bleach",
//     rating: 89,
//   },
//   {
//     title: "Naruto",
//     rating: 99,
//   },
// ];

// const animeList = animes.map(function (anime) {
//   return anime.title.toUpperCase();
// });

// ARRRAW FUNCTION
// function perpangkatan(x) {
//   return x * x;
// }

// const hasil = perpangkatan(5);

//function expression
// const hasil = function(x) {
//     return x*x;
// }

//ini baru arrow
// const perpangkatan = (x) => {
//   return x * x;
// };

// const random = () => {
//   return Math.floor(Math.random() * 1000);
// };

// implisit return arow functiom
// tidak perlu nmenggunakan return jika fungsi tersebut sederhana, ubah kurung kurawal jadi kurung biasa, gaperlu titik koma
// const random = () => (
//   Math.floor(Math.random() * 1000)
// );

// kalo banyak akan eror, js akan bingung karena pakek kurng biasa dan binung mana yang di return
// const random = () => (
//     let value = 0123
//     Math.floor(Math.random() * 1000)
//   );
// kalo ini ngagk pakek kurung juga gapapa sebenernya, tapi terlalu panjang lebih baik dipakek kurung

// singkat lagi
// const add = (a,b) => a+b;

//SET TIMEOUT DAN SET INTERVAL
//callback function yang bukan berasa; dari array. FUngsinya untuk memberi waktu jeda dan melakukan perulangan setiap waktu yang ditentukan.
// console.log("Halooo meltonggg");
// setTimeout(() => {
//   console.log("Lamaa banget 5 detik nggak dibales-baless");
// }, 5000);
// console.log("mandii dulu minimal..");

// akan berjalan terus
// setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// biar berhenti
// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);
// tanpa dipanggil variable interval akan tetap tereksekusi dan cara berhentinya pakek clearInterval(interval)

// FILTER
// suatu fungction yang akan mengembaliukan nilai array lagi yang sudah dimanipulasi sesuai denga kriteria yang ditetapkan
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const ganjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//     year: 2013,
//   },
//   {
//     title: "One Peace",
//     rating: 99,
//     year: 2000,
//   },
//   {
//     title: "Bleach",
//     rating: 89,
//     year: 2012,
//   },
//   {
//     title: "Naruto",
//     rating: 99,
//     year: 2002,
//   },
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 90);
// // bisa pakek map
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// // bisa juga jadi 1 sintak, tapi kalo mau eksekusi harus di copy dan paste di browser karn anggak disimpan
// animes.filter((anime) => anime.rating >= 90).map((anime) => anime.title);
// //bisa disimpan di variabel
// const judulAnimeBagusBaru = animes
//   .filter((anime) => anime.rating >= 90)
//   .map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.rating < 90);
// const animeLama = animes.filter((anime) => anime.year < 2010);

// MENENTUKAN BENAR ATAU SALAH PADA ARRAY DENGAN EVERY DAN SOME METHOID
//everyy akan mengembalikan nilai boolean. true [ada saat seluruh nilai yang ada pada suatu array memiliki kriteria yang sama. false jika sebaliknya.
// const kataKataEvery = ["kita", "kamu", "saya"];
// kata.every((kata) => {
//   return kata.length === 4;
// });
//some
//mirip dengan every, tapi lebih fleksibel. hasilnya akan true jika salah isi dari array memiliki kriteria yang sama. akan false jika sama sekali tidak ada yang sesuai kriteria
// const kataKataSome = ["kita", "kamu", "saya", "aku"];
// kataKataSome.some((kataa) => {
//   return kataa.length === 4;
// });
// every, salah satu nilai kiurang dari 75 maka akan false
// const examScore = [80, 85, 75, 90, 94, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// some, satu salah maka akan tetap true
// const examScore = [80, 85, 70, 90, 94, 77];
// const isGraduate = examScore.some((score) => score >= 75);

// some, satu benar maka akan tetap true
// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//     year: 2013,
//   },
//   {
//     title: "One Peace",
//     rating: 99,
//     year: 2000,
//   },
//   {
//     title: "Bleach",
//     rating: 89,
//     year: 2012,
//   },
//   {
//     title: "Naruto",
//     rating: 99,
//     year: 2002,
//   },
//   {
//     title: "Hunter x Hunter",
//     rating: 87,
//     year: 2015,
//   },
// ];

// const isAnimeListNew = animes.some((anime) => anime.year > 2020);
// // kalo diubah jadi 2020 maka akan false

// MENDAPATKAN SATU NILAI SESUAI KONDISI DARI SEBUAH ARRAY DENGAN REDUCE
// REDUCE melakukan proses sebanyak element milik suatu array. Nilai baliknya adalah single value
// const subtotal = [1500, 20000, 4000, 19000, 32000];
// const total = subtotal.reduce((curretTotal, singleSubtotal) => {
//   return curretTotal + singleSubtotal;
// });

// const examScore = [80, 75, 56, 78, 90, 89, 85];
// let total = 0;
// for (let score of examScore) {
//   total += score;
// }

// implementasi reduce
// const examScore = [80, 75, 56, 78, 90, 89, 85];
// const total = examScore.reduce((total, score) => {
//   return total + score;
// });

// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//     year: 2013,
//   },
//   {
//     title: "One Peace",
//     rating: 91,
//     year: 2000,
//   },
//   {
//     title: "Bleach",
//     rating: 89,
//     year: 2012,
//   },
//   {
//     title: "Naruto",
//     rating: 97,
//     year: 2002,
//   },
//   {
//     title: "Hunter x Hunter",
//     rating: 87,
//     year: 2015,
//   },
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//   if (currAnime.rating > bestAnime.rating) {
//     return currAnime;
//   }
//   return bestAnime;
// });

// kalo pengen tau prosesnya di console.log
// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//   console.log(bestAnime, currAnime);
//   if (currAnime.rating > bestAnime.rating) {
//     return currAnime;
//   }
//   return bestAnime;
// });

// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//   console.log(lowAnime, currAnime);
//   if (currAnime.rating < lowAnime.rating) {
//     return currAnime;
//   }
//   return lowAnime;
// });

// OBEJCT THIS DI DALAM ARROW FUNCTION MENGARAH PADA OBJECT GLOBAL WINDOW
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// panggilnya person.fullname()
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// maka outputnya undefined undefined karena objeknya mengarah ke window
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: () => {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
//   panggilNanti: function () {
//     setTimeout(function () {
//       console.log(this.firstName);
//     }, 3000);
//     // maka akan undefined juga karena kalo console this maka objej adanya di global window
//   },
// };
