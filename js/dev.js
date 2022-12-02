
// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.clear();
console.log('=====1=====');

function compare(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
    } return 'a lygu b';
}
console.log(compare(10, 1));

// // 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)
console.log('=====2=====');
let i = 0;
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)
console.log('=====3=====');
let a = 0;
for (let a = 0; a < 11; a = a + 2) {
    console.log(a);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('=====4=====');
const rand = (x, y) => Math.floor(Math.random() * (y - x + 1) + x);

for (let i = 0; i < 5; i++) {
    skaicius = rand(1, 10);
    console.log(skaicius);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
console.log('=====5=====');
while (true) {
    x = rand(1, 10);
    console.log(x);
    if (x === 5) {
        break;
    }
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('=====6=====');

let masyvas = [];
const masyvoIlgis = Math.floor(Math.floor(Math.random() * (31 - 20) + 20));

for (let i = 0; i < masyvoIlgis; i++) {
    masyvas.push(Math.floor(Math.random() * (31 - 10) + 10))
}
console.log(masyvas);

let maxNumber = 0;
for (let number of masyvas) {
    if (number > maxNumber) {
        maxNumber = number;
    }
}
console.log(maxNumber);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('=====7=====');

let masyvasRaides = [];

for (let i = 0; i < 101; i++) {
    masyvasRaides.push(Math.floor(Math.random() * (31 - 10) + 10))
}
console.log(masyvas);


// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą
// jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. 
// (10 taškų)
console.log('=====8=====');

function lygineSuma(n, m) {
    if ((typeof n === 'number' && typeof m === 'number') && ((n + m) % 2 === 0))
        return n + m; {
        if ((typeof n === 'number' && typeof m === 'number') && ((n + m) % 2 !== 0))
            return 'skaiciu suma nelygine'; {
            if ((Array.isArray(n) === true && Array.isArray(m) === true) && ((n.length + m.length)) % 2 === 0)
                return (n.length + m.length); {
                if ((Array.isArray(n) === true && Array.isArray(m) === true) && ((n.length + m.length) % 2 !== 0))
                    return ('masyvo ilgiu suma nelygine');
            }
        }
    }
}
console.log(lygineSuma(2, 4)); //abu skaiciai - suma lygine - logina suma
console.log(lygineSuma(2, 3)); // abu skaiciai - suma nelygine - logina teksta 'suma nelygine'
console.log(lygineSuma([1, 2, 3], [5, 10, 2, 6, 8])); // abu masyvai - ilgiu suma lygine - logina masyvu ilgiu suma
console.log(lygineSuma([1, 2, 3], [5, 10])); // abu masyvai - ilgiu suma nelygine - logina 'masyvo ilgiu suma nelygine'


// 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)
// Pirminis skaičius – bet kuris natūralusis skaičius, didesnis nei 1, kuris dalinasi tik iš savęs ir vieneto.Vienetas nelaikomas pirminiu skaičiumi
console.log('=====9=====');

function pirminisSkaicius(k) {
    let count = 0;
    for (let i = 2; i < k; i++) {
        if (k % i === 0) {
            count++;
        } if (count === 0) {
            return 'pirminis';
        }
        else {
            return 'nera pirminis'
        }
    }
}

console.log((pirminisSkaicius(13))); //pirminis
console.log((pirminisSkaicius(10))); //nera pirminis


//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
console.log('=====10=====');


let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * (10 - 1) + 1))
}
console.log(arr);

function telefonoNumeris() {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

console.log(telefonoNumeris(arr));




