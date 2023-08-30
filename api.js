
import fetch from 'node-fetch';
const exercisedb = "https://exercisedb.p.rapidapi.com";  //base URL for any ExerciseDB API requests
const fitnessCalculator = "https://fitness-calculator.p.rapidapi.com";  //base URL for any fitness calculator API requests

/*
 * Functions for ExerciseDB API requests.
 */
async function getListOfBodyParts(){
    let reqUrl = `${exercisedb}/exercises/bodyPartList/?query=`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
              }
        }
    );
    const bodyPart =await response.json();
  //  console.log(bodyPart);
    return bodyPart;
}

async function getListByBodyParts(url){
    let reqUrl = `${exercisedb}/exercises/bodyPart/${url}`;
    //let reqUrl = `${exercisedb}/exercises/bodyPart/chest`;
    //let reqUrl = `${exercisedb}/exercises/bodyPart`;
    //let reqUrl = `${exercisedb}/exercises/bodyPart?query=${selectedBodyPart}&key=${key}`;
    //let reqUrl = `${exercisedb}/exercises/bodyPart/${url}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
              }
        }
    );
    console.log(reqUrl);
    return await response.json();
}

async function getListOfTargetMuscles(){
    let reqUrl = `${exercisedb}/exercises/targetList/?query=`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
              }
        }
    );
    const TargetMuscles =await response.json();
    return TargetMuscles ;
}

async function getListByTargetMuscles(url){
    let reqUrl = `${exercisedb}/exercises/target/${url}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
              }
        }
    );
   // console.log(reqUrl);
    return await response.json();
}


async function getListOfEquipment(){
    let reqUrl = `${exercisedb}/exercises/equipmentList/?query=`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
              }
        }
    );
    const equipment =await response.json();
    return equipment ;
}

async function getListByEquipment(url){
    let reqUrl = `${exercisedb}/exercises/equipment/${url}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
              }
        }
    );
   // console.log(reqUrl);
    return await response.json();
}


/*
 * Functions for Fitness calculator API requests.
 */
async function getbmi(age, weight, height){
    let reqUrl = `${fitnessCalculator}/bmi/?age=${age}&weight=${weight}&height=${height}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com'"
              }
        }
    );
   // console.log(reqUrl);
   const bmi =await response.json();
    return bmi.data;
}

async function dailyCalorieRequirements(age,gender,height,weight,activitylevel){
    let reqUrl = `${fitnessCalculator}/dailycalorie/?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com'"
              }
        }
    );
   const dailycalorie =await response.json();
   //console.log(dailycalorie);
    return dailycalorie.data;
}

/*
 * Functions for Fitness Calculator API requests.
 */
async function getListofActivities(intensitylevel){
    let reqUrl = `${fitnessCalculator}/activities/?intensitylevel=${intensitylevel}`;
    //console.log(reqUrl);
    let response = await fetch(
        reqUrl,
        {
            method: "GET",
            headers:  {
                "X-RapidAPI-Key": "7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3",
                "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com"
              }
        }
    );
    let ListofActivitiesData = await response.json();
   // console.log(ListofActivitiesData );
    return ListofActivitiesData.data;
}

/*
async function foodinfo(){
    let reqUrl = `${fitnessCalculator}/food?foodid=SR25_1_1`; 
    //  /foodids?subtablename=Fo1_2     

    let response = await fetch(
        reqUrl,
        {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
            
        }
    );
    let foodinfoData = await response.json();
    return foodinfoData.data;
}
async function foodlist(){
    let reqUrl = `${fitnessCalculator}/foodids?subtablename=Fo1_2`; 
    //  /foodids?subtablename=Fo1_2     

    let response = await fetch(
        reqUrl,
        {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '7106c8e6e0msh01abc33797f25ebp189cf6jsn1b8a3f05cff3',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
            
        }
    );
    return await response.json();
}
*/
export default {
    getListOfBodyParts,
    getListByBodyParts,
    getListOfTargetMuscles,
    getListByTargetMuscles,
    getListOfEquipment,
    getListByEquipment,
    getbmi,
    dailyCalorieRequirements,
    getListofActivities
   /* foodinfo,
    foodlist*/
};