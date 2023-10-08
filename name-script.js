




function getGender(){
  let gender = "";
  let option = document.getElementsByName("gender");

  for(let i = 0; i < option.length; i++){
    if(option[i].checked){
      gender = option[i].value;
    }
  }

  return gender;
}

let personDOB = document.getElementById("birth-date");

function getWeekDay(birthDate){
  const d = new Date(birthDate);
  let day = d.getDay();
  
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday"]
  const weekDay = dayNames[day]

  return weekDay;
}


function getWeek(){
  const DOB = personDOB.value;
  let weekday = getWeekDay(DOB)
  console.log(weekday)
  return weekday
}

function getDayName(){

const genderInput = getGender()
const dayOfTheWeek = getWeekDay(personDOB.value)
let dayName = " ";

const males = {
Sunday: "Akwasi",
Monday: "Kwadwo",
Tuesday: "Kwabena",
Wednesday: "Kwaku",
Thursday: "Yaw",
Friday: "Kofi",
Saturday: "Kwame",
};

const females = {
Sunday: "Akosua",
Monday: "Adwoa",
Tuesday: "Abena",
Wednesday: "Akua",
Thursday: "Yaa",
Friday: "Afia",
Saturday: "Ama",
}

if(genderInput === 'male'){
  dayName = males[dayOfTheWeek];

}else if(genderInput == 'female'){
  dayName = females[dayOfTheWeek]
}

return dayName;
} 

let button

async function printInfo(){

  let bornday = getWeek();
  let gender = getGender();
  let dayname = getDayName();

  let person = document.getElementById("person-name");
  const personName = person.value;


  /*INNER HTML CHANGES */
  document.getElementById("main-name").innerHTML = personName;
  document.getElementById("main-day-name").innerHTML = dayname;
  document.getElementById("main-dayofweek").innerHTML = bornday;
  document.getElementById("image-name").innerHTML =dayname;

  const infoImage = document.getElementById("info-image");

  infoImage.src = `images/${gender}/${dayname}.png`

  document.getElementById("info-part").style.display = "block";


  console.log(`You were born a ${bornday}. You are ${gender}. Your day name is ${dayname}.`)
  
}

 