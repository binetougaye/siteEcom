function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name == ""){
        alert("Le Nom est obligatoire");
        return false;
    }

    if (email == ""){
        alert("L'adress Email est obligatoire");
        return false;
    }
    if (password == ""){
        alert("Le Mot de passe est obligatoire");
        return false;
    }

    return true;
}


function LogIn(){
    if(validateForm() == true){
        window.location.href="admin-dashboard.html";    
    }
}

function LogOut(){
    window.location.href="admin-login.html"
}

var add = document.getElementById('addToDo');
var input = document.getElementById('new-category');
var CategorieAdd = document.getElementById('CategorieAdd');

add.addEventListener('click',addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(e){
  
  const item_value  = input.value;
  const item = document.createElement('div');
		item.classList.add('item');

		const item_content = document.createElement('div');
		item_content.classList.add('content');

		item.appendChild(item_content);

		const input_item = document.createElement('input');
		input_item.classList.add('text');
		input_item.type = 'text';
		input_item.value = item_value;
		input_item.setAttribute('readonly', 'readonly');
        input_item.addEventListener('dblclick', function(){
            input_item.style.textDecoration = "line-through";
        })
        item_content.appendChild(input_item);

		CategorieAdd.appendChild(item);

		input.value = '';
}