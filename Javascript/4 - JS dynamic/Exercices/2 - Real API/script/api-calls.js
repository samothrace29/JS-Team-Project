//This functions makes the API calls

// The FETCH method allow you to make simple API/GET requests
// For example this call, once done will launch the createUsers function 
// providing you with the array of users 
fetch('https://jsonplaceholder.typicode.com/users') //this url returns ALL the users
  .then(response => response.json()) // We convert the response to JSON
  .then(json => createUsers(json)); //We return the JSON response to your createUsers() function


// THAT ONE will launch the createTodos function 
// with the 5 first todos of the selected user
const nbOfTodos = 5; // maximum length is 20
// When the form is submitted,  
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // the form is not sent
  fetch('https://jsonplaceholder.typicode.com/todos') //this url returns ALL the todos from ALL the users
    .then(response => response.json()) // We convert the response to JSON
    .then(json => { //We handle the JSON response
      const currentUserID = document.querySelector("#usersSelect").value; // What is userID of the <option> selected in the <select>
      let filteredTodos = json.filter(todo => todo.userId == currentUserID); // FILTER to only have the todos of that specifi userID
      filteredTodos.splice(nbOfTodos, 20 - nbOfTodos); // SPLICE remove the 15 last elements so we have only 5 todos
      createTodos(filteredTodos); // launch your function with the good datas
    });
});