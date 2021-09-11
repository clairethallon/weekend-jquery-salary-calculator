console.log('JS');
$(document).ready(onready);



function onready() {
    console.log('onready function running');
    $('#submit').on('click', checkFields);
    $(`#outputTable`).on(`click`, `.deleteButton`, deleteEmp);
}//end function onready

let salaryTotal = [];
let employeeArray = [];

function clicked() {

    console.log('submit');

    // assign variables to input field values
    let employee = {
        firstn: $(`#firstname`).val(),
        lastn: $(`#lastname`).val(),
        idnum: $(`#idnum`).val(),
        job: $(`#jobtitle`).val(),
        sal: parseInt($(`#annualsal`).val())
    }

    // check if there are any doubled ids
    // TRY USING FOR OF LOOP! :)
    for (i = 0; i < employeeArray.length; i++) {
        if (employee.idnum === employeeArray[i].idnum) {
            alert('Duplicate IDs found.');
            return false;
        }
    }

    employeeArray.push(employee);
    salaryTotal.push(employee.sal);

    // $(`#outputTable`).empty();

    // loop through employee array and add employees to the DOM
    $(`#outputTable`).append(`<tr>
        <td>${employee.firstn}</td>
        <td>${employee.lastn}</td>
        <td>${employee.idnum}</td>
        <td>${employee.job}</td>
        <td class = "salaryCell">${employee.sal}</td>
        <td class ="deleteButton"><button>Delete</button></td></tr>`);
    // Push salary into total salary array


    // run salary calculator function
    salCalc(salaryTotal);

}//end clicked function


//funciton to calculate monthly salary cost
function salCalc(salaryTotal) {
    //check if function is running
    console.log(salaryTotal);
    let monthlySal = 0

    for (let i = 0; i < salaryTotal.length; i++) {
        monthlySal += salaryTotal[i] / 12;
    }

    (Number(monthlySal)).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    //display total slaries on DOM
    if (monthlySal >= 20000) {
        document.getElementById("monthlyTotal").className = "red";
        console.log($(`#monthlyTotal`));
    }
    else {
        document.getElementById("monthlyTotal").className = "regular";
    }
    $(`#monthlyTotal`).empty().append(`<p>$${monthlySal}</p>`);

}// end function


//function to delete employee row
function deleteEmp() {

    let el = parseInt($(this).parent().children(`.salaryCell`).text());
    console.log(el);

    for (i = 0; i < salaryTotal.length; i++) {
        if (el === salaryTotal[i]) {
            salaryTotal.splice(i, 1);
            salCalc(salaryTotal);
        }

    }
    // target button and remove button/parent
    $(this).parent().remove();



}//end function

function checkFields() {

    let firstn = $(`#firstname`).val();
    let lastn = $(`#lastname`).val();
    let idnum = $(`#idnum`).val();
    let job = $(`#jobtitle`).val();
    let sal = $(`#annualsal`).val();

    if (firstn.length === 0 || lastn.length === 0 ||
        idnum.length === 0 || job.length === 0 || sal.length === 0) {
        alert('All fields required');
    }
    else {
        clicked();
    }
}
