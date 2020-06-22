document.querySelector("#submit").addEventListener('click',process);

var income = 0;
var expenses = 0;
var i = 10;
var j = 10;
var income_button = 0;
var expenses_button = 0;
done = 1;

function process(){
    done = 1;
    //this will take data from fields
    var sign = document.getElementById("selection");
    var description = document.getElementById("input-subject");
    var amount = document.getElementById("input-value");
    if(description.value.length == 0 || amount.value.length == 0){
        window.alert("Please enter description and value.");
        done = 0;
    }
    if(done == 1){
        
    //if its income
    if(sign.value == "income"){
        
        i++;
        //increases income and updates income and total
        income+=parseInt(amount.value);
        document.getElementById("income").textContent = income;
        document.getElementById("total").textContent = income-expenses;
        //created new div in income
        var new_div = document.createElement("div");
        new_div.setAttribute("id",`new_${i}`);
        new_div.setAttribute("class","first-income-third");
        document.getElementById("third-income-list").appendChild(new_div);

        //adds description in that div
        var desc = document.createElement("p");
        desc.textContent = description.value;
        desc.setAttribute("class","show-1");
        document.getElementById(`new_${i}`).appendChild(desc);

        //adds value 
        var number = document.createElement("p");
        number.textContent = amount.value;
        number.setAttribute("class","show-2");
        number.setAttribute("id",`income_value${i}`);
        document.getElementById(`new_${i}`).appendChild(number);

        //adds button
        var button = document.createElement("button");
        button.setAttribute("class","show-3 delete-button");
        button.setAttribute("id",`income_button_${i}`);
        button.textContent = "X";
        button.setAttribute("onclick","delete_income_button(this)");
        document.getElementById(`new_${i}`).appendChild(button);
        
        


    }
    else{

        j++;

        expenses+=parseInt(amount.value);
        document.getElementById("expenses").textContent = expenses;
        document.getElementById("total").textContent = income-expenses;
        
        var new_div = document.createElement("div");
        new_div.setAttribute("id",`more_${j}`);
        new_div.setAttribute("class","first-expenses-third");
        document.getElementById("third-expenses-list").appendChild(new_div);

        //adds description
        var desc = document.createElement("p");
        desc.textContent = description.value;
        desc.setAttribute("class","show-1");
        document.getElementById(`more_${j}`).appendChild(desc);

        //adds value
        var number = document.createElement("p");
        number.textContent = amount.value;
        number.setAttribute("class","show-2");
        number.setAttribute("id",`expenses_value${j}`);
        document.getElementById(`more_${j}`).appendChild(number);

        //adds button
        var button = document.createElement("button");
        button.setAttribute("class","show-3 delete-button");
        button.textContent = "X";
        
        button.setAttribute("id",`expenses_button_${j}`);
        button.setAttribute("onclick","delete_expense_button(this)");
        document.getElementById(`more_${j}`).appendChild(button);
        
    }

    document.getElementById("input-subject").value = "";
    document.getElementById("input-value").value = "";
    }
}

function delete_income_button(selected){

var x = selected.id[14];
var y = selected.id[15];

    var sign = document.getElementById(`income_value${x}${y}`).textContent;
    sign = parseInt(sign);
    income = income - sign;
    income_now = document.getElementById("income").textContent;
    document.getElementById("income").textContent = income_now - sign;

    var now_total = document.getElementById("total").textContent;
    document.getElementById("total").textContent = now_total - sign;

document.getElementById(`new_${x}${y}`).remove();

}

function delete_expense_button(selected){

    var x = selected.id[16];
    var y = selected.id[17];
    
        var sign = document.getElementById(`expenses_value${x}${y}`).textContent;
        sign = parseInt(sign);
        expenses = expenses - sign;
        var expense_now = document.getElementById("expenses").textContent;
        expense_now = parseInt(expense_now);
        document.getElementById("expenses").textContent = expense_now - sign;
    
        var now_total = document.getElementById("total").textContent;
        now_total = parseInt(now_total);
        document.getElementById("total").textContent = now_total + sign;
    
    document.getElementById(`more_${x}${y}`).remove();
    
    }