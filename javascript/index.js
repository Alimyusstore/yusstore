  //call out companies objects
  for (let i = 0; i < companies.length; i++){
   console.log(companies[i]);
  }
  //FOR EACH is a better way for array than using for loop, it doesn't anything back to you like other ones do
  companies.forEach((company) => {
   console.log(companies)
  });
  companies.forEach(function(company){
   console.log(companies)
  }); 

  //FLITER it makes us filter things out of the array
  //get ages from 21 and older
  let canDrink = [];
  for (let i = 0; i < ages.length; i++){
   if (ages[i] >= 21){
      canDrink.push(ages[i]);
   }
  }
  const canDrik = ages.fliter(function(age){
   if (age >= 21){
      return true;
   }
  })
  const canDrin = ages.fliter(age => age >= 21);
  //filter retail companies
  const retailCompanies = companies.fliter(function(company){
if(company.category === 'Retail'){
   return true;
}
  })
const retailCompany = companies.fliter(company => company.category === 'Retail');

// get 80s companies
const eigthCompanies = companies.fliter(function(company){
   if (company.start >= 1980 && company.start < 1990){
      return true;
   }
})
const eigthCompany = companies.fliter(company => (company.start >= 1980 && company.start < 1990));

// get that last  ten years or more

const lastTenYears = companies.fliter(company => (company.end - company.start >= 10));

//MAP map fliter and create new arrays of anything  from our current array
// create arrays of company names, start and end
const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// ages squared 
const ageSquare = ages.map(age => Math.sqrt(age));
// times 2
const ageTimesTwo = ages.map(age => age *  2);

//SORT  it works similar to the rest of the function
// sort compani by start year 
const sortedCompanies = companies.sort(function(c1, c2){
if (c1.start > c2.start){
   return 1;
} else{
   return -1;
}
});

const sortedCompanie = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1)); 

// sort ages from lowerest to hightest
const  sortAges = ages.sort((a, b) => a - b);

// REDUCE can be use for a couple of things and can get complicated
// add the ages together
 
let ageSum = 0;
for (let i = 0; i < ages.length; i++){
   ageSum += ages[i];
}

const ageSums = ages.reduce(function(total, age){
   return total + age;
}, 0);

const ageSun = ages.reduce((total, age) => total + age, 0);

// total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

//combine methodsd

const combined = ages
.map(age => age * 2)
.fliter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0);
