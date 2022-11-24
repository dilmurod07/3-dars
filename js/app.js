var sana = prompt("tugilgan yilingizni kiriting");

//console.log(now / 1000 / 60 / 60);

//console.log(now / 1000 / 60 / 60 / 24);
//console.log(now / 1000 / 60 / 60 / 24 / 365.25);

//let maxsus = new Date(sana).getTime();
//let now = new Date().getTime;
//alert("yosh:" + (now - maxsus) / 1000 / 60 / 60 / 24 / 365.25);
//alert("kun:" + (now - maxsus) / 1000 / 60 / 60 / 24);
//alert("soat: " + (now - maxsus) / 1000 / 60 / 60);

let vaqt = new Date(sana).getTime();
let now = new Date().getTime();
alert(
  "Sizning yoshingiz: " +
    Math.floor((now - vaqt) / 1000 / 3600 / 24 / 365.25) +
    "\n" +
    "kun:" +
    Math.floor(
      ((now - vaqt) / 1000 / 3600 / 24 / 365.25 -
        Math.floor((now - vaqt) / 1000 / 3600 / 24 / 365.25)) *
        365.25
    ) +
    "\n" +
    "soat:" +
    Math.floor(
      (((now - vaqt) / 1000 / 3600 / 24 / 365.25 -
        Math.floor((now - vaqt) / 1000 / 3600 / 24 / 365.25)) *
        365.25 -
        Math.floor(
          ((now - vaqt) / 1000 / 3600 / 24 / 365.25 -
            Math.floor((now - vaqt) / 1000 / 3600 / 24 / 365.25)) *
            365.25
        )) *
        24
    )
);
