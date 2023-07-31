var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var btn8 = document.getElementById("btn8")
var btn9 = document.getElementById("btn9")
var btn10 = document.getElementById("btn10")

var image = document.getElementById("image")
var image2 = document.getElementById("image2")
var image3 = document.getElementById("image3")
var image4 = document.getElementById("image4")

var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")
var p4 = document.getElementById("p4")
var p5 = document.getElementById("p5")
var p6 = document.getElementById("p6")
var p7 = document.getElementById("p7")
var p8 = document.getElementById("p8")
var p9 = document.getElementById("p9")
var p10 = document.getElementById("p10")

var textColor = document.querySelector(".text-color")
var textColor2 = document.querySelector(".text-color2")
var textColor3 = document.querySelector(".text-color3")
var textColor4 = document.querySelector(".text-color4")
var textColor5 = document.querySelector(".text-color5")
var textColor6 = document.querySelector(".text-color6")
var textColor7 = document.querySelector(".text-color7")
var textColor8 = document.querySelector(".text-color8")
var textColor9 = document.querySelector(".text-color9")
var textColor10 = document.querySelector(".text-color10")

var strokeColor1 = document.querySelector(".strokeColor1")
var strokeColor2 = document.querySelector(".strokeColor2")
var strokeColor3 = document.querySelector(".strokeColor3")
var strokeColor4 = document.querySelector(".strokeColor4")
var strokeColor5 = document.querySelector(".strokeColor5")
var strokeColor6 = document.querySelector(".strokeColor6")
var strokeColor7 = document.querySelector(".strokeColor7")
var strokeColor8 = document.querySelector(".strokeColor8")
var strokeColor9 = document.querySelector(".strokeColor9")
var strokeColor10 = document.querySelector(".strokeColor10")

window.addEventListener("load", function () {
  p1.classList.remove("hidden")
  btn1.classList.add("bg-color")
  textColor.classList.add("text1")
  strokeColor1.classList.add("stroke")

  p4.classList.remove("hidden")
  btn4.classList.add("bg-color2")
  textColor4.classList.add("text2")
  strokeColor4.classList.add("stroke2")

  p7.classList.remove("hidden")
  btn7.classList.add("bg-color3")
  textColor7.classList.add("text3")
  strokeColor7.classList.add("stroke3")

  p9.classList.remove("hidden")
  btn9.classList.add("bg-color4")
  textColor9.classList.add("text4")
  strokeColor9.classList.add("stroke4")
})

btn1.addEventListener("mouseenter", function () {
  image.src = "/image1.png"

  p1.classList.remove("hidden")
  p2.classList.add("hidden")
  p3.classList.add("hidden")

  btn1.classList.add("bg-color")
  btn2.classList.remove("bg-color")
  btn3.classList.remove("bg-color")

  textColor.classList.add("text1")
  textColor2.classList.remove("text1")
  textColor3.classList.remove("text1")

  strokeColor1.classList.add("stroke")
  strokeColor2.classList.remove("stroke")
  strokeColor3.classList.remove("stroke")
})

btn2.addEventListener("mouseenter", function () {
  image.src =
    "https://raindrop.io/_next/static/images/tags-2112-ed8e6754be9ad4d522394abb39e1e662.png"

  p1.classList.add("hidden")
  p2.classList.remove("hidden")
  p3.classList.add("hidden")

  btn1.classList.remove("bg-color")
  btn2.classList.add("bg-color")
  btn3.classList.remove("bg-color")

  textColor.classList.remove("text1")
  textColor2.classList.add("text1")
  textColor3.classList.remove("text1")

  strokeColor1.classList.remove("stroke")
  strokeColor2.classList.add("stroke")
  strokeColor3.classList.remove("stroke")
})

btn3.addEventListener("mouseenter", function () {
  image.src =
    "/image2.png"

  p1.classList.add("hidden")
  p2.classList.add("hidden")
  p3.classList.remove("hidden")

  btn1.classList.remove("bg-color")
  btn2.classList.remove("bg-color")
  btn3.classList.add("bg-color")

  textColor.classList.remove("text1")
  textColor2.classList.remove("text1")
  textColor3.classList.add("text1")

  strokeColor1.classList.remove("stroke")
  strokeColor2.classList.remove("stroke")
  strokeColor3.classList.add("stroke")
})

