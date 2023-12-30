// for (let i = 1; i <= 10; i++) {
//   console.log("saya ganteng");
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i -= 5) {
//   console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10) {
//   console.log(i);
// }

// const animals = ["lion", "snake", "pig", "cow"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i + 1, animals[i]);
// }

// nested loop
// const pilihan = "abcd";

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}: `);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`   ${pilihan[j]}. Pilihan jawaban`);
//   }
// }

// MEMANGGIL DATA DI NESTED LOOP
// const studentRow = [
//   ["Oliv", "Nab", "Ivan", "Bagong"],
//   ["Diki", "Cici", "Dita", "Jigo"],
//   ["Kaka", "Jojo", "Bebe", "Lala"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }

// for (let row of studentRow) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// WHILE LOOP
// let num = 0;
// while (num < 10) {
//   console.log(num), num++;
// }

// const PASSWORD = "Pass123";

// let guess = prompt("Enter the password");
// while (guess !== PASSWORD) {
//   guess = prompt("enter the password");
// }
// alert("congrats! the password is correct");

// // BREAK di while
// let input = prompt("Hei, say something!");

// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }

// alert("OK");

// BREAK DI FOR
// for (let i = 0; i <= 10000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }
