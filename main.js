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
  console.log("Бодлого1: ", "above 25");
} else if (myAge < 25) {
  console.log("Бодлого1: ", "below 25");
} else {
  console.log("Бодлого1: ", "equal 25");
}

// bodlogo2

let n = 11;
if (n % 2 == 0) {
  console.log("Бодлого2: ", "it's even number");
} else {
  console.log("Бодлого2: ", "it's odd number");
}

//bodlogo3

let a3 = 12;
let b3 = 45;
let c3 = 30;
if (a3 >= b3 && a3 >= c3) {
  console.log("Бодлого3: ", a3);
} else if (b3 >= a3 && b3 >= c3) {
  console.log("Бодлого3: ", b3);
} else {
  console.log("Бодлого3: ", c3);
}

//bodlogo4

let a4 = 12;
let b4 = 45;
let c4 = 30;
if (a4 <= b4 && a4 <= c4) {
  console.log("Бодлого4: ", a4);
} else if (b4 <= a4 && b4 <= c4) {
  console.log("Бодлого4: ", b4);
} else {
  console.log("Бодлого4: ", c4);
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

console.log("Бодлого5: ", seasonName);

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
console.log("Бодлого6: ", a6check + b6check + c6check + d6check);

let a6_2 = 85;
let b6_2 = 75;
let c6_2 = 96;
let d6_2 = 69;
let sum = 0;
if (a6 > 80) {
  sum += a6_2;
}
if (b6 > 80) {
  sum = sum + b6_2;
}
if (c6 > 80) {
  sum = sum + c6_2;
}
if (d6 > 80) {
  sum = sum + d6_2;
}

console.log("Бодлого6 багшаас: ", sum);

//bodlogo7

let a7 = 3;
let b7 = 7;
let c7 = 2;
let d7 = 4;
let a7check;
let b7check;
let c7check;
let d7check;
if (a7 < 5) {
  a7check = a7;
} else {
  a7check = 1;
}
if (b7 < 5) {
  b7check = b7;
} else {
  b7check = 1;
}
if (c7 < 5) {
  c7check = c7;
} else {
  c7check = 1;
}
if (d7 < 5) {
  d7check = d7;
} else {
  d7check = 1;
}
console.log("Бодлого7: ", a7check * b7check * c7check * d7check);

// bodlogo8

let bat = 67;
let ochir = 59;

if (bat < 60) {
  console.log("Бодлого8: ", "Бат", "-", bat, "-", "Маш муу");
} else if (bat >= 60 && bat < 70) {
  console.log("Бодлого8: ", "Бат", "-", bat, "-", "Хангалттай");
} else if (bat >= 70 && bat < 80) {
  console.log("Бодлого8: ", "Бат", "-", bat, "-", "Дунд");
} else if (bat >= 80 && bat < 90) {
  console.log("Бодлого8: ", "Бат", "-", bat, "-", "Сайн");
} else {
  console.log("Бодлого8: ", "Бат", "-", bat, "-", "Маш сайн");
}
if (ochir < 60) {
  console.log("Бодлого8: ", "Очир", "-", ochir, "-", "Маш муу");
} else if (ochir >= 60 && ochir < 70) {
  console.log("Бодлого8: ", "Очир", "-", ochir, "-", "Хангалттай");
} else if (ochir >= 70 && ochir < 80) {
  console.log("Бодлого8: ", "Очир", "-", ochir, "-", "Дунд");
} else if (ochir >= 80 && ochir < 90) {
  console.log("Бодлого8: ", "Очир", "-", ochir, "-", "Сайн");
} else {
  console.log("Бодлого8: ", "Очир", "-", ochir, "-", "Маш сайн");
}

// bodlogo9

let a9 = 120;
let b9 = 33;
let c9 = 10;
let d9 = 12;
if (a9 <= b9 && a9 <= c9 && a9 <= d9) {
  console.log("Бодлого9: ", a9);
} else if (b9 <= a9 && b9 <= c9 && b9 <= d9) {
  console.log("Бодлого9: ", b9);
} else if (c9 <= a9 && c9 <= b9 && c9 <= d9) {
  console.log("Бодлого9: ", c9);
} else {
  console.log("Бодлого9: ", d9);
}

// bodlogo10

let aBag1 = 96;
let aBag2 = 108;
let aBag3 = 89;
let bBag1 = 88;
let bBag2 = 91;
let bBag3 = 110;
if ((aBag1 + aBag2 + aBag3) / 3 < 100 && (bBag1 + bBag2 + bBag3) / 3 < 100) {
  console.log("Бодлого10: ", "Ялагч байхгүй");
} else if ((aBag1 + aBag2 + aBag3) / 3 > (bBag1 + bBag2 + bBag3) / 3) {
  console.log("Бодлого10: ", "А баг түрүүлсэн");
} else if ((aBag1 + aBag2 + aBag3) / 3 < (bBag1 + bBag2 + bBag3) / 3) {
  console.log("Бодлого10: ", "Б баг түрүүлсэн");
} else {
  console.log("Бодлого10: ", "Багууд тэнцсэн");
}

// bodlogo11

let heigh = 130;
let age = 10;
let hasAdult = true;

if ((heigh > 140 && age >= 10) || hasAdult == true) {
  console.log("Бодлого11: ", "Дугуй унаж болно");
} else {
  console.log("Бодлого11: ", "Дугуй унаж болохгүй");
}

// bodlogo12

let a12 = 7;
let b12 = 22;
let c12 = 13;
let d12 = 30;
let a12check;
let b12check;
let c12check;
let d12check;
if (a12 % 11 != 0) {
  a12check = a12;
} else {
  a12check = 0;
}
if (b12 % 11 != 0) {
  b12check = b12;
} else {
  b12check = 0;
}
if (c12 % 11 != 0) {
  c12check = c12;
} else {
  c12check = 0;
}
if (d12 % 11 != 0) {
  d12check = d12;
} else {
  d12check = 0;
}
console.log("Бодлого12: ", a12check + b12check + c12check + d12check);
