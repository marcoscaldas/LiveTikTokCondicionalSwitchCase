// escopo global
let a = 5;
var b = 10;
const c = 20;

        var k = 5;
        if(k == 5){
            // escopo local
            let a = 4;
            var b = 1;
            const c  = 50;
            console.log('let'  , a);
            console.log('var'  , b);
            console.log('const', c);
        }

console.log('let'  , a);
console.log('var'  , b);
console.log('const', c);

a = 1000;
console.log('let'  , a);

