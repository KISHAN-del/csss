let firstName = document.getElementById("txtFirstName");
let txtAddress = document.getElementById("txtAddress");
let txtZip = document.getElementById("txtZip");
let state = document.getElementById("state");
let userName = document.getElementById("txtUserName");

let email = document.getElementById("txtEmail");


let form = document.querySelector("form");

function validateInput() {
    console.log(userName);
    if (firstName.value.trim() === "") {
        onError(firstName, "First Name cannot be empty");
    }

    else {
        onSuccess(firstName);
    }

    if (txtAddress.value.trim() === "") {
        onError(txtAddress, " Address cannot be empty");
    }

    else {
        onSuccess(txtAddress);
    }
    if (txtZip.value.trim() === "") {
        onError(txtZip, " Zip-Code cannot be empty");
    }

    else {
        onSuccess(txtZip);
    }

    if (state.options[state.selectedIndex].text === "State") {
        alert("Please select any state");
    }






    //check username is empty 
    if (userName.value.trim() === "") {
        onError(userName, "User Name cannot be empty");
    }
    else if ((userName.value.trim()).length < 6 || (userName.value.trim()).length > 8) {
        onError(userName, "User Name can only be  6-8 characters");
    }
    else {
        onSuccess(userName);
    }


    if (email.value.trim() === "") {
        onError(email, "Email cannot be empty");
    } else {
        if (!isValidEmail(email.value.trim())) {
            onError(email, "Email is not valid");
        }
        else {
            onSuccess(email);
        }
    }



}

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}