var son1 =+prompt("Birinchi sonni kiriting:");
var son2 =+prompt("Ikkinchi sonni kiriting:");
var son3 =+prompt("Uchinchi sonni kiriting:");
var javob;
if (son1 <= son2 && son2 <= son3) {
    javob = son2;
} else if (son2 <= son1 && son1 <= son3) {
    javob = son1;
} else {
    javob = son3;
}

alert("Orta qiymat:"+javob)
