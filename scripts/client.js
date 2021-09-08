console.log('JS');
$(document).ready(onready);

let salaryTotal = [];

function onready() {
    console.log('onready function running');
    $('#submit').on('click', clicked);
}

function clicked() {
    console.log('submit');

    let firstn = $(`#firstname`).val();
    let lastn = $(`#lastname`).val();
    let idnum = $(`#idnum`).val();
    let job = $(`#jobtitle`).val();
    let sal = parseInt($(`#annualsal`).val());

    salaryTotal.push(sal);



    $(`#outputTable`).append(`<tr><td>` + firstn + `</td><td>` + lastn + `</td><td>` + idnum +
        `</td><td>` + job + `</td><td>` + sal + `</td><td> <button class="delete" >Delete</button></td></tr>`);

    $(`#firstname`).val('');
    $(`#lastname`).val('');
    $(`#idnum`).val('');
    $(`#jobtitle`).val('');
    $(`#annualsal`).val('');

    $('.delete').on('click', deleteEmp);
    salCalc(salaryTotal);
}

console.log(salaryTotal);

function salCalc(salaryTotal) {
    console.log(salaryTotal);
    let totalSal = 0;
    for (let i = 0; i < salaryTotal.length; i++) {
        totalSal += salaryTotal[i];
    }
    console.log(totalSal);

    $(`#salaryTotal`).empty().append('<p>' + totalSal + '</p>');

}

function deleteEmp() {
    console.log('delete emp running');
}