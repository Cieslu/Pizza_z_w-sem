const pizzas = ["Margherita", "Pepperoni", "Capricciosa", "Hawajska", "Vegetariana", "Pescatora", "Al Pollo", "Diablo", "Vesuvio", "Chorizo", "Prosciutto", "Salami", "Carbonara", "Classico", "Bacon"];
const pizzaLength = pizzas.length;

const ingredients = [];
ingredients[0] = [" sos pomidorowy", " mozzarella"];
ingredients[1] = [" sos pomidorowy", " podwójna mozzarella", " pepperoni"];
ingredients[2] = [" sos pomidorowy", " mozzarella", " szynka", " pieczarki"];
ingredients[3] = [" sos pomidorowy", " mozzarella", " szynka"];
ingredients[4] = [" sos pomidorowy", " mozzarella", " kukurydza", " pomidory", " papryka", " cebula"];
ingredients[5] = [" sos pomidorowy", " mozzarella", " kurczak", " pieczarki", " oliwki"];
ingredients[6] = [" sos pikantny pomidorowy", " mozzarella", " kurczak", " cebula"];
ingredients[7] = [" sos pikantny pomidorowy", " podwójna mozzarella", " pepperoni", " papryka", " oliwki", " papryczki jalapenos"];
ingredients[8] = [" sos czosnkowy", " podwójna mozzarella", " szynka"];
ingredients[9] = [" sos czosnkowy", " mozzarella", " wieprzowina", " wołowina", " rukola"];
ingredients[10] = [" sos kremowy", " mozzarella", " szynka", " pieczarki"];
ingredients[11] = [" sos kremowy", " podwójna mozzarella", " boczek", " cebula"];
ingredients[12] = [" sos kremowy", " mozzarella", " boczek", " pieczarki", " kukurydza"];
ingredients[13] = [" sos pikantny pomidorowy", " mozzarella", " szynka", " pepperoni", " papryka", " pieczarki", " oliwki", " kukurydza"];
ingredients[14] = [" sos pomidorowy", " mozzarella", " boczek", " pomidory", " oliwki", " cebula"];

const sizesIngredients = [" mała", " srednia", " duża", " mega"];
const sizesPrice = [20.00, 25.00, 30.00, 35.00];
const sizesLength = sizesIngredients.length;

const doughsIngredients = [" cienkie", " grube", " ser w brzegach"];
const doughsPrice = [3.00, 6.00, 9.00];
const doughsLength = doughsIngredients.length;

const cheesesIngredients = [" mozzarella", " podwójna mozzarella"];
const cheesesPrice = [0.00, 4.00];
const cheesesLength = cheesesIngredients.length;

const saucesIngredients = [" sos pomidorowy", " sos kremowy", " sos pikantny pomidorowy", " sos czosnkowy"];
const saucesPrice = [2.00, 2.00, 2.00, 2.00];
const saucesLength = saucesIngredients.length;

const meatsIngredients = [" pepperoni", " szynka", " wołowina", " wieprzowina", " kurczak", " boczek"];
const meatsPrice = [5.20, 5.20, 5.20, 5.20, 5.20, 5.20];
const meatsLength = meatsIngredients.length;

const vegetablesIngredients = [" kukurydza", " oliwki", " papryczki jalapenos", " pieczarki", " papryka", " cebula", " pomidory", " rukola"];
const vegetablesPrice = [5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00];
const vegetablesLength = vegetablesIngredients.length;

//Slider na stronie głównej
let number = 1;

const slider = function(){

    const sliderHandle = document.querySelector(".slider");
    const sliderNameHandle = document.querySelector(".sliderName"); 
    const sliderLeftArrowHandle = document.querySelector(".arrow-left");
    const sliderRightArrowHandle = document.querySelector(".arrow-right");

    if(number === 15){
        number = 1;
    }
    else{
        number ++;
    }

    sliderHandle.src = `./pizza_images/pizza${number}.jpg`;
    sliderNameHandle.innerHTML = `${pizzas[number-1]}`;

    sliderLeftArrowHandle.onclick = function(){

        if(number === 1){
            number = 1;
        }
        else{
            number --;
        }

        sliderHandle.src = `./pizza_images/pizza${number}.jpg`;
        sliderNameHandle.innerHTML = `${pizzas[number-1]}`;

    }

    sliderRightArrowHandle.onclick = function(){

        if(number === 15){
            number = 15;
        }
        else{
            number ++;
        }

        sliderHandle.src = `./pizza_images/pizza${number}.jpg`;
        sliderNameHandle.innerHTML = `${pizzas[number-1]}`;

    }
}

