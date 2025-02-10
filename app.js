// if data exist in localStorage OTHERWISE empty array
console.log('ABC');
// var users;

// 2nd way 
// if(!window.localStorage.getItem('lineRun')) {
//     users = [];
//     console.log(users);
//     window.localStorage.setItem('lineRun',true)
// } else {

//     users = JSON.parse(window.localStorage.getItem('Users'));
//     console.log(users);

// }
 
// 1st way 
var users = JSON.parse(window.localStorage.getItem('Users')) || [];
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
    console.log(users);
    console.log('here')

    // check user puts all the values 
    if ( usersData.userName && usersData.userEmail && usersData.userPhone && usersData.userPassword && usersData.userCity && usersData.userRole && usersData.userBirthDay ) {

        console.log('heloo');

        // console.log('yeloo');

        // users.push(usersData);

        // for check if any users already exits 
        if ( users.length >= 1 ) {

            console.log('teloo');
                
            // loop to check all the users one by one 
            for (var i = 0; i < users.length; i++) {

                console.log('yeloo');
                var userIs;

                // if exciting users email does not match to new user email, So assign 'new' in userIs,
                if (usersData.userEmail !== users[i].userEmail) {
                  
                    userIs = 'new';
                    console.log(userIs);
                    
                } else {
    
                    alert('this email already exits, use another email');
                    userIs = 'old';
                    console.log(userIs);
                    break;
                }

            } 

            console.log(userIs);
            
            if (userIs == 'new') {


                var totalAdmin = parseInt(window.localStorage.getItem('totalAdmin')) || 0;
                var totalManager = parseInt(window.localStorage.getItem('totalManager')) || 0;
                var totalEmployee = parseInt(window.localStorage.getItem('totalEmployee')) || 0;

                if (usersData.userRole == 'Admin') {

                    totalAdmin = totalAdmin + 1;
                    console.log(totalAdmin);
                    window.localStorage.setItem('totalAdmin',totalAdmin);

                } else if (usersData.userRole == 'Manager') {

                    totalManager = totalManager + 1;
                    window.localStorage.setItem('totalManager',totalManager);

                }
                 else if (usersData.userRole == 'Employee') {

                    totalEmployee = totalEmployee + 1;
                    window.localStorage.setItem('totalEmployee',totalEmployee);

                }

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

            }


        } else { //if user is first

            
            var totalAdmin = parseInt(window.localStorage.getItem('totalAdmin')) || 0;
            var totalManager = parseInt(window.localStorage.getItem('totalManager')) || 0;
            var totalEmployee = parseInt(window.localStorage.getItem('totalEmployee')) || 0;

            if (usersData.userRole == 'Admin') {

                totalAdmin = totalAdmin + 1;
                window.localStorage.setItem('totalAdmin',totalAdmin);

            } else if (usersData.userRole == 'Manager') {

                totalManager = totalManager + 1;
                window.localStorage.setItem('totalManager',totalManager);

            }
             else if (usersData.userRole == 'Employee') {

                totalEmployee = totalEmployee + 1;
                window.localStorage.setItem('totalEmployee',totalEmployee);

            }

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
        

    } else { //if user doesn't fill details 

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



// for rander back to signup page 
function againSignUp() {

    // rander back to sign up page
    document.location.href = './../index.html';
    // window.location.replace('./../index.html');
    // return false;

}





// for rander back to login page 
function againLogin() {

    // rander back to sign up page
    document.location.href = './login/login.html';
    // return false;

}





// for rander back to home page 
function showHome() {

    // rander back to sign up page
     document.location.href = './../homepage/home.html';
    //  home.style.backgroundColor = 'red';
    //  about.style.backgroundColor = '';
    //  contact.style.backgroundColor = '';
    //  services.style.backgroundColor = '';
    //  dashboard.style.backgroundColor = '';
    //  profile.style.backgroundColor = '';
    

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

    // if local Storage m kuch nhe, means ap ne signup hi nhe kia
    if(!parseUsers) {

        alert('You are not Sign up!');
        // back to sign up pageXOffset, sign up FIRST 
        window.location.href =  './../index.html';

    } else {
       
    // condition to check if data match, then go to homegape, other wise You write wrong data in login 
      for ( var i = 0; i < parseUsers.length; i++) {

        // declare isUser for prevent Multiple times answer
        var isUser;

        // if userLoginData match with any userData so assign 'match' in isUser 
        if (

            userLoginEmail == parseUsers[i].userEmail &&
            userLoginPassword == parseUsers[i].userPassword
            
        ) {

           isUser = 'match'; 
           window.localStorage.setItem('lastLoginUserEmail',userLoginEmail);
           alert('Login Successfully, Go to Homepage');
           window.location.href = './../homepage/home.html';
           break;

        } else {

            isUser = 'not match'
            // alert('Incorrect Name , Email or Password');

        }

      } 

      if (isUser == 'not match') {

        alert('Incorrect Name , Email or Password');

      }

    }



       
}





// ----------- showProfile
function showProfile() {

    window.location.href = './../profile/profile.html';

//     document.querySelector('.dashboardRight').innerHTML = `   
    
// <div class="dashboardRightContainer">

//     <!-- dashboardRightHeader is here  -->
//     <div class="dashboardRightHeader">

        
//         <div class="dashboardRightHeaderNav flex">

//             <!-- dashboardRightHeaderHeading is here  -->
//             <h2 class="dashboardRightHeaderHeading">Profile</h2>

//             <!-- dashboardRightHeaderRightSide is here  -->
//              <div class="dashboardRightHeaderRightSide flex">

//                 <div class="dashboardRightHeaderSearch flex">

//                     <span>@</span>
//                     <input type="text" placeholder="Search">

//                 </div>

//                 <button class="dashboardRightHeaderAddBtn">

//                     ADD USERS

//                 </button>

//                 <button class="dashboardRightHeaderInOf flex">

//                     <span> • • • </span>

//                 </button>



//              </div>
//         </div>

//             <!-- dashboardRightHeaderUsers is here  -->
//         <!-- <div class="dashboardRightHeaderUsers">

//                 <ul class="flex">

//                     <li><a href="#">All Users 235</a></li>

//                     <li><a href="#">Admins 35</a></li>

//                     <li><a href="#">Managers 50</a></li>

//                     <li><a href="#">Employes 150</a></li>

//                 </ul>
//         </div> -->


//     </div>


//     <!-- profileSection is here  -->
//     <div class="profileSection">


//         <!-- profileTop is here  -->
//         <div class="profileTop flex">

//             <!-- profilePhoto is here  -->
//             <div class="profilePhoto"></div>

//             <!-- profileName is here  -->
//             <div class="profileName">

//                 <h2>Muhammad Waqas</h2>
//                 <p>waqas123@gmail.com</p>
//                 <p>Admin</p>

                
//             <button class="editButton">
//                 <span>#</span> Edit
//             </button>

//             </div>

//         </div>

//         <!-- profileMid is here  -->
//         <div class="profileMid">

//             <h2>Personal Information</h2>
//             <button class="editButton">
//                 <span>#</span> Edit
//             </button>

//             <table>

//                 <tr>
                    
//                     <td>User Name</td>
//                     <td>Muhammad Waqas</td>

//                 </tr>

//                 <tr>

//                     <td>User Email</td>
//                     <td>Waqas123@gmail.com</td>

//                 </tr>

//                 <tr>

//                     <td>User Birth Day</td>
//                     <td>11 July 1996</td>

//                 </tr>

//                 <tr>

//                     <td>User Phone No.</td>
//                     <td>+920132466482</td>

//                 </tr>

//             </table>

//         </div>

//         <!-- profileBottom is here  -->
//         <div class="profileBottom">

//             <h2>Address </h2>
//             <button class="editButton">
//                 <span>#</span> Edit
//             </button>

//             <table>

//                 <tr>

//                     <td>Country</td>
//                     <td>Pakistan</td>
                    
//                 </tr>

//                 <tr>

//                     <td>City</td>
//                     <td>Karachi</td>

//                 </tr>

//             </table>

//         </div>

//     </div>

// </div>`
 
    // document.getElementById('profileLi').classList.add('liStyle');
    // document.getElementById('dashboardLi').classList.remove('liStyle');

}



// ------------ showProfile
function showDashboard() {

    window.location.href = './../dasboard/dashboard.html';

    // document.querySelector('.dashboardRightContainer').innerText = 'abc';
    // document.getElementById('tableForData').innerHTML += 'Hello';
    // document.getElementById('abcd').innerHTML = 'Hello';

//     document.querySelector('.dashboardRight').innerHTML = `
    
// <div class="dashboardRightContainer">

//     <!-- dashboardRightHeader is here  -->
//     <div class="dashboardRightHeader">


//         <div class="dashboardRightHeaderNav flex">

//         <!-- dashboardRightHeaderHeading is here  -->
//         <h2 class="dashboardRightHeaderHeading">USERS</h2>

//         <!-- dashboardRightHeaderRightSide is here  -->
//         <div class="dashboardRightHeaderRightSide flex">

//             <div class="dashboardRightHeaderSearch flex">

//                 <span>@</span>
//                 <input type="text" placeholder="Search">

//             </div>

//             <button class="dashboardRightHeaderAddBtn">

//                 ADD USERS

//             </button>

//             <button class="dashboardRightHeaderInOf flex">

//                 <span> • • • </span>

//             </button>



//         </div>
//         </div>

//         <!-- dashboardRightHeaderUsers is here  -->
//         <div class="dashboardRightHeaderUsers">

//             <ul class="flex">

//                 <li><a href="#">All Users 235</a></li>

//                 <li><a href="#">Admins 35</a></li>

//                 <li><a href="#">Managers 50</a></li>

//                 <li><a href="#">Employes 150</a></li>

//             </ul>
//         </div>

//     </div>

//     <!-- dashboardRightData is here  -->
//     <div class="dashboardRightData">

//         <table>

//             <tr class="Tableheadings">


//                 <td>User Name</td>
//                 <td>User Email</td>
//                 <td>User City</td>
//                 <td>User Type</td>

//             </tr>

//             <tr>

//                 <td>Muhammad Waqas</td>
//                 <td>waqas123@gmail.com</td>
//                 <td>Karachi</td>
//                 <td>Admin</td>

//             </tr>  

//             <tr>

//                 <td>Zeeshan Ahmed</td>
//                 <td>zeeshansd63@gmail.com</td>
//                 <td>Lahore</td>
//                 <td>Manager</td>

//             </tr>

//             <tr>

//                 <td>Nehal Qureshi</td>
//                 <td>nehal80@gmail.com</td>
//                 <td>Multan</td>
//                 <td>Employe</td>

//             </tr>

//             <tr>

//                 <td>Abdullah</td>
//                 <td>abdullah99@gmail.com</td>
//                 <td>Quetta</td>
//                 <td>Admin</td>

//             </tr>

//             <tr>

//                 <td>Muhammad Waqas</td>
//                 <td>waqas123@gmail.com</td>
//                 <td>Karachi</td>
//                 <td>Admin</td>

//             </tr>  

//             <tr>

//                 <td>Zeeshan Ahmed</td>
//                 <td>zeeshansd63@gmail.com</td>
//                 <td>Lahore</td>
//                 <td>Manager</td>

//             </tr>

//             <tr>

//                 <td>Nehal Qureshi</td>
//                 <td>nehal80@gmail.com</td>
//                 <td>Multan</td>
//                 <td>Employe</td>

//             </tr>

//             <tr>

//                 <td>Abdullah</td>
//                 <td>abdullah99@gmail.com</td>
//                 <td>Quetta</td>
//                 <td>Admin</td>

//             </tr>

//         </table>
        
//     </div>

// </div>`
    
    // document.getElementById('dashboardLi').classList.add('liStyle');
    // document.getElementById('profileLi').classList.remove('liStyle');

}






// --------------- searching
function searchData() {
    let searchInput = document.querySelector('#SearchInput').value.toLowerCase();
    let trs = document.querySelectorAll('#trForUsers tr');
    
    console.log(trs); // node list of trs of tbody
    for(let i = 0; i < trs.length ; i++) {

        // first time m i = 0, SO [trs[0].getElementsByTagName('td')[0]] BECAUES ('td')[0] TR K ANDER 4 TDS HN, HUMAIN SRIF 1 CHAHIE
        let td = trs[i].getElementsByTagName('td')[0];

        if(td) {

            let tdValue = td.innerHTML;

            // 'ABCD'.INDEXOF(BCD) ===> 1 WHICH IS > -1
            if(tdValue.toLowerCase().indexOf(searchInput) > -1) {

                // TO US TR KO KUCH NHE KRO
                trs[i].style.display = '';

            } else {

                // AGER CONDITION FALSE HOTI H TO, US TR K NONE KR DO
                trs[i].style.display = 'none';

            }
        }
    }
}



// ------ for uploading pic 
if(document.getElementById('profile-pic')) {

    let profilePic = document.getElementById('profile-pic'); // img
    let fileInput = document.getElementById('file-input'); // input

    // window.localStorage.setItem('profilePic',URL.createObjectURL(fileInput.files[0]));
    // profilePic.src = window.localStorage.getItem('profilePic'); // same

    // ager local storage m img ka url h to
    if(window.localStorage.getItem('profilePic')) {
        profilePic.src = window.localStorage.getItem('profilePic'); // same
    } 

    // Issue yeh hai ke tum URL.createObjectURL(fileInput.files[0]) ka use kar rahe ho, jo ek temporary blob URL generate karta hai. Yeh URL sirf tab tak valid rehta hai jab tak page refresh nahi hota. Jese hi page refresh hota hai, woh blob URL invalid ho jata hai, is wajah se image load nahi ho rahi.

    // console.log('after refreash',  window.localStorage.getItem('profilePic'));

    // fileInput.onchange = function() {
    //     window.localStorage.setItem('profilePic',URL.createObjectURL(fileInput.files[0]));
    //     profilePic.src = window.localStorage.getItem('profilePic'); // same

    //     // console.log(URL.createObjectURL(fileInput.files[0],'URL.createObjectURL(fileInput.files[0]'));
    //     // console.log(window.localStorage.getItem('profilePic'),'local');
    //     // console.log(profilePic.src,'profilePic.src');
    // }

    // Base64 String Method
    fileInput.onchange = function () {
        let file = fileInput.files[0]; // selected img file
        let reader = new FileReader(); // new (1)
    
        // jab fileReader ka kam khatam hoga Tab ye chaly ga (3)
        reader.onload = function (event) {
          let base64Image = event.target.result;
          window.localStorage.setItem("profilePic", base64Image);
          profilePic.src = base64Image;
        };
    
        reader.readAsDataURL(file); // (2) file reading ka kam start kia
      };


      /* 
Yeh onchange event listener hai jo tab chalega jab user koi naya image file select karega.

fileInput.files[0] → Yeh user ka selected image file hai.

new FileReader() → File ko read karne ke liye ek FileReader object banaya.
      
reader.onload tab chalega jab FileReader file read kar lega.

event.target.result → Yeh us file ka Base64 string hai (matlab ek text representation of the image).

localStorage.setItem("profilePic", base64Image); → Base64 string ko localStorage me save kar diya taa ke refresh ke baad bhi mil sake.

profilePic.src = base64Image; → Image ko <img> tag ke src me set kiya taa ke dikh sake.

readAsDataURL(file) file ko Base64 me convert karta hai.

Jab conversion complete hoti hai, onload function chalta hai aur image ko localStorage me store kar deta hai.

new FileReader(); → Ek FileReader object bana.
onload function define kiya → Yeh tabhi chalega jab FileReader ka kaam complete hoga.
readAsDataURL(file); → File read hone ka process start kiya.
Jaise hi file ka reading complete hoti hai, onload function execute hota hai.

*/
}

// for mobile device navbar 
let toggle = document.querySelector('.toggle');
let leftBar = document.querySelector('.leftBar');

console.log(toggle,leftBar);

// add event on toggle to show navbar 
toggle.addEventListener('click', () => {

    leftBar.classList.toggle("active");

}
);

// var home = document.getElementById('home');
// var about = document.getElementById('about');
// var services = document.getElementById('services');
// var contact = document.getElementById('contact');
// var dashboard = document.getElementById('dashboard');
// var profile = document.getElementById('profile');



// home.addEventListener('click', ()=> {

//     home.classList.add('none')
//     contact.classList.remove('none') 
//     services.classList.remove('none')
//     dashboard.classList.remove('none')
//     profile.classList.remove('none')

// });

// services.addEventListener('click', ()=> {

//     services.classList.add('none')
//     contact.classList.remove('none') 
//     home.classList.remove('none')
//     dashboard.classList.remove('none')
//     profile.classList.remove('none')

// });

// contact.addEventListener('click', ()=> {

//     contact.classList.add('none')
//     services.classList.remove('none') 
//     home.classList.remove('none')
//     dashboard.classList.remove('none')
//     profile.classList.remove('none')

// });

// profile.addEventListener('click', ()=> {

//     profile.classList.add('none')
//     services.classList.remove('none') 
//     home.classList.remove('none')
//     dashboard.classList.remove('none')
//     contact.classList.remove('none')

// });

// dashboard.addEventListener('click', ()=> {

//     dashboard.classList.add('none')
//     services.classList.remove('none') 
//     home.classList.remove('none')
//     profile.classList.remove('none')
//     contact.classList.remove('none')

// });


// var lis = document.querySelectorAll('li');

// lis.forEach( (li) => {
    
//     li.addEventListener('click', () => {

//         lis.forEach( (li) => 
//             li.style.backgroundColor = ''
//         );

//         li.style.backgroundColor = 'red';

//     });

// });



// QUESTION 
// 1-- line page pr ja rha hun to js start se rander ho rhi h aur uski 1 line ne array empty assign ho rha h 