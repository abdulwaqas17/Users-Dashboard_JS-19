// if data exist in localStorage OTHERWISE empty array
console.log('ABC');
var users;

// 2nd way 
if(!window.localStorage.getItem('lineRun')) {
    users = [];
    console.log(users);
    window.localStorage.setItem('lineRun',true)
} else {

    users = JSON.parse(window.localStorage.getItem('Users'));
    console.log(users);
}
 
// 1st way 
// let users = JSON.parse(window.localStorage.getItem('Users')) || [];
console.log(users);

// getting data through id and store in local storage 
function signupDataStore() {
   
    // obj for users data 
    let usersData = {

        userName : document.getElementById('userName').value,
        userEmail : document.getElementById('userEmail').value,
        userPhone : document.getElementById('userPhone').value,
        userPassword : document.getElementById('userPassword').value,
        userCity : document.getElementById('userCity').value,
        userRole : document.getElementById('userRole').value,
        userBirthDay : document.getElementById('userBirthDay').value

    }

    // // push an obj in the users array 
    // users.push(usersData);
    // console.log(users);
    console.log('here')

    if ( usersData.userName && usersData.userEmail && usersData.userPhone && usersData.userPassword && usersData.userCity && usersData.userRole && usersData.userBirthDay ) {

        console.log('heloo');

        // console.log('yeloo');

        // users.push(usersData);

        if ( users.length >= 1 ) {

            console.log('teloo');

            for (var i = 0; i < users.length; i++) {

                console.log('yeloo');
                if (usersData.userEmail !== users[i].userEmail) {
    
                    // push an obj in the users array 
                    users.push(usersData);
                    console.log(users);         
                    // convert array into string 
                    let usersStr = JSON.stringify(users);
                    console.log(usersStr);
                    // store user array (string form) in local storage 
                    window.localStorage.setItem('Users',usersStr);
                    // to render login page 
                    window.location.href ='./login/login.html'; 
                    
                    
                } else {
    
                    alert('this email already exits, use another email');
                    break;
                }
            } 

        } else {

            users.push(usersData);
            console.log(users);         
            // convert array into string 
            let usersStr = JSON.stringify(users);
            console.log(usersStr);
            // store user array (string form) in local storage 
            window.localStorage.setItem('Users',usersStr);
            // to render login page 
            window.location.href ='./login/login.html';  

        }
        

    } else {

        alert('Kindly fill all the details');

    }

    console.log('meloo');
    // // convert array into obj 
    // let usersStr = JSON.stringify(users);
    // console.log(usersStr);
    // // store user array (string form) in local storage 
    // window.localStorage.setItem('Users',usersStr);
    // // to render login page 
    // window.location.href ='./login/login.html';
    // // window.location.replace('./login/login.html');
    // // return false;
}

// console.log(users);


function againSignUp() {

    // rander back to sign up page
    // document.location.href = './../index.html';
    window.location.replace('./../index.html');
    // return false;

}

function againLogin() {

    // rander back to sign up page
    document.location.href = './login/login.html';
    // return false;

}


// match the data to local storage and go to homepage 
function loginMatchData() {

    // get the value of login field through id 
    // var userLoginName = document.getElementById('userLoginName').value;
    var userLoginEmail = document.getElementById('userLoginEmail').value;
    var userLoginPassword = document.getElementById('userLoginPassword').value;

    // check by console value of above field 
    // console.log(userLoginName,userLoginEmail,userLoginPassword);

    // get values through localStorage 
    var getUsersStr = window.localStorage.getItem('Users');
    console.log(getUsersStr);
    var parseUsers = JSON.parse(getUsersStr);
    console.log(parseUsers);


    // condition to check if data match, then go to homegape, other wise You write wrong data in login 
        for ( var i = 0; i < parseUsers.length; i++) {

            if (

                userLoginEmail == parseUsers[i].userEmail &&
                userLoginPassword == parseUsers[i].userPassword
                
            ) {

               alert('Login Successfully, Go to Homepage');
               window.location.href = './../homepage/home.html';


            } else {

                alert('Incorrect Name , Email or Password');

            }

        } 

       
}