btn4.addEventListener("mouseenter", function () {
  image2.src =
    "https://raindrop.io/_next/static/images/view-modes-1296-920d1ee40167a15276283d32c533afca.png"

  p4.classList.remove("hidden")
  p5.classList.add("hidden")
  p6.classList.add("hidden")

  btn4.classList.add("bg-color2")
  btn5.classList.remove("bg-color2")
  btn6.classList.remove("bg-color2")

  textColor4.classList.add("text2")
  textColor5.classList.remove("text2")
  textColor6.classList.remove("text2")

  strokeColor4.classList.add("stroke2")
  strokeColor5.classList.remove("stroke2")
  strokeColor6.classList.remove("stroke2")
})

btn5.addEventListener("mouseenter", function () {
  image2.src =
    "https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Process-Infographic-.png"

  p4.classList.add("hidden")
  p5.classList.remove("hidden")
  p6.classList.add("hidden")

  btn4.classList.remove("bg-color2")
  btn5.classList.add("bg-color2")
  btn6.classList.remove("bg-color2")

  textColor4.classList.remove("text2")
  textColor5.classList.add("text2")
  textColor6.classList.remove("text2")

  strokeColor4.classList.remove("stroke2")
  strokeColor5.classList.add("stroke2")
  strokeColor6.classList.remove("stroke2")
})

btn6.addEventListener("mouseenter", function () {
  image2.src =
    "https://raindrop.io/_next/static/images/backup-1640-4f013f867d9e1988ae5253dbeef9fe82.png"

  p4.classList.add("hidden")
  p5.classList.add("hidden")
  p6.classList.remove("hidden")

  btn4.classList.remove("bg-color2")
  btn5.classList.remove("bg-color2")
  btn6.classList.add("bg-color2")

  textColor4.classList.remove("text2")
  textColor5.classList.remove("text2")
  textColor6.classList.add("text2")

  strokeColor4.classList.remove("stroke2")
  strokeColor5.classList.remove("stroke2")
  strokeColor6.classList.add("stroke2")
})

btn7.addEventListener("mouseenter", function () {
  image3.src =
    "https://help.raindrop.io/assets/images/copy-501fd154b1957cdfacb12ad0ff6da569.jpg"

  p7.classList.remove("hidden")
  p8.classList.add("hidden")

  btn7.classList.add("bg-color3")
  btn8.classList.remove("bg-color3")

  textColor7.classList.add("text3")
  textColor8.classList.remove("text3")

  strokeColor7.classList.add("stroke3")
  strokeColor8.classList.remove("stroke3")
})

btn8.addEventListener("mouseenter", function () {
  image3.src =
    "https://raindrop.io/_next/static/images/backup-1640-4f013f867d9e1988ae5253dbeef9fe82.png"

  p7.classList.add("hidden")
  p8.classList.remove("hidden")

  btn7.classList.remove("bg-color3")
  btn8.classList.add("bg-color3")

  textColor7.classList.remove("text3")
  textColor8.classList.add("text3")

  strokeColor7.classList.remove("stroke3")
  strokeColor8.classList.add("stroke3")
})

btn9.addEventListener("mouseenter", function () {
  image4.src =
    "/Image3.png"

  p9.classList.remove("hidden")
  p10.classList.add("hidden")

  btn9.classList.add("bg-color4")
  btn10.classList.remove("bg-color4")

  textColor9.classList.add("text4")
  textColor10.classList.remove("text4")

  strokeColor9.classList.add("stroke4")
  strokeColor10.classList.remove("stroke4")
})

btn10.addEventListener("mouseenter", function () {
  image4.src =
    "/Image4.png"

  p9.classList.add("hidden")
  p10.classList.remove("hidden")

  btn9.classList.remove("bg-color4")
  btn10.classList.add("bg-color4")

  textColor9.classList.remove("text4")
  textColor10.classList.add("text4")

  strokeColor9.classList.remove("stroke4")
  strokeColor10.classList.add("stroke4")
})