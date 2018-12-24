function toggleForm() {
    var togForm = document.getElementById("newUser");
    if (togForm.style.display == "none") {
        togForm.style.display = "block";
    }
    else {
        togForm.style.display = "none";
    }
}

function addCustomer() {
    // get input values
    var fname = document.getElementById('fname').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var pinCode = document.getElementById('pin').value;
    var country = document.getElementById('country').value;

    // get table
    var table = document.getElementById('newTable');

    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    
//    for(var i = 1; i>0; i++){

//    }
    cell.innerHTML = index;
    cell1.innerHTML = fname;
    cell2.innerHTML = address;
    cell3.innerHTML = city;
    cell4.innerHTML = pinCode;
    cell5.innerHTML = country;
}