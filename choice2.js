import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const isTailSum = (number, sumResult) => {
    const checkNan = number.find(n => isNaN(n));
    //console.log('checkNaN: ', typeof checkNan, checkNan);
    if(typeof checkNan!=="undefined" 
        || isNaN(sumResult)
        || number.length<2){
        return 0;
    }
    let sum = 0, count=0;
    for(let i=number.length-1;i>=0;i--){
        ++count;
        console.log(number[i]);
        sum += number[i];
        if(sum===sumResult){
            return count;
        }else if(sum>sumResult){
            return 0;
        }
    }
}

const rl = readline.createInterface({ input, output });
const getInput = async(text)=>{
    return new Promise((resolve, reject) => {
       rl.question(text, resolve); 
    });
}

const inputNum = await getInput('please insert number: ');
const numberArr = inputNum.split(" ").map(x => parseInt(x));
console.log('inputNum: ', numberArr);
const inputSumResult = await getInput("please insert sum result (k) : ");
const sumResult = parseInt(inputSumResult);
console.log('sumresult: ', sumResult);
console.log('isTailSum: ', isTailSum(numberArr, sumResult));
rl.close();