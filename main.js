// prompt("Та 1-7 хооронд тоо сонгож оруулна уу!!!");

let weeknumber = Number(prompt("Та 1-7 хооронд тоо сонгож оруулна уу!!!"));
let garigiinNer;

if (weeknumber === 1) {
  //   console.log("Даваа");
  garigiinNer = "Даваа";
} else if (weeknumber === 2) {
  //   console.log("Мягмар");
  garigiinNer = "Мягмар";
} else if (weeknumber === 3) {
  //   console.log("Лхагва");
  garigiinNer = "Лхагва";
} else if (weeknumber === 4) {
  //   console.log("Пүрэв");
  garigiinNer = "Пүрэв";
} else if (weeknumber === 5) {
  //   console.log("Баасан");
  garigiinNer = "Баасан";
} else if (weeknumber === 6) {
  //   console.log("Бямба");
  garigiinNer = "Бямба";
} else if (weeknumber === 7) {
  //   console.log("Ням");
  garigiinNer = "Ням";
} else {
  //   console.log("Таны оруулсан тоонд тохирох гаригийн нэр олдсонгүй");
  garigiinNer = "Олдсонгүй";
}

console.log("Таны оруулсан тоо: ", weeknumber);
console.log("Таны оруулсан тоонд тохирох утга: ", garigiinNer);
