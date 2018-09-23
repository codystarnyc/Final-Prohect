// create functiom

function idCard() {
  var firstname = document.getElementById('firstName').value;
  var lastname = document.getElementById("lastName").value;
  var address = document.getElementById('Address').value;
  var fullName = firstname  + " " +  lastname;

  document.getElementById('postFullName').innerHTML =  fullName;
  document.getElementById('postAddress').innerHTML = "Address: " + address;

  var age = parseInt(document.getElementById('Age').value);
  var phoneNumber = parseInt(document.getElementById('phoneNumber').value);

// Create an empty array
  var numberArray =[];
  numberArray.push(age,phoneNumber);
  for (var i=0; i < numberArray.length; i++){
    if(numberArray[i]<100){
      document.getElementById("postAge").innerHTML= "Age: " + numberArray[i];

    }else if (numberArray[i]>=100){
      document.getElementById('postPhoneNumber').innerHTML= "Phone Number: " + numberArray[i];
    }
  }
}
