

// home navbar setting

const home = document.getElementById ('vectorHome');
const menu = document.getElementById ('menu');

home.addEventListener('click', ()=>{
    home.classList.toggle ('fa-times');

    if (menu.style.opacity==0) {
   showNav (menu);
}
    else {
       hideNav(menu);  
    }



menu.addEventListener('mouseout', ()=>{


})
});

const login = document.getElementById('login');
const lock = document.getElementById('vectorLock');
const exit = document.getElementById('exit');
const heart = document.getElementById ('vectorHeart');


lock.addEventListener ('click', ()=> {

showNav (login);
hideNav (home);
hideNav (menu);
hideNav (lock);
hideNav (heart);

});

exit.addEventListener ('click', ()=>{
    hideNav (login);
    showNav  (home);
    showNav (lock);
    showNav (heart);
});

function hideNav (item) {
    item.style.opacity= 0;
    item.style.transform = 'scale(0)';
    item.style.transition= '0.3s';
}

function showNav (item) {
    item.style.opacity= 1;
    item.style.transform = 'scale(1)';
    item.style.transition= '0.3s';
}




// product object database 

const products = [  
                    { brand: 'Yves Saint Laurent',
                      shop: 'Mon Paris',
                      price: 37000,
                      img: '',
                      id: 1,
                      'bestseller': true,
                      'newProd': false,
                      'discount': false

                    },


                    { brand: 'Givenchy Beauty',
                      shop: "L'Interdit",
                      price: 45700,
                      img: '',
                      id: 2,
                      bestseller: true,
                      newProd: false,
                      discount: false

                    },

                    { brand: 'Giorgio Armani',
                      shop: "Prive Orangerie Venise",
                      price: 69600,
                      img: '',
                      id: 3,
                      bestseller: true,
                      newProd: false,
                      discount: false

                    },


    
                    { brand: 'Montale',
                      shop: 'Vetiver des Sables',
                      price: 45200,
                      img: '',
                      id: 4,
                      bestseller: false,
                      newProd: true,
                      discount: false

                    },

                    { brand: 'Chistian Dior',
                      shop: 'Miss Dior',
                      price: 70000,
                      img: '',
                      id: 5,
                      bestseller: false,
                      newProd: true,
                      discount: false
                    },

                    { brand: 'Byredo',
                      shop: 'Flowerhead',
                      price: 66000,
                      img: '',
                      id: 6,
                      bestseller: false,
                      newProd: true,
                      discount: false
                    },

                    { brand: 'Miracle',
                      shop: 'Lancome',
                      price: 40000,
                      img: '',
                      id: 7,
                      bestseller: false,
                      newProd: true,
                      discount: false
                    },

                    { brand: 'Yves Saint Laurent',
                      shop: 'Splendid Wood',
                      price: 104200,
                      img: '',
                      id: 8,
                      bestseller: false,
                      newProd: false,
                      discount: true,
                      discountPercentage:'-49%'
                      
                    }

]





// filter interaction

const bestseller = document.getElementById ('filter1'),
      newProd = document.getElementById ('filter2'),
      discount = document.getElementById ('filter3'),
      productBoxes = document.getElementById ('products');


 let filterTypes = [bestseller, newProd, discount],
     filterNames = ['bestseller', 'newProd', 'discount'];



 for (let i=0; i<3; i++){
    filterClick (filterTypes[i],filterNames[i] );
}

function filterClick (filter, filterNames) {
    

    filter.addEventListener ('click', ()=> {
            
        filterTypes.forEach((item)=>{
            item['style']['height'] = '63px';
            item['style']['width'] = '18.96%;';
            item['style']['background'] ='white';
            item['style']['marginTop'] = '98px';
            item['style']['border'] ='4px solid #4EBAB6';
            item['style']['boxShadow'] = 'none';    
        });

            filter['style']['height'] = '99px';
            filter['style']['width'] = '20.31%';
            filter['style']['background'] ='#4EBAB6';
            filter['style']['marginTop'] = '78px';
            filter['style']['boxShadow'] = ' 5px 12px 19px rgba(0, 0, 0, 0.25)';
    


        productBoxes.innerHTML = "";
        products.forEach ((item)=>{

            if (item[filterNames] ==true){
                productBoxes.innerHTML += `
                <div id="product">
                <h1>${item['brand']}</h1>
                <h3>${item['shop']}</h3>
                <h2>${item['price']} T</h2>
            </div>`;
             }
        
        });
    });
}

//pressing lock botton 

