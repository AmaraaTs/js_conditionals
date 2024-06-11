// // // prompt("Та 1-7 хооронд тоо сонгож оруулна уу!!!");

// let weeknumber = Number(prompt("Та 1-7 хооронд тоо сонгож оруулна уу!!!"));
// let garigiinNer;

// // if (weeknumber === 1) {
// //   //   console.log("Даваа");
// //   garigiinNer = "Даваа";
// // } else if (weeknumber === 2) {
// //   //   console.log("Мягмар");
// //   garigiinNer = "Мягмар";
// // } else if (weeknumber === 3) {
// //   //   console.log("Лхагва");
// //   garigiinNer = "Лхагва";
// // } else if (weeknumber === 4) {
// //   //   console.log("Пүрэв");
// //   garigiinNer = "Пүрэв";
// // } else if (weeknumber === 5) {
// //   //   console.log("Баасан");
// //   garigiinNer = "Баасан";
// // } else if (weeknumber === 6) {
// //   //   console.log("Бямба");
// //   garigiinNer = "Бямба";
// // } else if (weeknumber === 7) {
// //   //   console.log("Ням");
// //   garigiinNer = "Ням";
// // } else {
// //   //   console.log("Таны оруулсан тоонд тохирох гаригийн нэр олдсонгүй");
// //   garigiinNer = "Олдсонгүй";
// // }

// // console.log("Таны оруулсан тоо: ", weeknumber);
// // console.log("Таны оруулсан тоонд тохирох утга: ", garigiinNer);

// // let age = 20;
// // let gender = "er";

// // if (age >= 18 && gender === "er") {
// //   console.log("та насанд хүрсэн эрэгтэй байна");
// // } else {
// //   console.log("та насанд хүрээгүй эсвэл эмэгтэй байна");
// // }

// // if (age >= 18 || gender === "er") {
// //   console.log("та насанд хүрсэн эсвэл эрэгтэй байна");
// // } else {
// //   console.log("та насанд хүрээгүй эмэгтэй байна");
// // }

// switch (weeknumber) {
//   case 1: {
//     garigiinNer = "Даваа";
//     break;
//   }
//   case 2: {
//     garigiinNer = "Мягмар";
//     break;
//   }
//   case 3: {
//     garigiinNer = "Лхагва";
//     break;
//   }
//   case 4: {
//     garigiinNer = "Пүрэв";
//     break;
//   }
//   case 5: {
//     garigiinNer = "Баасан";
//     break;
//   }
//   case 6: {
//     garigiinNer = "Бямба";
//     break;
//   }
//   case 7: {
//     garigiinNer = "Ням";
//     break;
//   }
//   default: {
//     garigiinNer = "олдсонгүй";
//   }
// }

// console.log("Tanii oruulsan too: ", weeknumber);
// console.log("Tanii oruulsan toond tohiroh utga: ", garigiinNer);

// Vnen = True = 1
// Hudal = False = 0

// BODLOGO

// bodlogo1

let myAge = 20;
if (myAge > 25) {
  console.log("above 25");
} else if (myAge < 25) {
  console.log("below 25");
} else {
  console.log("equal 25");
}

// bodlogo2

let n = 11;
if (n % 2 == 0) {
  console.log("it's even number");
} else {
  console.log("it's odd number");
}

//bodlogo3

let a3 = 12;
let b3 = 45;
let c3 = 30;
if (a3 >= b3 && a3 >= c3) {
  console.log(a3);
} else if (b3 >= a3 && b3 >= c3) {
  console.log(b3);
} else {
  console.log(c3);
}

//bodlogo4

let a4 = 12;
let b4 = 45;
let c4 = 30;
if (a4 <= b4 && a4 <= c4) {
  console.log(a4);
} else if (b4 <= a4 && b4 <= c4) {
  console.log(b4);
} else {
  console.log(c4);
}

//bodlogo5

let monthNumber = 9;
let seasonName;
switch (monthNumber) {
  case 2:
  case 3:
  case 4: {
    seasonName = "Spring";
    break;
  }
  case 5:
  case 6:
  case 7: {
    seasonName = "Summer";
    break;
  }
  case 8:
  case 9:
  case 10: {
    seasonName = "Fall";
    break;
  }
  case 11:
  case 12:
  case 1: {
    seasonName = "Winter";
    break;
  }
  default: {
    seasonName = "Not season";
  }
}

console.log("Season: ", seasonName);

// bodlogo6

let a6 = 85;
let b6 = 75;
let c6 = 96;
let d6 = 69;
let a6check;
let b6check;
let c6check;
let d6check;
if (a6 > 80) {
  a6check = a6;
} else {
  a6check = 0;
}
if (b6 > 80) {
  b6check = b6;
} else {
  b6check = 0;
}
if (c6 > 80) {
  c6check = c6;
} else {
  c6check = 0;
}
if (d6 > 80) {
  d6check = d6;
} else {
  d6check = 0;
}
console.log(
  "80-с их тоонуудын нийлбэр: ",
  a6check + b6check + c6check + d6check
);