//Dodawanie opinii klientów
const usersOpinionsHandle = document.querySelector(".users-opinions");
const usersOpinionsListHandle = document.querySelector(".users-opinions-list");
const btnAddOpinionHandle = document.querySelector(".btn-add-opinion");

const addOpinion = function(){

    btnAddOpinionHandle.style.display = "none";
    usersOpinionsHandle.style.display = "block";
    usersOpinionsListHandle.style.display = "none";

    usersOpinionsHandle.innerHTML = 
    `<form>
        <div class="mb-2">
            <input id="nick" class="form-control" type='text' placeholder="Proszę podać nick (max.20 znaków)" maxlength="20">
        </div>
        <div>
            <textarea rows="5" id="opinion" class="form-control" type='text' placeholder="Miejsce na twoją opinię (max.300 znaków)" maxlength="300"></textarea>
        </div>
        <div class="text-center mt-4"> 
            <button type="button" class='btn btn-dark position-absolute fixed-bottom btn-border-radius' onclick='submitOpinion()'>Dodaj opinię</button>
        </div>
    </form>`
}

const userNicks = [];
const opinions = [];
let number_opinions = 0;

const submitOpinion = function(){
    const userNickHandle = document.getElementById("nick");
    const opinionHandle = document.getElementById("opinion");

    const user_nick = document.getElementById("nick").value;
    const opinion = document.getElementById("opinion").value;


    userNickHandle.classList.remove("error");
    opinionHandle.classList.remove("error");

    if(user_nick !== "" && opinion !== ""){

        userNicks.push(user_nick);
        opinions.push(opinion);

        usersOpinionsListHandle.innerHTML += `<li>${userNicks[number_opinions]}: ${opinions[number_opinions]}</li><hr>`;
        btnAddOpinionHandle.style.display = "inline-block";
        usersOpinionsHandle.style.display = "none";
        usersOpinionsListHandle.style.display = "block";

        number_opinions ++;
    }
    else if(user_nick === "" && opinion === ""){
        userNickHandle.classList.add("error");
        opinionHandle.classList.add("error");
    }
    else if(user_nick === ""){
        
        userNickHandle.classList.add("error");
    }
    else if(opinion === ""){
        
        opinionHandle.classList.add("error");
    }
}

//Wypisywanie gotowych pozycji pizz
const pizzaOption = function(){

    const pizzaOptionHandle = document.querySelector(".pizzaOption");

    const pizzaOptions = [];

    for(let i=0; i<pizzaLength; i++)
    pizzaOptions.push(
        `<figure class="col-4 mb-5 pizzaPage" id=option${i}>
            <div class="figure-edit pizzaOption">
                <div class="ingredients-hover" data-bs-toggle="modal" data-bs-target="#pizzaEdit">
                    <img class="img-fluid border-radius img-edit" src="./pizza_images/pizza${i+1}.jpg" alt="Pizza">
                    <div class="ingredients">
                        <h3 class="h2">Składniki:</h3>
                        <p>${ingredients[i]}</p>
                    </div>
                </div>
            </div>
            <figcaption class="mt-3">
                ${pizzas[i]}
            </figcaption>
        </figure>`
    );
    
    pizzaOptionHandle.innerHTML = pizzaOptions.join("");
    
    const pizzaPageHandle = document.querySelectorAll(".pizzaPage");

    pizzaPageHandle.forEach(element => {

        element.addEventListener("click", pizzaPageIngredientsChecked)       
    });
}

//Wypisanie składników do własnej pizzy
const Sizes = [];
const Doughs = [];
const Cheeses = [];
const Sauces = [];
const Meats = [];
const Vegetables = [];

