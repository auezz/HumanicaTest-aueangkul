import { readFileSync } from 'fs';

const fileName = 'choice3.json';
const readData = readFileSync(`./${fileName}`, "UTF-8");
const getJsonData = JSON.parse(readData);
//console.log(typeof readData, typeof getJsonData);

const sumData = (sumVal=0, jsonData=getJsonData,objIndex=0)=>{
    // console.log('\n\ninsumData: ');
    // console.log(jsonData);
    // console.log(jsonData.hasOwnProperty('ChildList'));
    // console.log(jsonData["HeadCount"]);
    // console.log('childList length: ', jsonData["ChildList"].length);
    sumVal += jsonData["HeadCount"];
    console.log('sumVal: ', sumVal);
    let getData = "";
    if(jsonData.hasOwnProperty("ChildList") && jsonData["ChildList"].length>0){
        console.log('in recursive A: ');
        getData = jsonData["ChildList"][objIndex]
    }else if(jsonData.hasOwnProperty("ChildList")){
        console.log('in recursive B: ');
        objIndex = objIndex+1;
        getData = getJsonData["ChildList"][objIndex];
    }
    if(typeof getData!=="undefined"){
        sumData(sumVal, getData, objIndex);
    }
}

sumData();

