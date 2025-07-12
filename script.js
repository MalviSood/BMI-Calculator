const btnEl = document.getElementById("btn")
const bmiinputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")




function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value 

    const bmiValue = weightValue / (heightValue * heightValue)

    bmiinputEl.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Underweight"
    } else if(bmiValue >= 18.5 && bmiValue <= 24.5){
        weightConditionEl.innerText = "Normal Weight"
    } else if(bmiValue >= 25 && bmiValue <=29.9) {
        weightConditionEl.innerText = "Overweight"
    } else if (bmiValue >= 30){
        weightConditionEl.innerText = "Obese";
    }
}


btnEl.addEventListener("click", calculateBMI)