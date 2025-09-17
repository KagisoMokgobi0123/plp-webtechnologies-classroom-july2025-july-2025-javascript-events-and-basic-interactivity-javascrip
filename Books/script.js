let searchBox = document.getElementById("search")

searchBox.addEventListener("focus",function(){
    this.style.background = "white";
})
searchBox.addEventListener("blur",function(){
    this.style.background = " ";
})



function closeBox(){
    let closeForm = document.getElementById("formDiv")

    closeForm.style.display = "none"
};

function openBox(){
    let openForm = document.getElementById("formDiv")
    openForm.style.display = "flex"
}


function bodyClick(){

    let bodyMode = document.getElementById("main_Content")
    let modeButton = document.getElementById("mode")
    let formDiv = document.getElementById("form")

    let bodyStyle = bodyMode.style.backgroundColor
    
    if(bodyStyle === "black"){  
        bodyMode.style.backgroundColor = "white"
        modeButton.textContent  = "Dark Mode"    
        formDiv.style.backgroundColor = "white"
    }
    else {
        
        bodyMode.style.backgroundColor = "black"
        modeButton.textContent = "Light Mode"      
        formDiv.style.backgroundColor = "#ddd"
    }
};
// get user details
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("userEmail");
    const password = document.getElementById("userPassword");

    const nameMsg = document.getElementById("nameMsg");
    const emailMsg = document.getElementById("emailMsg");
    const passwordMsg = document.getElementById("passwordMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        if (fullName.value.trim().length < 2) {
            nameMsg.textContent = "Full name must be at least 2 characters."
            valid = false;
        } else {
            nameMsg.textContent = ""
        }
        
        const province = document.getElementById("address")
        const provinceMsg = document.getElementById("addressMsg")

        if (province.value === "") {
            provinceMsg.textContent = "Please select a province."
            valid = false;
        } else {
            provinceMsg.textContent = "";
        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailMsg.textContent = "Please enter a valid email address.";
            valid = false;
        } else {
            emailMsg.textContent = "";
        }

        const passwordVal = password.value.trim();
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!strongPassword.test(passwordVal)) {
            passwordMsg.textContent = "Password must be 8+ chars \n Include uppercase, lowercase\n number.";
            valid = false;
        } else {
            passwordMsg.textContent = "";
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});
