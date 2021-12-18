var mobils = [];
var balloons = [];
var total = 12;
var font;
var foto, bgStatic;
let txt = "";
let name = "";
var sfxPop;
var hari = "";

function preload() {
    foto = loadImage("assets/img/foto.jpg");
    bgStatic = loadImage("assets/img/oi.jpg");
    font = loadFont("assets/font/FredokaOne.ttf");
    sfxPop = loadSound("assets/sfx/pop.mp3");
}



function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < total; i++) {
        balloons.push(new Ballon());
    }
}

function draw() {
    background(114, 51, 153);

    image(bgStatic, 0, 0, width, height);

    push();
    var imgX = width / 2;
    var imgY = height / 2;
    // foto
    translate(imgX + (-mouseX + width / 2) / 30, imgY + (-mouseY + height / 2) / 30);
    imageMode(CENTER);
    image(foto, 0, 0, 200, 200);
    // frame
    noFill();
    stroke(250, 150);
    strokeWeight(10);
    ellipse(0, 0, 210, 210);
    pop();

    // name
    push();
    fill(255);
    stroke(45, 28, 82);
    strokeWeight(7);
    textFont(font);
    textSize(30);
    textAlign(CENTER);
    // Mengatur waktu akhir perhitungan mundur
    var countDownDate = new Date("Dec 20, 2021 00:00:00").getTime();

    // Memperbarui hitungan mundur setiap 1 detik
    var x = setInterval(function () {

        // Untuk mendapatkan tanggal dan waktu hari ini
        var now = new Date().getTime();

        // Temukan jarak antara sekarang dan tanggal hitung mundur
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(x);
            name = "Sulusiyah";
            txt = "HAPPY BIRTHDAY"
        }
    }, 1000);
    // name
    text(name, imgX + (mouseX - width / 2) / 30, imgY + 200 + (mouseY - height / 2) / 30);
    // teks hbd
    text(txt, imgX + (mouseX - width / 2) / 30, imgY - 150 + (mouseY - height / 2) / 30);
    pop();

    // balloons
    for (let i = 0; i < balloons.length; i++) {
        balloons[i].show();
        balloons[i].up();
        balloons[i].checkEdge()
        if (balloons[i].mouseHover()) {
            sfxPop.play();
            balloons.splice(i, 1);
        }
    }

    if (balloons.length < 3) {
        for (let i = 0; i < total; i++) {
            balloons.push(new Ballon());
        }
    }
}

function keyPressed() {
    if (key === 'z' || key === 'Z') {
        for (let i = 0; i < total; i++) {
            balloons.push(new Ballon());
        }
    }
}