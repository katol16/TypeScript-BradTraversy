console.log('Hello from ts');

//TYPY (variable type):
    // w ten sposób podajemy typ naszego let'a
    // czyli: let nazwaZmiennej : typ;
    let myString: string;
    // Jeśli do powyższego zechcesz wpisać number, np: 1
    // to dostaniesz błąd!

    // Poniższy string też zadziała
    let myString2 = 'Hello'.slice(0,3);

    let myNum: number;

    // To może być cokolwiek
    let myVar: any;

    // Tablice:
        // Musi to być tablica stringów
        let strArr: string[];

        // Musi to być tablica numerów
        let numArr: number[];

        // Musi to być tablica boleeanow
        let boolArr: boolean[];

        // Inna Metoda zapisu tablic:
        let strArr2: Array<string>;
        let numArr2: Array<number>;
        let boolArr2: Array<boolean>;

    // Tuple -> Typ który jest tablicą ze zdefiniowaną ilością elementów
        // Tablica ze stringiem i numerem. Musi odpowiadać dokładnie temu!
        // Czyli nie może być dwóch stringóœ, lub dwóch numerów itd. Musi dokłądnie pasować do tego co jest niżej
        let strNumTuple: [string, number]
        // Dziwne działanie powyzszego przykłądu jest takie, ze jak dasz:
        // strNumTuple = ['Hello', 4, 5, 6]; to zadziałą, to te dwa podane parametry, po prostu muszą się zgadzać

    // Void
        // moze być tylko null lub undefined
        let myVoid: void;
        myVoid = null;

        // mozemy też od razu przypisać
        let myVoid2: void = undefined;

    // Null - tylko null
        let myNull: null = null;

    // undefined - tylko null
        let myUndefined: undefined = undefined;


    myString = 'Hello world';
    myNum = 22;
    myVar = "cokolwiek";
    strArr = ['chuj','kurwa'];
    strArr2 = ['chuj','kurwa'];
    numArr = [1,2,3];
    numArr2 = [1,2,3];
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
// nie bedziesz musial ciągle tworzyc pliku .js z .ts