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

    // get input values and put to variables
    var fName = document.getElementById('name-input').value;
    var address = document.getElementById('address-in').value;
    var city = document.getElementById('city-in').value;
    var pinCode = document.getElementById('pin-in').value;
    var country = document.getElementById('country-in').value;

    // get table
    var table = document.getElementById('newTable');
    var id = table.rows.length;
    // create new row and columns
    // var row = table.insertRow(-1);
    var row = table.insertRow(id).innerHTML = "<tr id='row" + id + "'><td id='id-row" + id + "'>" + id + "</td><td id='name" + id + "'>" + fName + "</td><td id='address" + id + "'>" + address + "</td><td id='city" + id + "'>" + city + "</td><td id='pin" + id + "'>" + pinCode + "</td> <td id='country" + id + "'>" + country + "</td> <td><button id='read-btn" + id + "' onclick='read(this)'><i class='fas fa-eye'></i></button><button id='edit-btn" + id + "' onclick='editRow(this)'><i class='fas fa-edit'></i></button><button id='save-btn" + id + "' class='save' onclick='saveRow(this)'><i class='fas fa-save'></i></button><button id='delete-btn" + id + "'onclick='deleteRow(this)'><i class='fas fa-trash-alt'></i></button></td></tr>";

    // Clear all inputs
    document.getElementById("name-input").value = "";
    document.getElementById("address-in").value = "";
    document.getElementById("city-in").value = "";
    document.getElementById("pin-in").value = "";
    document.getElementById("country-in").value = "";
}


function read(id) {
    var i = id.parentNode.parentNode.rowIndex;
    var x = document.getElementById("newTable").rows[i].innerText;
    alert(x);
    console.log(x);

    // var newLine = "\n";
    // var allData = "Name: " + this.fname.value + newLine +
    //     "Address: " + address +
    //     "City: " + city +
    //     "Pin Code: " + pinCode +
    //     "Country: " + country;
    // alert(x);
}

function editRow(evnt) {
    // select the id row
    var i = evnt.parentNode.parentNode.rowIndex;
    document.getElementById("edit-btn" + i).style.display = "none";
    document.getElementById("save-btn" + i).style.display = "block";


    var nameEdit = document.getElementById("name" + i);
    var addressEdit = document.getElementById("address" + i);
    var cityEdit = document.getElementById("city" + i);
    var pinEdit = document.getElementById("pin" + i);
    var countryEdit = document.getElementById("country" + i);

    var oldName = nameEdit.innerHTML;
    var oldAddress = addressEdit.innerHTML;
    var oldCity = cityEdit.innerHTML;
    var oldPin = pinEdit.innerHTML;
    var oldCountry = countryEdit.innerHTML;

    nameEdit.innerHTML = "<input type='text' id='nameEd" + i + "' value='" + oldName + "'>";
    addressEdit.innerHTML = "<input type='text' id='addressEd" + i + "' value='" + oldAddress + "'>";
    cityEdit.innerHTML = "<input type='text' id='cityEd" + i + "' value='" + oldCity + "'>";
    pinEdit.innerHTML = "<input type='text' id='pinEd" + i + "' value='" + oldPin + "' >";
    countryEdit.innerHTML = "<input type='text' id='countryEd" + i + "' value='" + oldCountry + "'>";
}

function saveRow(id) {
    var i = id.parentNode.parentNode.rowIndex;

    var saveName = document.getElementById("nameEd" + i).value;
    var saveAddress = document.getElementById("addressEd" + i).value;
    var saveCity = document.getElementById("cityEd" + i).value;
    var savePin = document.getElementById("pinEd" + i).value;
    var saveCountry = document.getElementById("countryEd" + i).value;

    document.getElementById("name" + i).innerHTML = saveName;
    document.getElementById("address" + i).innerHTML = saveAddress;
    document.getElementById("city" + i).innerHTML = saveCity;
    document.getElementById("pin" + i).innerHTML = savePin;
    document.getElementById("country" + i).innerHTML = saveCountry;

    document.getElementById("edit-btn" + i).style.display = "block";
    document.getElementById("save-btn" + i).style.display = "none";
}


function deleteRow(id) {
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById("newTable").deleteRow(i);
}

