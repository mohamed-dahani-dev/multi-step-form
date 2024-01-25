const nextStepBtn = document.getElementById("nextStepBtn");
const backStepBtn = document.getElementById("backStepBtn");

const stepNumber1 = document.getElementById("stepNumber1");
const stepNumber2 = document.getElementById("stepNumber2");
const stepNumber3 = document.getElementById("stepNumber3");
const stepNumber4 = document.getElementById("stepNumber4");

const title = document.getElementById("title");
const disc = document.getElementById("disc");

const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

let step = 1;
stepNumber1.classList.add("currentStep");

let choossePlan = "Arcade";
let timePlan = "Monthly";
let PAOPlan = "Online Service";
document.getElementById("finishTimePlan").innerHTML = `(${timePlan})`
document.getElementById("finishChoossePlan").innerHTML = choossePlan;
document.getElementById("finishPAOPlan").innerHTML = PAOPlan;

nextStepBtn.onclick = () => {
  if (step > 0 && step < 5) {
    step++;
    if (step == 2) {
      stepNumber2.classList.add("currentStep");
      stepNumber1.classList.remove("currentStep");
      title.innerHTML = "Select your plan";
      disc.innerHTML = "You hane the option of monthly or yearly billing";
      backStepBtn.style.display = "block";
      document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "block";
      document.getElementById("pickAddOns").style.display = "none";
      document.getElementById("finishingUp").style.display = "none";
    } else if (step == 3) {
      stepNumber3.classList.add("currentStep");
      stepNumber1.classList.remove("currentStep");
      stepNumber2.classList.remove("currentStep");
      title.innerHTML = "Pick Add-ons";
      disc.innerHTML = "Add-ons help enhance your gaming experience";
      backStepBtn.style.display = "block";
      document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "none";
      document.getElementById("pickAddOns").style.display = "block";
      document.getElementById("finishingUp").style.display = "none";
    } else if (step == 4) {
      stepNumber4.classList.add("currentStep");
      stepNumber1.classList.remove("currentStep");
      stepNumber2.classList.remove("currentStep");
      stepNumber3.classList.remove("currentStep");
      title.innerHTML = "Finishing up";
      disc.innerHTML = "Double-check everything looks OK before confirming";
      backStepBtn.style.display = "block";
      nextStepBtn.style.display = "none";
      document.getElementById("ConfirmBtn").style.display = "block";
      document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "none";
      document.getElementById("pickAddOns").style.display = "none";
      document.getElementById("finishingUp").style.display = "block";
    }
  }
};
backStepBtn.onclick = () => {
  if (step > 0 && step < 5) {
    step--;
    if (step == 1) {
      stepNumber1.classList.add("currentStep");
      stepNumber2.classList.remove("currentStep");
      stepNumber3.classList.remove("currentStep");
      stepNumber4.classList.remove("currentStep");
      backStepBtn.style.display = "none";
      nextStepBtn.style.display = "block";
      document.getElementById("ConfirmBtn").style.display = "none";
      document.getElementById("personalInfo").style.display = "block";
      document.getElementById("selectPlan").style.display = "none";
      document.getElementById("pickAddOns").style.display = "none";
      document.getElementById("finishingUp").style.display = "none";
    } else if (step == 2) {
      stepNumber1.classList.remove("currentStep");
      stepNumber2.classList.add("currentStep");
      stepNumber3.classList.remove("currentStep");
      stepNumber4.classList.remove("currentStep");
      title.innerHTML = "Select your plan";
      disc.innerHTML = "You hane the option of monthly or yearly billing";
      nextStepBtn.style.display = "block";
      document.getElementById("ConfirmBtn").style.display = "none";
      document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "block";
      document.getElementById("pickAddOns").style.display = "none";
      document.getElementById("finishingUp").style.display = "none";
    } else if (step == 3) {
      stepNumber1.classList.remove("currentStep");
      stepNumber2.classList.remove("currentStep");
      stepNumber3.classList.add("currentStep");
      stepNumber4.classList.remove("currentStep");
      title.innerHTML = "Pick Add-ons";
      disc.innerHTML = "Add-ons help enhance your gaming experience";
      nextStepBtn.style.display = "block";
      document.getElementById("ConfirmBtn").style.display = "none";
      document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "none";
      document.getElementById("pickAddOns").style.display = "block";
      document.getElementById("finishingUp").style.display = "none";
    } else if (step == 4) {
      stepNumber1.classList.remove("currentStep");
      stepNumber2.classList.remove("currentStep");
      stepNumber3.classList.remove("currentStep");
      stepNumber4.classList.add("currentStep");
      title.innerHTML = "Finishing up";
      disc.innerHTML = "Double-check everything looks OK before confirming";
      document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "none";
      document.getElementById("pickAddOns").style.display = "none";
      document.getElementById("finishingUp").style.display = "block";
    }
  }
};