const ingredientsToYourOwnPizza = function(){

    const sizeHandle = document.querySelector(".size");
    const doughHandle = document.querySelector(".dough");
    const cheeseHandle = document.querySelector(".cheese");
    const sauceHandle = document.querySelector(".sauce");
    const meatHandle = document.querySelector(".meat");
    const vegetablesHandle = document.querySelector(".vegetable");

    for(let i=0; i<sizesLength; i++){

        Sizes.push(
            `<input type="radio" class="btn-check" name="btnradio1" id="${sizesIngredients[i]}${i}" autocomplete="off" value="${sizesPrice[i]}">
            <label class="btn btn-outline-dark mb-2 mt-2 col-12" for="${sizesIngredients[i]}${i}">${sizesIngredients[i]}</label>`
        );
    }

    for(let i=0; i<doughsLength; i++){

        Doughs.push(
            `<input type="radio" class="btn-check" name="btnradio2" id="${doughsIngredients[i]}${i}" autocomplete="off" value="${doughsPrice[i]}">
            <label class="btn btn-outline-dark mb-2 mt-2 col-12" for="${doughsIngredients[i]}${i}">${doughsIngredients[i]}</label>`
        );
    }

    for(let i=0; i<cheesesLength; i++){

        Cheeses.push(
            `<input type="radio" class="btn-check" name="btnradio3" id="${cheesesIngredients[i]}${i}" autocomplete="off" value="${cheesesPrice[i]}">
            <label class="btn btn-outline-dark mb-2 mt-2 col-12" for="${cheesesIngredients[i]}${i}">${cheesesIngredients[i]}</label>`
        );
    }

    for(let i=0; i<saucesLength; i++){

        Sauces.push(
            `<input type="radio" class="btn-check" name="btnradio4" id="${saucesIngredients[i]}${i}" autocomplete="off" value="${saucesPrice[i]}">
            <label class="btn btn-outline-dark mb-2 mt-2 col-12" for="${saucesIngredients[i]}${i}">${saucesIngredients[i]}</label>`
        );
    }

    for(let i=0; i<meatsLength; i++){

        Meats.push(
            `<input type="checkbox" class="btn-check btnradio5" name="${meatsIngredients[i]}" id="btn-meats${i}" autocomplete="off" value="${meatsPrice[i]}">
            <label class="btn btn-outline-dark mb-2 mt-2 col-12" for="btn-meats${i}">${meatsIngredients[i]}</label>`
        );
    }

    for(let i=0; i<vegetablesLength; i++){

        Vegetables.push(
            `<input type="checkbox" class="btn-check btnradio6" name="${vegetablesIngredients[i]}" id="btn-vegetables${i}" autocomplete="off" value="${vegetablesPrice[i]}">
            <label class="btn btn-outline-dark mb-2 mt-2 col-12" for="btn-vegetables${i}">${vegetablesIngredients[i]}</label>`
        );
    }
       
    sizeHandle.innerHTML = Sizes.join("");
    doughHandle.innerHTML = Doughs.join("");
    cheeseHandle.innerHTML = Cheeses.join("");
    sauceHandle.innerHTML = Sauces.join("");
    meatHandle.innerHTML = Meats.join("");
    vegetablesHandle.innerHTML = Vegetables.join("");

    const sizesRadios = document.getElementsByName("btnradio1");
    const doughsRadios = document.getElementsByName("btnradio2");
    const cheesesRadios = document.getElementsByName("btnradio3");
    const saucesRadios = document.getElementsByName("btnradio4");
    const meatsCheckbox = document.querySelectorAll(".btnradio5");
    const vegetablesCheckbox = document.querySelectorAll(".btnradio6");

    for(let i=0; i<sizesLength; i++){

        sizesRadios[i].addEventListener("click", yourOwnPizzaSize);
    }

    for(let i=0; i<doughsLength; i++){

        doughsRadios[i].addEventListener("click", yourOwnPizzaDough);
    
    }
    for(let i=0; i<cheesesLength; i++){

        cheesesRadios[i].addEventListener("click", yourOwnPizzaCheese);
    }

    for(let i=0; i<saucesLength; i++){

        saucesRadios[i].addEventListener("click", yourOwnPizzaSauce);
    }

    for(let i=0; i<meatsLength; i++){

        meatsCheckbox[i].addEventListener("click", yourOwnPizzaMeatPIZZA);
    }

    for(let i=0; i<vegetablesLength; i++){

        vegetablesCheckbox[i].addEventListener("click", yourOwnPizzaVegetablePIZZA);
    }
}

