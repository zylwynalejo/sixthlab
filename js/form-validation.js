(function() {
    'use strict';

    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();

//student ID number limit
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.oninput = () => {
    if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
  };
})
 
//add div containers (student list)
function addStudents() {
  var container = document.getElementById("s_lists");
  var section = document.getElementById("mainstudents");
  container.appendChild(section.cloneNode(true));
}

//add div containers (item list)
function addItem() {
  var container = document.getElementById("item_lists");
  var section = document.getElementById("mainitem");
  container.appendChild(section.cloneNode(true));
}

function removeStudent(){
  var container = document.getElementById("s_lists");
  var section = document.getElementById("mainstudents");
  container.removeChild(section);
}

function removeItem(){
  var container = document.getElementById("item_lists");
  var section = document.getElementById("mainitem");
  container.removeChild(section);
}


//success alert
const ccode = document.getElementById('courseCode')
const cname = document.getElementById('courseName')
const labact= document.getElementById('activity')
const inst = document.getElementById('instructor')
const sname = document.getElementById('studentName')
const snum = document.getElementById('studentNumber')
const qtyunit = document.getElementById('qty&unit')
const itemname= document.getElementById('itemName')

function pass(){
  valid = true;
  if(ccode.value == ""){
      valid = false;
  } else if(cname.value == ""){
      valid = false;
  } else if(labact.value == ""){
      valid = false;
  } else if(inst.value == ""){
      valid = false;
  } else if(sname.value == ""){
      valid = false;
  } else if(snum.value == ""){
      valid = false;
  } else if(qtyunit.value == ""){
    valid = false;
  } else if(itemname.value == ""){
    valid = false;
  }
  else{
      alert("Success\nReference Reservation No.: " + Math.floor((Math.random() * 20222020) + 19901900) + "\nAn email confirmation will be sent");
      valid = true;
  }
  return valid;
}

