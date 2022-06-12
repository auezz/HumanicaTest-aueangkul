import readline from 'readline';
import { stdin as input, stdout as output } from 'process';


const isDoubleArray = (number)=>{
    if(number.length<2){
        return 'N';
    }
    let counts = {};
    number.sort();
    number.forEach((element, index)=>{
        console.log(index, element);
        counts[element] = (counts[element] || 0) + 1;
    });
    console.log('count: ', counts);
    const checkVal = Object.values(counts).find(val => val!==2);
    return (typeof checkVal==="undefined")?"Y":"N";
}
const rl = readline.createInterface({ input, output });
const getInput = await new Promise(resolve => {
    rl.question("please insert number ", resolve)
  })
rl.close();
console.log('you number is: ', getInput);
const inputNum = getInput.split(" ").map(x => parseInt(x));
console.log('inputNum:', inputNum);
console.log('isDoubleArray: ', isDoubleArray(inputNum));