let pizzaOptionId = 0;
let pizzaOptionSubstrId = 0
const pizzaOptionsChecked = [];
const pizzaPageIngredientsChecked = function(){
    
    const sizesRadios = document.getElementsByName("btnradio1");
    const doughsRadios = document.getElementsByName("btnradio2");
    const cheesesRadios = document.getElementsByName("btnradio3");
    const saucesRadios = document.getElementsByName("btnradio4");
    const meatsCheckbox = document.querySelectorAll(".btnradio5");
    const vegetablesCheckbox = document.querySelectorAll(".btnradio6");

    yourOwnPizzaIngredientsMeatPIZZA.length = 0;
    yourOwnPizzaIngredientsMeatNumberPIZZA.length = 0;
    pizzaMeatValuePIZZA = 0;

    yourOwnPizzaIngredientsVegetablePIZZA.length = 0;
    yourOwnPizzaIngredientsVegetableNumberPIZZA.length = 0;
    pizzaVegetablesValuePIZZA = 0;

    pizzaOptionsChecked.length = 0;

    for(const element of vegetablesCheckbox){

        element.checked = false;
    }

    for(const element of meatsCheckbox){

        element.checked = false;
    }

    pizzaOptionId = this.id;
    pizzaOptionSubstrId = Number(pizzaOptionId.substr(6,2));

    ingredients.forEach(function(element, index){

        if(pizzaOptionSubstrId === index){

            for(let i=0; i<element.length; i++){

                pizzaOptionsChecked.push(element[i]);  
                    
            }
        }   
    });

    sizesRadios[0].checked = true;
    pizzaSizeValue = sizesPrice[0];
    yourOwnPizzaIngredientsSize = sizesIngredients[0];

    doughsRadios[0].checked = true;
    pizzaDoughValue = doughsPrice[0];
    yourOwnPizzaIngredientsDough = doughsIngredients[0]

    cheesesRadios[0].checked = true;
    pizzaCheeseValue = cheesesPrice[0];
    yourOwnPizzaIngredientsCheese = cheesesIngredients[0];

    saucesRadios[0].checked = true;   
    pizzaSauceValue = saucesPrice[0];
    yourOwnPizzaIngredientsSauce = saucesIngredients[0];

    pizzaOptionsChecked.forEach(item5 => {
        
        meatsCheckbox.forEach(element5 => {
    
            if(item5 === element5.name){
                
                element5.checked = true;    
                pizzaMeatValuePIZZA += Number(element5.value);   

                yourOwnPizzaIngredientsMeatPIZZA.push(item5);
                yourOwnPizzaIngredientsMeatNumberPIZZA.push(element5.id);
            }
        });
    });

    pizzaOptionsChecked.forEach(item6 => {
    
        vegetablesCheckbox.forEach(element6 => {
            
            if(item6 === element6.name){
                
                element6.checked = true;    
                pizzaVegetablesValuePIZZA += Number(element6.value);  
                
                yourOwnPizzaIngredientsVegetablePIZZA.push(item6);
                yourOwnPizzaIngredientsVegetableNumberPIZZA.push(element6.id);
            }             
        });
    });
    
    priceOrderPIZZA();   
};

//Zaznaczenie domyślnych składników(tj. rozmiar, ciasto, sos do pizzy, i wyświetlenie ich ceny po załadowaniu się podstrony oraz wyswietlenie alertu.
const yourOwnPizzaChecked = function(){
    
    const sizesRadios = document.getElementsByName("btnradio1");
    const doughsRadios = document.getElementsByName("btnradio2");
    const cheesesRadios = document.getElementsByName("btnradio3");
    const saucesRadios = document.getElementsByName("btnradio4");
    const meatsCheckbox = document.querySelectorAll(".btnradio5");
    const vegetablesCheckbox = document.querySelectorAll(".btnradio6");

    for(let i=0; i<sizesLength; i++){

        sizesRadios[i].addEventListener("click", yourOwnPizzaSize);
    }

    for(let i=0; i<doughsLength; i++){

        doughsRadios[i].addEventListener("click", yourOwnPizzaDough);
    
    }
    for(let i=0; i<cheesesLength; i++){

        cheesesRadios[i].addEventListener("click", yourOwnPizzaCheese);
    }

    for(let i=0; i<saucesLength; i++){

        saucesRadios[i].addEventListener("click", yourOwnPizzaSauce);
    }

    for(let i=0; i<meatsLength; i++){

        meatsCheckbox[i].addEventListener("click", yourOwnPizzaMeat);
    }

    for(let i=0; i<vegetablesLength; i++){

        vegetablesCheckbox[i].addEventListener("click", yourOwnPizzaVegetable);
    }

    const checked = [];

    const sizesChecked = sizesRadios[0].checked = true;
    checked.push(sizesChecked);

    const doughsChecked = doughsRadios[0].checked = true;
    checked.push(doughsChecked);

    const cheesesChecked = cheesesRadios[0].checked = true;
    checked.push(cheesesChecked);

    const saucesChecked = saucesRadios[0].checked = true;
    checked.push(saucesChecked);

    checked.forEach(element =>{

        if(element === true){

            pizzaSizeValue = sizesPrice[0];
            pizzaDoughValue = doughsPrice[0];
            pizzaCheeseValue = cheesesPrice[0];
            pizzaSauceValue = saucesPrice[0];
            yourOwnPizzaIngredientsSize = sizesIngredients[0];
            yourOwnPizzaIngredientsDough = doughsIngredients[0];
            yourOwnPizzaIngredientsCheese = cheesesIngredients[0];
            yourOwnPizzaIngredientsSauce = saucesIngredients[0];
        }
        priceOrder();
    });
}




