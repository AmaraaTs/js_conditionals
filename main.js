// // prompt("Та 1-7 хооронд тоо сонгож оруулна уу!!!");

let weeknumber = Number(prompt("Та 1-7 хооронд тоо сонгож оруулна уу!!!"));
let garigiinNer;

// if (weeknumber === 1) {
//   //   console.log("Даваа");
//   garigiinNer = "Даваа";
// } else if (weeknumber === 2) {
//   //   console.log("Мягмар");
//   garigiinNer = "Мягмар";
// } else if (weeknumber === 3) {
//   //   console.log("Лхагва");
//   garigiinNer = "Лхагва";
// } else if (weeknumber === 4) {
//   //   console.log("Пүрэв");
//   garigiinNer = "Пүрэв";
// } else if (weeknumber === 5) {
//   //   console.log("Баасан");
//   garigiinNer = "Баасан";
// } else if (weeknumber === 6) {
//   //   console.log("Бямба");
//   garigiinNer = "Бямба";
// } else if (weeknumber === 7) {
//   //   console.log("Ням");
//   garigiinNer = "Ням";
// } else {
//   //   console.log("Таны оруулсан тоонд тохирох гаригийн нэр олдсонгүй");
//   garigiinNer = "Олдсонгүй";
// }

// console.log("Таны оруулсан тоо: ", weeknumber);
// console.log("Таны оруулсан тоонд тохирох утга: ", garigiinNer);

// let age = 20;
// let gender = "er";

// if (age >= 18 && gender === "er") {
//   console.log("та насанд хүрсэн эрэгтэй байна");
// } else {
//   console.log("та насанд хүрээгүй эсвэл эмэгтэй байна");
// }

// if (age >= 18 || gender === "er") {
//   console.log("та насанд хүрсэн эсвэл эрэгтэй байна");
// } else {
//   console.log("та насанд хүрээгүй эмэгтэй байна");
// }

switch (weeknumber) {
  case 1: {
    garigiinNer = "Даваа";
    break;
  }
  case 2: {
    garigiinNer = "Мягмар";
    break;
  }
  case 3: {
    garigiinNer = "Лхагва";
    break;
  }
  case 4: {
    garigiinNer = "Пүрэв";
    break;
  }
  case 5: {
    garigiinNer = "Баасан";
    break;
  }
  case 6: {
    garigiinNer = "Бямба";
    break;
  }
  case 7: {
    garigiinNer = "Ням";
    break;
  }
  default: {
    garigiinNer = "олдсонгүй";
  }
}

console.log("Tanii oruulsan too: ", weeknumber);
console.log("Tanii oruulsan toond tohiroh utga: ", garigiinNer);

// Vnen = True = 1
// Hudal = False = 0
