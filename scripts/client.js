console.log('JS');
$(document).ready(onready);

function onready() {
    console.log('onready function running');
    $('#submit').on('click', clicked);
}
function clicked() {
    console.log('you have clicked the submit button');


    let firstn = $(`#firstname`).val();
    let lastn = $(`#lastname`).val();
    let idnum = $(`#idnum`).val();
    let job = $(`#jobtitle`).val();
    let sal = $(`#annualsal`).val();


    $(`#output`).append('<div>' + firstn + lastn + idnum + job + sal + '</div>');
    $(`#firstname`).val('');
    $(`#lastname`).val('');
    $(`#idnum`).val('');
    $(`#jobtitle`).val('');
    $(`#annualsal`).val('');
}