//Wyświetlanie ceny tworzonej pizzy, dodawanie skłądników to tablicy(dla type=checkbox) lub zmiennej(dla type=radio) oraz wyświetlanie plus i minus na zdjęciu pizzy(wyświetlanie plus i minus tylko dla type=checkbox).
const divPlusHandle = document.querySelector(".own-pizza-div-plus");
const plusHandle = document.querySelector(".own-pizza-plus");

const divMinusHandle = document.querySelector(".own-pizza-div-minus");
const minusHandle = document.querySelector(".own-pizza-minus");

let pizzaSizeValue = 0;
let yourOwnPizzaIngredientsSize = "";
const yourOwnPizzaSize = function(){

    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaSizeValue = price;
        yourOwnPizzaIngredientsSize = sizesIngredients[currentBtnSubstrId];
    }
    priceOrder();
    priceOrderPIZZA();
}

let pizzaDoughValue = 0;
let yourOwnPizzaIngredientsDough = "";
const yourOwnPizzaDough = function(){
 
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaDoughValue = price;
        yourOwnPizzaIngredientsDough = doughsIngredients[currentBtnSubstrId];
    }
    priceOrder();
    priceOrderPIZZA();
}

let pizzaCheeseValue = 0;
let yourOwnPizzaIngredientsCheese = "";
const yourOwnPizzaCheese = function(){
 
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaCheeseValue = price;
        yourOwnPizzaIngredientsCheese = cheesesIngredients[currentBtnSubstrId];
    }
    priceOrder();
    priceOrderPIZZA();
}

let pizzaSauceValue = 0;
let yourOwnPizzaIngredientsSauce = "";
const yourOwnPizzaSauce = function(){
 
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaSauceValue = price;
        yourOwnPizzaIngredientsSauce = saucesIngredients[currentBtnSubstrId];
    }
    priceOrder();
    priceOrderPIZZA();
}

let pizzaMeatValue = 0;
const yourOwnPizzaIngredientsMeat = [];
const yourOwnPizzaIngredientsMeatNumber = [];
const yourOwnPizzaMeat = function(){
 
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaMeatValue += price;
        yourOwnPizzaIngredientsMeat.push(meatsIngredients[currentBtnSubstrId]);
        yourOwnPizzaIngredientsMeatNumber.push(currentBtnSubstrId);

        if(plusHandle.classList.contains("opacity_1") && divPlusHandle.classList.contains("opacity_0")){

            plusHandle.classList.remove('opacity_1');  
            divPlusHandle.classList.remove('opacity_0');
            
            plusHandle.classList.add('opacity_0');  
            divPlusHandle.classList.add('opacity_1');
        }
        else{

            plusHandle.classList.add('opacity_1');
            divPlusHandle.classList.add('opacity_0');

            plusHandle.classList.remove('opacity_0');  
            divPlusHandle.classList.remove('opacity_1');
        }
    }
    else{

        pizzaMeatValue -= price; 
        yourOwnPizzaIngredientsMeatNumber.forEach(function(item, index){

            if(item === currentBtnSubstrId){
                yourOwnPizzaIngredientsMeat.splice(index, 1);
                yourOwnPizzaIngredientsMeatNumber.splice(index, 1);
            }
        });

        if(minusHandle.classList.contains("opacity_1") && divMinusHandle.classList.contains("opacity_0")){

            minusHandle.classList.remove('opacity_1');  
            divMinusHandle.classList.remove('opacity_0');
            
            minusHandle.classList.add('opacity_0');  
            divMinusHandle.classList.add('opacity_1');
        }
        else{

            minusHandle.classList.add('opacity_1');
            divMinusHandle.classList.add('opacity_0');

            minusHandle.classList.remove('opacity_0');  
            divMinusHandle.classList.remove('opacity_1');
        }
    }
    priceOrder();
    priceOrderPIZZA();
}

