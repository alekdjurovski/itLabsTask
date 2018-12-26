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
    var tableId=table.rows.length;
    // create new row and columns
    // var row = table.insertRow(-1);
    var row = table.insertRow(tableId).innerHTML="<tr id='row"+tableId+"'><td id='id-row"+tableId+"'>"+tableId+"</td><td id='new-name"+tableId+"'>"+fName+"</td><td id='address"+tableId+"'>"+address+"</td><td id='city"+tableId+"'>"+city+"</td><td id='pin"+tableId+"'>"+pinCode+"</td> <td id='country"+tableId+"'>"+country+"</td> <td><button id='read-btn"+tableId+"' onclick='read(this)'><i class='fas fa-eye'></i></button><button id='edit-btn"+tableId+"' onclick='editRow(this)'><i class='fas fa-edit'></i></button><button id='delete-btn"+tableId+"'onclick='deleteRow(this)'><i class='fas fa-trash-alt'></i></button></td></tr>";

// Clear all inputs
    document.getElementById("name-input").value="";
    document.getElementById("address-in").value="";
    document.getElementById("city-in").value="";
    document.getElementById("pin-in").value="";
    document.getElementById("country-in").value="";
}


function read(id) {
    var i = id.parentNode.parentNode.rowIndex;
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

function editRow(evnt){
// select the id row
    var i = evnt.parentNode.parentNode.rowIndex;
    

    var name = document.getElementById("new-name"+i);
    var address= document.getElementById("address"+i);
    var city = document.getElementById("city"+i);
    var pin = document.getElementById("pin"+i);
    var country = document.getElementById("country"+i); 

    var oldName = name.innerHTML;
    var oldAddress = address.innerHTML;
    var oldCity = city.innerHTML;
    var oldPin = pin.innerHTML;
    var oldCountry = country.innerHTML;
	
    name.innerHTML="<input type='text' id='new-name"+i+"' value='"+oldName+"'>";
    address.innerHTML="<input type='text' id='address"+i+"' value='"+oldAddress+"'>";
    city.innerHTML="<input type='text' id='city"+i+"' value='"+oldCity+"'>";
    pin.innerHTML="<input type='text' id='pin"+i+"' value='"+oldPin+"' >";
    country.innerHTML="<input type='text' id='country"+i+"' value='"+oldCountry+"'>";
}

function saveRow(id){
    var i = id.parentNode.parentNode.rowIndex;
    
    var saveName = document.getElementById("new-name"+i).value;

    document.getElementById("new-name"+ i).innerHTML=saveName;
}


function deleteRow(id) {
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById("newTable").deleteRow(i);
}

