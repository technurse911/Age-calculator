const name = prompt("Please enter name to continue")
let userDate = document.getElementById("date");

userDate.max = new Date().toISOString().split ("T")[0];

function calculateAge(){
    let userAge = document.getElementById("age");
    userAge.innerHTML= "";

    let birthDate = new Date(userDate.value);
    console.log(birthDate);

    if(birthDate == "Invalid Date"){
        let userError = document.getElementById("error");
        //   To show the error
        userError.innerHTML = "Date is not valid";
        
    } else{
        let userError = document.getElementById ("error");
        //    To remove error message
        userError.innerHTML = "";

    let userDay =birthDate.getDate()
    let userMonth = birthDate.getMonth() +1;
    let userYear = birthDate.getFullYear();

    // Get current date
    let todayDate = new Date();
      
    //    separating today's date
    let todayDay =todayDate.getDate()
    let todayMonth = todayDate.getMonth()  + 1;
    let todayYear = todayDate.getFullYear();

    let ageDay, ageMonth, ageYear;
  
    //    calculate Year
    ageYear = todayYear - userYear;
          
        //   year
    if(todayMonth >= userMonth){
        ageMonth = todayMonth - userMonth;
    } else{
        ageYear --;
        ageMonth = 12 + todayMonth - userMonth
    }
        // Day

        if(todayDay >= userDay){
            ageDay = todayDay - userDay
        } else{
            ageMonth --;
            ageDay = getDaysInMonth(userYear,
            userMonth) + todayDay - userDay;
        } 

        if (ageMonth < 0){
            ageMonth = 11;
            ageYear--;
        } 

        userAge.innerHTML = `Helllo ${name} You are ${ageYear} years
                             <span> ${ageMonth}</span> months <span>${ageDay}</span> days`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
} 
} 