const input1 = document.getElementById ('circle1'),
      input2 = document.getElementById('circle2'),
      input3 = document.getElementById('circle3'),
      check1 = document.querySelector('#check1'),
      check2 = document.querySelector('#check2'),
      check3 = document.querySelector('#check3');

      const input = [input1, input2, input3];
      const check = [check1, check2, check3];

    for (let i=0; i<3; i++){
        changeOpacity(input[i], check[i]);
    }

    function changeOpacity (input, checkMark){
        input.addEventListener ('click', ()=>{

            for (let j=0; j<3; j++){
                check[j].style.opacity ='0%';
            }
            checkMark.style.opacity = '100%';
        }); 
    }






// login storage and show 

document.querySelector('#register').addEventListener ('click', register);
document.querySelector('#signIn').addEventListener ('click', signIn);

let accountNum = 1;
function get_username () {
    let username ={
        name : '',
        password: '',
        id: ''
    };
    let localName = 'userName';
    localName += String(accountNum);
    let username_str = localStorage.getItem(localName);
    if(username_str !== null){
        username = JSON.parse(username_str);
    }
    username.id = accountNum;
    return [username, localName];
}


function register () {
    // login.style.animation = 'none';
    var user = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var getUsername = get_username();
    var username = getUsername[0];
    var localName =getUsername[1];
    
    username.name+=user;
    username.password+=password;
    localStorage.setItem(localName, JSON.stringify(username));
    user = '';
    password= '';
    login.innerHTML = '';
    login.innerHTML += `
    <div id="successLogin">
    <h1> username: ${username.name} </h1>
    <div id="signOut"> Выйти </div>
    <div id="exit">x</div>
    </div>
    `;
    username.id = accountNum;
    accountNum++;
    document.querySelector('#signOut').addEventListener ('click', signOut);
    // exit.addEventListener ('click', ()=>{
    //     hideNav (login);
    //     showNav  (home);
    //     showNav (lock);
    //     showNav (heart);
    // });
    return false;
}


function signIn () {
    // login.style.animation = 'none';
    var user = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var enter = false;

    for (let index =1; index<=accountNum; index++){
        let username ={
            name : '',
            password: '',
            id: ''
        };
        let localName = 'userName';
        localName += index;
        let username_str = localStorage.getItem(localName);
        if(username_str !== null){
            username = JSON.parse(username_str);
        }

    if (username.name==user &&
        username.password==password && username.id==index) {

    login.innerHTML = '';
    login.innerHTML += `
    <div id="successLogin">
    <h1> Добро пожаловать, ${username.name} </h1>
    <div id="signOut"> Выйти </div>
    <div id="exit">x</div>
    </div>
    `;
            user = '';
            password = '';
    document.querySelector('#signOut').addEventListener ('click', signOut);
    
//     exit.addEventListener ('click', ()=>{
//     hideNav (login);
//     showNav  (home);
//     showNav (lock);
//     showNav (heart);
// });
    return '';
}
        
    }
    
        user = '';
        password = '';
        login.innerHTML = '';
        login.innerHTML += `
        <p id ="wrongInput">Неверное имя пользователя или пароль</p>
        <p id="usernameAsk">
              Имя Пользователя
            </p>
       
            <input id="usernameInput" type="username">
       
            <p id="passwordAsk">
               Пароль
             </p>
             <input id="passwordInput" type="password">
       
            <div id="register">Зарегистрироваться</div>
            <div id="signIn">Войти</div>
            <div id="exit">x</div>
        `;
    //    login.style.animation = 'wrongUsername 2s linear';
        document.querySelector('#register').addEventListener ('click', register);
        document.querySelector('#signIn').addEventListener ('click', signIn);
        exit.addEventListener ('click', ()=>{
            hideNav (login);
            showNav  (home);
            showNav (lock);
            showNav (heart);
        });
    return false;

}


function clearDefault(){

    let user = document.getElementById('usernameInput').value;
    user = '';


};

function signOut(){
    login.style.animation = 'none';
        login.innerHTML = '';
        login.innerHTML += `
        <p id="usernameAsk">
              Имя Пользователя
            </p>
       
            <input id="usernameInput" type="username">
       
            <p id="passwordAsk">
               Пароль
             </p>
             <input id="passwordInput" type="password">
       
            <div id="register">Зарегистрироваться</div>
            <div id="signIn">Войти</div>
            <div id="exit">x</div>
        `;
           

           document.querySelector('#register').addEventListener ('click', register);

           document.querySelector('#signIn').addEventListener ('click', signIn);

        
           
         
           return false;
}    