let pizzaVegetablesValue = 0;
const yourOwnPizzaIngredientsVegetable = [];
const yourOwnPizzaIngredientsVegetableNumber = [];
const yourOwnPizzaVegetable = function(){
 
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaVegetablesValue += price;
        yourOwnPizzaIngredientsVegetable.push(vegetablesIngredients[currentBtnSubstrId]);
        yourOwnPizzaIngredientsVegetableNumber.push(currentBtnSubstrId);

        if(plusHandle.classList.contains("opacity_1") && divPlusHandle.classList.contains("opacity_0")){

            plusHandle.classList.remove('opacity_1');  
            divPlusHandle.classList.remove('opacity_0');
            
            plusHandle.classList.add('opacity_0');  
            divPlusHandle.classList.add('opacity_1');
        }
        else{

            plusHandle.classList.add('opacity_1');
            divPlusHandle.classList.add('opacity_0');

            plusHandle.classList.remove('opacity_0');  
            divPlusHandle.classList.remove('opacity_1');
        }
    }
    else{

        pizzaVegetablesValue -= price;
        yourOwnPizzaIngredientsVegetableNumber.forEach(function(item, index){
            
            if(item === currentBtnSubstrId){
                yourOwnPizzaIngredientsVegetable.splice(index, 1);
                yourOwnPizzaIngredientsVegetableNumber.splice(index, 1);
            }
        });

        if(minusHandle.classList.contains("opacity_1") && divMinusHandle.classList.contains("opacity_0")){

            minusHandle.classList.remove('opacity_1');  
            divMinusHandle.classList.remove('opacity_0');
            
            minusHandle.classList.add('opacity_0');  
            divMinusHandle.classList.add('opacity_1');
        }
        else{

            minusHandle.classList.add('opacity_1');
            divMinusHandle.classList.add('opacity_0');

            minusHandle.classList.remove('opacity_0');  
            divMinusHandle.classList.remove('opacity_1');
        }
    }
    priceOrder();
    priceOrderPIZZA();
}

let pizzaMeatValuePIZZA = 0;
const yourOwnPizzaIngredientsMeatPIZZA = [];
const yourOwnPizzaIngredientsMeatNumberPIZZA = [];
const yourOwnPizzaMeatPIZZA = function(){
    
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){
  
        pizzaMeatValuePIZZA += price;
        yourOwnPizzaIngredientsMeatPIZZA.push(meatsIngredients[currentBtnSubstrId]);
        yourOwnPizzaIngredientsMeatNumberPIZZA.push(currentBtnAllId);
        console.log(yourOwnPizzaIngredientsMeatPIZZA);
        console.log(yourOwnPizzaIngredientsMeatNumberPIZZA);
    }
    else{
       
        pizzaMeatValuePIZZA -= price; 
        yourOwnPizzaIngredientsMeatNumberPIZZA.forEach(function(item, index){

            if(item === currentBtnAllId){

                yourOwnPizzaIngredientsMeatPIZZA.splice(index, 1);
                yourOwnPizzaIngredientsMeatNumberPIZZA.splice(index, 1);
            }
        });
        console.log(yourOwnPizzaIngredientsMeatPIZZA);
        console.log(yourOwnPizzaIngredientsMeatNumberPIZZA);
    }
    priceOrderPIZZA();
}

let pizzaVegetablesValuePIZZA = 0;
const yourOwnPizzaIngredientsVegetablePIZZA = [];
const yourOwnPizzaIngredientsVegetableNumberPIZZA = [];
const yourOwnPizzaVegetablePIZZA = function(){
    
    const price = Number(this.value);
    const currentBtn = document.getElementById(this.id).checked;
    const currentBtnAllId = this.id;
    const currentBtnSubstrId = currentBtnAllId.substr(currentBtnAllId.length-1,1);

    if(currentBtn === true){

        pizzaVegetablesValuePIZZA += price;
        yourOwnPizzaIngredientsVegetablePIZZA.push(vegetablesIngredients[currentBtnSubstrId]);
        yourOwnPizzaIngredientsVegetableNumberPIZZA.push(currentBtnAllId);

        console.log(yourOwnPizzaIngredientsVegetablePIZZA);
        console.log(yourOwnPizzaIngredientsVegetableNumberPIZZA);
    }
    else{

        pizzaVegetablesValuePIZZA -= price;
        yourOwnPizzaIngredientsVegetableNumberPIZZA.forEach(function(item, index){

            if(item === currentBtnAllId){

                yourOwnPizzaIngredientsVegetablePIZZA.splice(index, 1);
                yourOwnPizzaIngredientsVegetableNumberPIZZA.splice(index, 1);
            }
        });
        console.log(yourOwnPizzaIngredientsVegetablePIZZA);
        console.log(yourOwnPizzaIngredientsVegetableNumberPIZZA);
    }
    priceOrderPIZZA();
}

