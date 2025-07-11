function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").value = rateval;
}
function updater(){
    var rateval = document.getElementById("rate_val").value;
    document.getElementById("rate").value = rateval;
}
function compute(){
    var p = document.getElementById("amt").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("ny").value;
    var si = (p * r * t)/100;
    var tamt = parseInt(p) + parseFloat(si);
    var res = document.getElementById("res");
    var fy = new Date().getFullYear() + parseInt(y);

    if (p<=0){
        alert("Please give a positive number");
        document.getElementById("amt").focus;
    }
    else{
        res.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + tamt + "</mark>" + ",\<br\> in the year " + "<mark>" + fy + "</mark>" + "\<br\>"
    }
}