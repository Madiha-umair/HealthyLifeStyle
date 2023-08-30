//import required modules
import express from "express";
import { join, dirname } from "path";
import { config } from "dotenv";

config();
import exercisedb from "./api.js";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(join(__dirname, "public")));

//PAGE ROUTES
app.get("/", (request, response) => {
  response.render("index");
});

//bodypart exercises
app.get("/bodypart", async (request, response) => {
  let bodyPartsList = await exercisedb.getListOfBodyParts();
  var bodypart = request.query.bodyparts;
  let Exercises = await exercisedb.getListByBodyParts(bodypart);
  response.render('bodypart', { bodyParts: bodyPartsList , bodyPartResult: Exercises , selectedbodypart: bodypart });
});

//target muscles exercises
app.get("/targetmuscles", async (request, response) => {
  let exerciseList = await exercisedb.getListOfTargetMuscles();
  var muscles = request.query.targetmuscles;
  let musclesExercises = await exercisedb.getListByTargetMuscles(muscles);
  //console.log(musclesExercises);
  response.render('targetmuscles', { targetMuscles: exerciseList , musclesExercises: musclesExercises , selectedTargetMuscles: muscles });
});

// equipment exercises
app.get("/equipment", async (request, response) => {
  let equipmentList = await exercisedb.getListOfEquipment();
  var equipment = request.query.equipments;
  let equipmentExercises = await getListByEquipment(equipment);
  response.render('equipment', { equipmentList: equipmentList , equipmentExercises: equipmentExercises , selectedEquipment: equipment });
});

//calculate bmi
app.get("/bmi", async (request, response) => {  
  let age = request.query.age; 
  let weight = request.query.weight;
  let height = request.query.height;
  let BMI = await exercisedb.getbmi(age,weight, height);
  //console.log( BMI);
  response.render("bmi", { title: "BMI", bmivalue: BMI});  
});

//calculate daily calorie count
app.get("/dailycalorie", async (request, response) => {  
  let age = request.query.age; 
  let gender = request.query.gender;
  let height = request.query.height;
  let weight = request.query.weight;
  let activitylevel = request.query.activitylevel;
  let DailyCalorie = await exercisedb.dailyCalorieRequirements(age,gender,height,weight,activitylevel);
  //console.log( DailyCalorie);
  response.render("dailycalorie", { title: "DailyCalorie", dailycalorie: DailyCalorie});  
});

//list of activities
app.get("/activities", async (request, response) => {
  let intensitylevel = request.query.intensitylevel; 
  console.log(intensitylevel);
  let findActivities = await exercisedb.getListofActivities(intensitylevel);
  //console.log(findActivities);
  response.render("activities", { title: "Activities", activities: findActivities });
});

/*
app.get("/food", async (request, response) => {   //app.get is the url used for open up the page
  let foodList = await fitnessCalculator.foodinfo();
  //console.log( foodList);
  response.render("food", { title: "Foods", foods: foodList});  //exercises is a variable will be used in view for display
});
*/

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});