yearly.onclick = () => {
  yearly.style.background = "#02295a";
  yearly.style.color = "#fff";
  monthly.style.background = "#fff";
  monthly.style.color = "#000";
  document.getElementById("bunusYearlyArcade").style.display = "block";
  document.getElementById("bunusYearlyAdvance").style.display = "block";
  document.getElementById("bunusYearlyPro").style.display = "block";

  document.getElementById("arcadePrice").innerHTML = "$90/yr";
  document.getElementById("advancePrice").innerHTML = "$120/yr";
  document.getElementById("proPrice").innerHTML = "$150/yr";

  document.getElementById("pickOnline").innerHTML = "+$10/yr";
  document.getElementById("pickStorage").innerHTML = "+$20/yr";
  document.getElementById("pickCostum").innerHTML = "+$20/yr";
  timePlan = "Yearly";
  document.getElementById("finishTimePlan").innerHTML = `(${timePlan})`
  console.log(timePlan);
};
monthly.onclick = () => {
  monthly.style.background = "#02295a";
  monthly.style.color = "#fff";
  yearly.style.background = "#fff";
  yearly.style.color = "#000";
  document.getElementById("bunusYearlyArcade").style.display = "none";
  document.getElementById("bunusYearlyAdvance").style.display = "none";
  document.getElementById("bunusYearlyPro").style.display = "none";

  document.getElementById("arcadePrice").innerHTML = "$9/mo";
  document.getElementById("advancePrice").innerHTML = "$12/mo";
  document.getElementById("proPrice").innerHTML = "$15/mo";

  document.getElementById("pickOnline").innerHTML = "+$1/mo";
  document.getElementById("pickStorage").innerHTML = "+$2/mo";
  document.getElementById("pickCostum").innerHTML = "+$2/mo";
  timePlan = "Monthly";
  document.getElementById("finishTimePlan").innerHTML = `(${timePlan})`
};

document.getElementById("arcade").onclick = () => {
  document.getElementById("arcade").classList.add("plan-active");
  document.getElementById("pro").classList.remove("plan-active");
  document.getElementById("advanced").classList.remove("plan-active");
  choossePlan = "Arcade";
  document.getElementById("finishChoossePlan").innerHTML = choossePlan;
};

document.getElementById("advanced").onclick = () => {
  document.getElementById("advanced").classList.add("plan-active");
  document.getElementById("arcade").classList.remove("plan-active");
  document.getElementById("pro").classList.remove("plan-active");
  choossePlan = "Advanced";
  document.getElementById("finishChoossePlan").innerHTML = choossePlan;
  console.log(choossePlan);
};

document.getElementById("pro").onclick = () => {
  document.getElementById("advanced").classList.remove("plan-active");
  document.getElementById("arcade").classList.remove("plan-active");
  document.getElementById("pro").classList.add("plan-active");
  choossePlan = "Pro";
  document.getElementById("finishChoossePlan").innerHTML = choossePlan;
};

document.getElementById("online").onclick = () => {
  document.getElementById("online").classList.add("pickaddactive");
  document.getElementById("storage").classList.remove("pickaddactive");
  document.getElementById("custom").classList.remove("pickaddactive");
  PAOPlan = "Online Service";
  document.getElementById("finishPAOPlan").innerHTML = PAOPlan;
};

document.getElementById("storage").onclick = () => {
  document.getElementById("storage").classList.add("pickaddactive");
  document.getElementById("online").classList.remove("pickaddactive");
  document.getElementById("custom").classList.remove("pickaddactive");
  PAOPlan = "Larger storage";
  document.getElementById("finishPAOPlan").innerHTML = PAOPlan;
};

document.getElementById("custom").onclick = () => {
  document.getElementById("storage").classList.remove("pickaddactive");
  document.getElementById("online").classList.remove("pickaddactive");
  document.getElementById("custom").classList.add("pickaddactive");
  PAOPlan = "Customizable Profile";
  document.getElementById("finishPAOPlan").innerHTML = PAOPlan;
};




document.getElementById("ConfirmBtn").onclick=()=>{
    document.getElementById("personalInfo").style.display = "none";
      document.getElementById("selectPlan").style.display = "none";
      document.getElementById("pickAddOns").style.display = "none";
      document.getElementById("finishingUp").style.display = "none";
      document.getElementById("lastMessage").style.display = "block";
      document.getElementById("ConfirmBtn").style.display = "none";
      backStepBtn.style.display = "none";
      title.style.display = "none";
      disc.style.display = "none";
}