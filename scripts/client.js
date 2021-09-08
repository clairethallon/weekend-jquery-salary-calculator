console.log('JS');
$(document).ready(onready);

let salaryTotal = [];

function onready() {
    console.log('onready function running');
    $('#submit').on('click', clicked);
}//end function onready

count = 0;
function clicked() {

    console.log('submit');

    // assign variables to input field values
    let firstn = $(`#firstname`).val();
    let lastn = $(`#lastname`).val();
    let idnum = $(`#idnum`).val();
    let job = $(`#jobtitle`).val();
    let sal = parseInt($(`#annualsal`).val());

    //push salary into total salary array
    salaryTotal.push(sal);
    //increase count to make unique ID's
    count++;

    //add rows to table with employee information
    $(`#outputTable`).append(`<tr><td>` + firstn + `</td><td>` + lastn + `</td><td>` + idnum +
        `</td><td>` + job + `</td><td>` + sal + `</td><td> <button id = "employee` + count + `"onClick = "deleteEmp(this.id)">Delete</button></td></tr>`);

    //empty input fields
    $(`#firstname`).val('');
    $(`#lastname`).val('');
    $(`#idnum`).val('');
    $(`#jobtitle`).val('');
    $(`#annualsal`).val('');

    //run salary calculator function
    salCalc(salaryTotal);
}//end clicked function


//funciton to add salary
function salCalc(salaryTotal) {
    //check if function is running
    console.log(salaryTotal);
    let totalSal = 0;
    for (let i = 0; i < salaryTotal.length; i++) {
        totalSal += salaryTotal[i];
    }

    //display total slaries on DOM
    $(`#salaryTotal`).empty().append('<p>' + totalSal + '</p>');

}// end function


//function to delete employee row
function deleteEmp(deleteid) {
    //check function is running
    console.log(deleteid);
    //this line is not working. Only deletes the button
    $('#' + deleteid).parent().fadeOut();
}//end function