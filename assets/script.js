//const canvas=document.getElementById("canvas");
var qrdata = document.getElementById("qr-data");
var qr = document.getElementById("qr");
var data = document.getElementById("data");
var qrdat = document.getElementById("qrdata");

let qr_code = document.querySelector(".gbutton");
//const download=document.getElementById("down");
//Qrcode.toCanvas(canvas,'qr code generator',(err)=>{
//  console.log(err);
//})

let code_img = document.querySelector("#defaultimg");
// let d_img=document.querySelector("#abc");

qr_code.addEventListener("click", () => {
  var data;
  if (qrdata.value.trim() != "") {
    data = qrdata.value;
  } else if (d.value.trim() != "") {
    data = d.value;
  } else if (a.value.trim() != "") {
    data = a.value;
  } else if (t.value.trim() != "") {
    data = t.value;
  }

  // alert("QR code generated")
  let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data} `;
  code_img.src = api;
});
function ShowHideDiv(data) {
  var input = document.getElementById("input");
  input.style.display = data.value == "TEXT" ? "block" : "none";
  var c = document.getElementById("c");
  c.style.display = data.value == "CONTACT" ? "block" : "none";
  var p = document.getElementById("p");
  p.style.display = data.value == "PHONE" ? "block" : "none";
  var u = document.getElementById("u");
  u.style.display = data.value == "URL" ? "block" : "none";
}