function showProfile() {

    document.querySelector('.dashboardRight').innerHTML = `   
    
<div class="dashboardRightContainer">

    <!-- dashboardRightHeader is here  -->
    <div class="dashboardRightHeader">

        
        <div class="dashboardRightHeaderNav flex">

            <!-- dashboardRightHeaderHeading is here  -->
            <h2 class="dashboardRightHeaderHeading">Profile</h2>

            <!-- dashboardRightHeaderRightSide is here  -->
             <div class="dashboardRightHeaderRightSide flex">

                <div class="dashboardRightHeaderSearch flex">

                    <span>@</span>
                    <input type="text" placeholder="Search">

                </div>

                <button class="dashboardRightHeaderAddBtn">

                    ADD USERS

                </button>

                <button class="dashboardRightHeaderInOf flex">

                    <span> • • • </span>

                </button>



             </div>
        </div>

            <!-- dashboardRightHeaderUsers is here  -->
        <!-- <div class="dashboardRightHeaderUsers">

                <ul class="flex">

                    <li><a href="#">All Users 235</a></li>

                    <li><a href="#">Admins 35</a></li>

                    <li><a href="#">Managers 50</a></li>

                    <li><a href="#">Employes 150</a></li>

                </ul>
        </div> -->


    </div>


    <!-- profileSection is here  -->
    <div class="profileSection">


        <!-- profileTop is here  -->
        <div class="profileTop flex">

            <!-- profilePhoto is here  -->
            <div class="profilePhoto"></div>

            <!-- profileName is here  -->
            <div class="profileName">

                <h2>Muhammad Waqas</h2>
                <p>waqas123@gmail.com</p>
                <p>Admin</p>

                
            <button class="editButton">
                <span>#</span> Edit
            </button>

            </div>

        </div>

        <!-- profileMid is here  -->
        <div class="profileMid">

            <h2>Personal Information</h2>
            <button class="editButton">
                <span>#</span> Edit
            </button>

            <table>

                <tr>
                    
                    <td>User Name</td>
                    <td>Muhammad Waqas</td>

                </tr>

                <tr>

                    <td>User Email</td>
                    <td>Waqas123@gmail.com</td>

                </tr>

                <tr>

                    <td>User Birth Day</td>
                    <td>11 July 1996</td>

                </tr>

                <tr>

                    <td>User Phone No.</td>
                    <td>+920132466482</td>

                </tr>

            </table>

        </div>

        <!-- profileBottom is here  -->
        <div class="profileBottom">

            <h2>Address </h2>
            <button class="editButton">
                <span>#</span> Edit
            </button>

            <table>

                <tr>

                    <td>Country</td>
                    <td>Pakistan</td>
                    
                </tr>

                <tr>

                    <td>City</td>
                    <td>Karachi</td>

                </tr>

            </table>

        </div>

    </div>

</div>`
 
    document.getElementById('profileLi').classList.add('liStyle');
    document.getElementById('dashboardLi').classList.remove('liStyle');

}

function showDashboard() {

    document.querySelector('.dashboardRight').innerHTML = `
    
<div class="dashboardRightContainer">

    <!-- dashboardRightHeader is here  -->
    <div class="dashboardRightHeader">


        <div class="dashboardRightHeaderNav flex">

        <!-- dashboardRightHeaderHeading is here  -->
        <h2 class="dashboardRightHeaderHeading">USERS</h2>

        <!-- dashboardRightHeaderRightSide is here  -->
        <div class="dashboardRightHeaderRightSide flex">

            <div class="dashboardRightHeaderSearch flex">

                <span>@</span>
                <input type="text" placeholder="Search">

            </div>

            <button class="dashboardRightHeaderAddBtn">

                ADD USERS

            </button>

            <button class="dashboardRightHeaderInOf flex">

                <span> • • • </span>

            </button>



        </div>
        </div>

        <!-- dashboardRightHeaderUsers is here  -->
        <div class="dashboardRightHeaderUsers">

            <ul class="flex">

                <li><a href="#">All Users 235</a></li>

                <li><a href="#">Admins 35</a></li>

                <li><a href="#">Managers 50</a></li>

                <li><a href="#">Employes 150</a></li>

            </ul>
        </div>

    </div>

    <!-- dashboardRightData is here  -->
    <div class="dashboardRightData">

        <table>

            <tr class="Tableheadings">


                <td>User Name</td>
                <td>User Email</td>
                <td>User City</td>
                <td>User Type</td>

            </tr>

            <tr>

                <td>Muhammad Waqas</td>
                <td>waqas123@gmail.com</td>
                <td>Karachi</td>
                <td>Admin</td>

            </tr>  

            <tr>

                <td>Zeeshan Ahmed</td>
                <td>zeeshansd63@gmail.com</td>
                <td>Lahore</td>
                <td>Manager</td>

            </tr>

            <tr>

                <td>Nehal Qureshi</td>
                <td>nehal80@gmail.com</td>
                <td>Multan</td>
                <td>Employe</td>

            </tr>

            <tr>

                <td>Abdullah</td>
                <td>abdullah99@gmail.com</td>
                <td>Quetta</td>
                <td>Admin</td>

            </tr>

            <tr>

                <td>Muhammad Waqas</td>
                <td>waqas123@gmail.com</td>
                <td>Karachi</td>
                <td>Admin</td>

            </tr>  

            <tr>

                <td>Zeeshan Ahmed</td>
                <td>zeeshansd63@gmail.com</td>
                <td>Lahore</td>
                <td>Manager</td>

            </tr>

            <tr>

                <td>Nehal Qureshi</td>
                <td>nehal80@gmail.com</td>
                <td>Multan</td>
                <td>Employe</td>

            </tr>

            <tr>

                <td>Abdullah</td>
                <td>abdullah99@gmail.com</td>
                <td>Quetta</td>
                <td>Admin</td>

            </tr>

        </table>
        
    </div>

</div>`
    
    document.getElementById('dashboardLi').classList.add('liStyle');
    document.getElementById('profileLi').classList.remove('liStyle');

}





// QUESTION 
// 1-- line page pr ja rha hun to js start se rander ho rhi h aur uski 1 line ne array empty assign ho rha h 