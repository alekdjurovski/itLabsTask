function toggleForm() {
    var togForm = document.getElementById("newUser");
    if (togForm.style.display == "none") {
        togForm.style.display = "block";
    }
    else {
        togForm.style.display = "none";
    }
}



var rowId = 0;

function addCustomer() {
    rowId++;
    // get input values
    var fname = document.getElementById('fname').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var pinCode = document.getElementById('pin').value;
    var country = document.getElementById('country').value;

    // get table
    var table = document.getElementById('newTable');
    // create new row and columns
    var row = table.insertRow(-1);

    var cell = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);

    // putting input value to new columns
    cell.innerHTML = rowId;
    cell1.innerHTML = fname;
    cell2.innerHTML = address;
    cell3.innerHTML = city;
    cell4.innerHTML = pinCode;
    cell5.innerHTML = country;
    cell6.innerHTML = '<button onclick="read(this)"><i class="fas fa-eye"></i></button>' +
        '<button ><i class="fas fa-edit"></i></button>' +
        '<button id="hidee" onclick= "deleteRow(this)" ><i class="fas fa-trash-alt"></i></button>';

    document.getElementById("fname").value="";
    document.getElementById("address").value="";
    document.getElementById("city").value="";
    document.getElementById("pin").value="";
    document.getElementById("country").value="";
}


function read(info) {
    var i = info.parentNode.parentNode.rowIndex;
    var x = document.getElementById("newTable").rows[i].innerText;
    alert(x);
    
    // var newLine = "\n";
    // var allData = "Name: " + this.fname.value + newLine +
    //     "Address: " + address +
    //     "City: " + city +
    //     "Pin Code: " + pinCode +
    //     "Country: " + country;
    // alert(x);
}


function deleteRow(id) {
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById("newTable").deleteRow(i);
}

