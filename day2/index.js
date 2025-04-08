// function sapa(nama){
//     return nama;
// }

// console.log(sapa('harsya'))

// const person ={
//     name: 'harsya',
//     age: '22',
//     kopi: function (nama){
//             return nama;
//         }
// };

// console.log(person.kopi('harsya'))

// let solat = 3;
// if(solat < 0){
//     console.log('kafir');
// }else if(solat <= 3){
//     console.log('amatir')
// }else{
//     console.log('beriman')
// }

let fruits = ['jeruk', 'mangga', 'pisang', 'anggur'];
// fruits.forEach((e)=>{
//     console.log(e)
// })

// let i = 0;
// while (i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }


const palindrome = 'kasur rusak'
const arrpal = palindrome.split('')
// console.log(arrpal)

// for(let i=0; i<arrpal.length ; i++){
//     if(arrpal[i] == arrpal[arrpal.length-i-1]){
//         console.log('palindrome')
//     }else{
//         console.log('bukan palindrome')
//     }
// }

// let fruitss = [['jeruk', 'mangga', 'pisang', 'anggur']];
// for(let i=0; i<fruitss.length; i++){
//     for(let j=0; j<fruitss[i].length; j++){
//         console.log(fruitss[i][j], fruitss[i][j].length)
//     }
// }


let alat = {
    'sapu': 'sapu',
    'pel': 'pel',
    'raga': 'barbel'
}

let result= {
    alat : [],
    raga : []
}

result.alat.push(alat.sapu)
console.log(result)