function checkLeapyear(num){
    if(num % 4==0){
        return "Leap year"
    }
    else {
            return "Not a leap year"
        }
    }


console.log(checkLeapyear(3456))