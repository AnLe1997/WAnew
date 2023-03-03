let introBlock1 = document.getElementById("intro-block1");
let introBlock2 = document.getElementById("intro-block2");
let introBlock3 = document.getElementById("intro-block3");
let introDes1 = document.getElementById("intro-des1");
let introDes2 = document.getElementById("intro-des2");
let introDes3 = document.getElementById("intro-des3");

introBlock1.addEventListener("mouseenter", function () {
    introBlock1.style.backgroundColor = "white";
    introBlock1.style.color = "black";
    introDes1.style.display = "block"
})
introBlock2.addEventListener("mouseenter", function () {
    introBlock2.style.backgroundColor = "white";
    introBlock2.style.color = "black";
    introDes2.style.display = "block"
})
introBlock3.addEventListener("mouseenter", function () {
    introBlock3.style.backgroundColor = "white";
    introBlock3.style.color = "black";
    introDes3.style.display = "block"
})

introBlock1.addEventListener("mouseleave", function () {
    introBlock1.style.backgroundColor = "";
    introBlock1.style.color = "white";
    introDes1.style.display = "none"
})
introBlock2.addEventListener("mouseleave", function () {
    introBlock2.style.backgroundColor = "";
    introBlock2.style.color = "white";
    introDes2.style.display = "none"
})
introBlock3.addEventListener("mouseleave", function () {
    introBlock3.style.backgroundColor = "";
    introBlock3.style.color = "white";
    introDes3.style.display = "none"
})

//listUsers: lưu trữ id người dùng
//listPassword: lưu trữ pass người dùng
//listUserName: lưu trữ tên người dùng
function signUp() {
    let input_email = document.getElementById("email").value;
    let input_password = document.getElementById("password").value;
    let input_name = document.getElementById("name").value;
    let caseBlock = document.getElementById("checkCase");

    let listUsers = [];
    let listPassword = [];
    let listUserName = [];
    let isAcountExist = false;

    if (JSON.parse(localStorage.getItem("listUsers") != null)) {
        listUsers = JSON.parse(localStorage.getItem("listUsers"));
    }
    if (JSON.parse(localStorage.getItem("listPassword") != null)) {
        listPassword = JSON.parse(localStorage.getItem("listPassword"));
    }
    if (JSON.parse(localStorage.getItem("listUserName") != null)) {
        listUserName = JSON.parse(localStorage.getItem("listUserName"));
    }

    if (input_email == "" || input_password == "" || input_name == "") {
        console.log("Error");
        caseBlock.innerHTML = "Sign up false, please fill in all areas";
        caseBlock.style.color = "red";
    }
    else {
        for (let i = 0; i < listUsers.length; i++) {
            if (input_email == listUsers[i]) {
                caseBlock.innerHTML = "Account already exist, choose different name";
                caseBlock.style.color = "red";
                isAcountExist = true;
            }
        }
        if (!isAcountExist) {
            //thêm vào array id, password, name
            listUsers.push(input_email);
            listPassword.push(input_password);
            listUserName.push(input_name);

            localStorage.setItem("listUsers", JSON.stringify(listUsers));
            localStorage.setItem("listPassword", JSON.stringify(listPassword));
            localStorage.setItem("listUserName", JSON.stringify(listUserName));

            caseBlock.style.display = "block";
            caseBlock.innerHTML = "Sign in successfull";
            caseBlock.style.color = "green";
            setTimeout(function () { location.replace("login.html") }, 2000)
            console.log("Sign up successful");
            console.log("Email: ", input_email);
            console.log("Password: ", input_password);
            console.log("Name: ", input_name)
        }
    }
}

function signIn() {
    let input_email_login = document.getElementById("email").value;
    let input_password_login = document.getElementById("password").value;
    let caseBlock = document.getElementById("checkCase");

    let listUsers = JSON.parse(localStorage.getItem("listUsers"));
    let listPassword = JSON.parse(localStorage.getItem("listPassword"));
    let listUserName = JSON.parse(localStorage.getItem("listUserName"));

    for (let i = 0; i < listUsers.length && i < listPassword.length; i++) {
        if (input_email_login == listUsers[i] && input_password_login == listPassword[i]) {
            localStorage.setItem("recentUser", i);
            caseBlock.style.display = "block";
            caseBlock.innerHTML = "Sign in successful";
            caseBlock.style.color = "green";
            setTimeout(function () { location.replace("index.html") }, 2000)
            break;
        }
        else {
            caseBlock.innerHTML = "Login false, please try again";
            caseBlock.style.color = "red";
        }
        
    } 
}

function setname() {
    if (localStorage.getItem("recentUser") != null) {
        let user = JSON.parse(localStorage.getItem("recentUser"));
        let username = JSON.parse(localStorage.getItem("listUserName"));
        document.getElementById("message").innerHTML = "Hello " + username[Number(user)] + " !";
    }
}