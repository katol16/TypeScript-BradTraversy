console.log('Hello from ts');
//TYPY:
// w ten sposób podajemy typ naszego let'a
// czyli: let nazwaZmiennej : typ;
var myString;
// Jeśli do powyższego zechcesz wpisać number, np: 1
// to dostaniesz błąd!
// Poniższy string też zadziała
var myString2 = 'Hello'.slice(0, 3);
var myNum;
// To może być cokolwiek
var myVar;
// Tablice:
// Musi to być tablica stringów
var strArr;
// Musi to być tablica numerów
var numArr;
// Musi to być tablica boleeanow
var boolArr;
// Inna Metoda zapisu tablic:
var strArr2;
var numArr2;
var boolArr2;
// Tuple -> Typ który jest tablicą ze zdefiniowaną ilością elementów
// Tablica ze stringiem i numerem. Musi odpowiadać dokładnie temu!
// Czyli nie może być dwóch stringóœ, lub dwóch numerów itd. Musi dokłądnie pasować do tego co jest niżej
var strNumTuple;
// Dziwne działanie powyzszego przykłądu jest takie, ze jak dasz:
// strNumTuple = ['Hello', 4, 5, 6]; to zadziałą, to te dwa podane parametry, po prostu muszą się zgadzać
// Void
// moze być tylko null lub undefined
var myVoid;
myVoid = null;
// mozemy też od razu przypisać
var myVoid2 = undefined;
// Null - tylko null
var myNull = null;
// undefined - tylko null
var myUndefined = undefined;
myString = 'Hello world';
myNum = 22;
myVar = "cokolwiek";
strArr = ['chuj', 'kurwa'];
strArr2 = ['chuj', 'kurwa'];
numArr = [1, 2, 3];
numArr2 = [1, 2, 3];
boolArr = [true, false];
boolArr2 = [true, false];
strNumTuple = ['Hello', 4];
console.log(myString);
console.log(myString2);
console.log(myNum);
console.log(myVar);
console.log(strArr);
console.log(strArr2);
console.log(numArr);
console.log(numArr2);
console.log(boolArr);
console.log(boolArr2);
console.log(strNumTuple);
console.log(myVoid);
console.log(myVoid2);
console.log(myNull);
console.log(myUndefined);
// W consoli wpisz: tsc types.ts -w
// nie edziesz musial ciągle tworzyc pliku .js z .ts
