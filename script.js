var DEBUG = false;
var arr = [];
var fullName = 'Name: ';
var department = 'Department: ';
var id = 'Employee ID: ';
var startDate = 'Hire Date: ';
var total = 'Total Employees: ';



$(".btn").click(function () {
    /***
     * Event listener that performs this function when the submit button is clicked.
     * The function collects the user's information and creates an object and pushes it
     * into an array. Then the information is displayed underneath the form.
     */
    event.preventDefault();

    var firstName = $("#comments").val().trim();
    var lastName = $("#result").val().trim();
    var job = $("#section").val();




    var myObj = {
        name: firstName + ', ' + lastName,
        ID: getId(),
        hire: getDate(),
        position: job
    };
    arr.push(myObj);

    $("#fullName").text(fullName + myObj.name);
    $("#department").text(department + job);
    $("#id").text(id + myObj.ID);
    $("#hire").text(startDate + myObj.hire);
    $("#total").text(total + arr.length);

    if(DEBUG) {
        console.log(firstName);
        console.log(lastName);
        console.log(job);
        console.log(arr);
    }

    $("#comments").val('');
    $("#result").val('');
    $("#section").val('');

    $(".employeeInfo").removeClass('hide');

});

function getId(){
    return Math.floor((Math.random() * 99999999) + 10000000)
}

function getDate(){
    var d = new Date();
    d = d.toString();
    date = d.split('2017');
    return (date[0] + '2017');
}

