let rootdiv = document.getElementById("root");
let container = document.createElement("div");

let thelogo = document.createElement("img");
thelogo.src = "https://media.istockphoto.com/photos/young-man-flyfishing-at-sunrise-picture-id582310010?k=6&m=582310010&s=612x612&w=0&h=tfj7IMfDAHYWu6f3JoY30u5o_tCH80gVk-W6wdDN3MA="

rootdiv.appendChild(thelogo);
rootdiv.appendChild(container);

let request = new XMLHttpRequest();
request.open("get", 'https://jsonplaceholder.typicode.com/users', true )

request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400 ){
        data.forEach(users => {
            var card =  document.createElement('div');
            var heading1 = document.createElement('h1');
            heading1.textContent = users.name;
            heading1.style.color = "aqua";
            heading1.classList.add('w3-container');

            var username = document.createElement("h2");
            username.textContent = users.username;
            username.style.color = "green";
            username.classList.add('w3-container');


            var email = document.createElement("h3");
            email.textContent = users.email;
            email.style.color = "red";
            email.classList.add('w3-container');












             container.appendChild(card);
             card.appendChild(heading1);
             card.appendChild(username);
             card.appendChild(email);

             

            
        });
    }

    else {
        alert('Sorry wrong Channel')
    }
}

request.send();