let orderValue = 0;
const priceOrder = function(){

    orderValue = pizzaSizeValue + pizzaDoughValue + pizzaCheeseValue + pizzaSauceValue + pizzaMeatValue + pizzaVegetablesValue;
    const orderValueHandle = document.querySelector(".order-value");
    orderValueHandle.innerHTML = `<p class="fs-3">${(Math.round(orderValue*100)/100).toFixed(2)}zł</p>`;
}

let orderValuePIZZA = 0;
const priceOrderPIZZA = function(){

    orderValuePIZZA = pizzaSizeValue + pizzaDoughValue + pizzaCheeseValue + pizzaSauceValue + pizzaMeatValuePIZZA + pizzaVegetablesValuePIZZA;
    const orderValueHandle = document.querySelector(".order-value");
    orderValueHandle.innerHTML = `<p class="fs-3">${(Math.round(orderValuePIZZA*100)/100).toFixed(2)}zł</p>`;
}

//Dodawanie zrobionych pizz do koszyka
const orderCounterHandle = document.querySelectorAll(".order-counter");
const wholeOrderValueHandle = document.querySelector(".whole-order-value");
const basketHandle = document.querySelector(".basket"); 
const wholeOrder = [];
let orderInBasket = "";
let orderCounter = 0;
let wholeOrderValue = 0;
const addOrderToBasket = function(){
   
    if(yourOwnPizzaIngredientsCheese.length !== 0 || yourOwnPizzaIngredientsMeat.length !== 0  || yourOwnPizzaIngredientsVegetable.length !== 0){

        if(yourOwnPizzaIngredientsVegetable.length === 0 && yourOwnPizzaIngredientsMeat.length === 0){

            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
        }
        else if(yourOwnPizzaIngredientsMeat.length === 0 ){

            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
            wholeOrder.push(`<span class="fw-bold">Warzywa:</span> ${yourOwnPizzaIngredientsVegetable}`);
        }
        else if(yourOwnPizzaIngredientsVegetable.length === 0){

            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
            wholeOrder.push(`<span class="fw-bold">Mięso:</span> ${yourOwnPizzaIngredientsMeat}`);
        }
        else{
 
            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
            wholeOrder.push(`<span class="fw-bold">Mięso:</span> ${yourOwnPizzaIngredientsMeat}`);
            wholeOrder.push(`<span class="fw-bold">Warzywa:</span> ${yourOwnPizzaIngredientsVegetable}`);
        }
        
        orderCounter++;
        
        orderCounterHandle.forEach(element =>{

            element.innerHTML = orderCounter;
        });

        const ulBasket = document.createElement("ul");
        ulBasket.id = `ul${orderCounter}`;
        ulBasket.className = "ulBasket";
        

        for(let i=0; i<wholeOrder.length; i++){

            orderInBasket += `<li class="list-unstyled fs-basket">${wholeOrder[i]} </li>`;
        }

        if(orderValue !== 0){

            ulBasket.innerHTML = 
            `<h5 class="mt-4">Twoja własna pizza:</h5>
            ${orderInBasket}
            <p class="fs-basket mt-2 d-inline">Cena pizzy: <span class="ul-value">${(Math.round(orderValue*100)/100).toFixed(2)}</span>zł</p><i class="icon-trash-empty d-inline ms-5 fs-basket" style="cursor: pointer;" id="ul${orderCounter}"></i><hr>`;

            wholeOrderValue += orderValue;
            wholeOrderValueHandle.innerHTML = `Wartość zamówienia: ${(Math.round(wholeOrderValue*100)/100).toFixed(2)}zł`;
        }
        
        basketHandle.appendChild(ulBasket);
        orderInBasket = "";
        wholeOrder.splice(0, 17);

        const trashHandle = document.querySelectorAll(".icon-trash-empty");
        trashHandle.forEach(element => {
            
            element.addEventListener("click", deleteOrderFromBasket);
        });
    }
}

