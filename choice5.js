import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const top3EvenNumber = (number)=>{
    const evenNumber = [];
    number.forEach(element => {
        if(element%2===0){
            evenNumber.push(element);
        }
    });
    evenNumber.sort((a,b)=>b-a);
    console.log('evenNumber: ', evenNumber);
    const firstThree = evenNumber.splice(0,3);
    return (firstThree.length>0)?firstThree:false;
}

const rl = readline.createInterface({ input, output });
const getInput = await new Promise(resolve => {
    rl.question("please insert number ", resolve)
})
rl.close();
const inputNum = getInput.split(" ").map(x => parseInt(x));
console.log('inputNum:', inputNum);
console.log('top3EvenNumber: ', top3EvenNumber(inputNum));