// console.log(window.document.body)

// selection methods 
// getelementbyId 
// getelementsbyIclassname
// getelementsbyITagname

// let ele = document.getElementsByTagName("h1")
// console.log(ele[0])

// ele[0].innerText="Recent flood incident in Nepal"

// password validatiion .display error if password length is less than 8


let elepass = document.getElementById("pass")

elepass.addEventListener("input", function () {
    if(elepass.value.length<8){
        document.getElementById("message").innerText="password must be atleast 8 characters."
    }
    else{

        document.getElementById("message").innerText="password is strong."
    

    }

})