const addOrderToBasketPIZZA = function(){
   
    if(yourOwnPizzaIngredientsCheese.length !== 0 || yourOwnPizzaIngredientsMeatPIZZA.length !== 0  || yourOwnPizzaIngredientsVegetablePIZZA.length !== 0){

        if(yourOwnPizzaIngredientsVegetablePIZZA.length === 0 && yourOwnPizzaIngredientsMeatPIZZA.length === 0){

            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
        }
        else if(yourOwnPizzaIngredientsMeatPIZZA.length === 0 ){

            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
            wholeOrder.push(`<span class="fw-bold">Warzywa:</span> ${yourOwnPizzaIngredientsVegetablePIZZA}`);
        }
        else if(yourOwnPizzaIngredientsVegetablePIZZA.length === 0){

            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
            wholeOrder.push(`<span class="fw-bold">Mięso:</span> ${yourOwnPizzaIngredientsMeatPIZZA}`);
        }
        else{
 
            wholeOrder.push(`<span class="fw-bold">Rozmiar:</span> ${yourOwnPizzaIngredientsSize}`);
            wholeOrder.push(`<span class="fw-bold">Ciasto:</span> ${yourOwnPizzaIngredientsDough}`);
            wholeOrder.push(`<span class="fw-bold">Ser:</span> ${yourOwnPizzaIngredientsCheese}`);
            wholeOrder.push(`<span class="fw-bold">Sos do pizzy:</span> ${yourOwnPizzaIngredientsSauce}`);
            wholeOrder.push(`<span class="fw-bold">Mięso:</span> ${yourOwnPizzaIngredientsMeatPIZZA}`);
            wholeOrder.push(`<span class="fw-bold">Warzywa:</span> ${yourOwnPizzaIngredientsVegetablePIZZA}`);
        }
        
        orderCounter++;
        
        orderCounterHandle.forEach(element =>{

            element.innerHTML = orderCounter;
        });

        const ulBasket = document.createElement("ul");
        ulBasket.id = `ul${orderCounter}`;
        ulBasket.className = "ulBasket";
        

        for(let i=0; i<wholeOrder.length; i++){

            orderInBasket += `<li class="list-unstyled fs-basket">${wholeOrder[i]} </li>`;
        }

        ulBasket.innerHTML = 
        `<h5 class="mt-4">Pizza: ${pizzas[pizzaOptionSubstrId]}</h5>
        ${orderInBasket}
        <p class="fs-basket mt-2 d-inline">Cena pizzy: <span class="ul-value">${(Math.round(orderValuePIZZA*100)/100).toFixed(2)}</span>zł</p><i class="icon-trash-empty d-inline ms-5 fs-basket" style="cursor: pointer;" id="ul${orderCounter}"></i><hr>`;

        wholeOrderValue += orderValuePIZZA;
        wholeOrderValueHandle.innerHTML = `Wartość zamówienia: ${(Math.round(wholeOrderValue*100)/100).toFixed(2)}zł`;       
        
        basketHandle.appendChild(ulBasket);
        orderInBasket = "";
        wholeOrder.splice(0, 17);

        const trashHandle = document.querySelectorAll(".icon-trash-empty");
        trashHandle.forEach(element => {
            
            element.addEventListener("click", deleteOrderFromBasket);
        });
    }
}

//Usuwanie dodanych pizz do koszyka
const deleteOrderFromBasket = function(){

    const ulBasketHandle = document.querySelectorAll(".ulBasket");

    ulBasketHandle.forEach(element => {

        if(element.id === this.id){

            element.remove();

            orderCounterHandle.forEach(element => {

                element.innerHTML = element.innerHTML -1;
            });

            const ulValue = element.querySelector(".ul-value").innerHTML;
            wholeOrderValue -= ulValue;

            if(basketHandle.hasChildNodes()){
                wholeOrderValueHandle.innerHTML = `Wartość zamówienia: ${(Math.round(wholeOrderValue*100)/100).toFixed(2)}zł`;
            }
            else{
                wholeOrderValueHandle.innerHTML = "Koszyk jest pusty"
                orderCounter = 0;
            }
        }
    });
}
