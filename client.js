// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here

  let bonus = 0;        //set variable for tracking bonus
  let totalComp = 0;    //set variable for total comp
  let totalBonus = 0;   //set variable for total bonus

  //calculating base bonus
  if (employee.reviewRating < 2){             //if rating is less than two, no bonus
    bonus = 0;
  } else if (employee.reviewRating === 3){    //if rating is 3, 4% bonus
    bonus = .04;
  } else if (employee.reviewRating === 4){    //if rating is 4, 6% bonus
    bonus = .06;
  } else if (employee.reviewRating === 5){    //if rating is 5, 10% bonus
    bonus = .1;
  }

  //calculating additional bonus
  if (employee.employeeNumber.length === 4){ // if four digit employee number, 5% bonus
    bonus += .05;
  }
  if (employee.annualSalary > 65000){       // if annual salary is greater than $65,000, minus 1% bonus
    bonus -= .01;
  }
  if (bonus > .13){                         // cap bonus at 13%
    bonus = .13;
  }
  if (bonus < 0){                           // bonus cannot be less than 0%
    bonus = 0;
  }

  //calculating total bonus and total compensation
  totalComp = (employee.annualSalary * bonus) + parseInt(employee.annualSalary);
  totalBonus = Math.round(employee.annualSalary * bonus);

  // creating compensation object
  const compensation =                      
    {
      name: employee.name,
      bonusPercentage: bonus,
      totalCompensation: totalComp,
      totalBonus: totalBonus,
    };

  //return new object with new properties
  console.log(compensation);

  let displayName = "Employee name: " + compensation.name;
  let displayPercent = "Bonus percentage: " + compensation.bonusPercentage;
  let displayComp = "Total compensation: " + compensation.totalCompensation;
  let displayBonus = "Total bonus: " + compensation.totalBonus;
  document.getElementById("name").textContent = displayName;
  document.getElementById("percent").textContent = displayPercent;
  document.getElementById("comp").textContent = displayComp;
  document.getElementById("bonus").textContent = displayBonus;
  return compensation;

}



//console.log(calculateIndividualEmployeeBonus(employees[0]));