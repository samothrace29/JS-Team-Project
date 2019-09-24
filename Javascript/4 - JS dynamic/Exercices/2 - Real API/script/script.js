/* This function is called at the launch of the page
  and will receive an array of users */
/* 1 - Creating the users select dynamically */
function createUsers(usersArray) {
  console.log(usersArray);
  /* Loop over the array of user to 
    duplicate <option> of the <select>
    and add this "new cloned option" to the select */
  for (const user of usersArray) {
    const mockOption = document.querySelector("option");
    const clonedOption = mockOption.cloneNode();
    document.querySelector("select").append(clonedOption);
    /* and the text content to the name of the user */
    clonedOption.innerText = user.name;
    /* change the value to the id of the user */
    clonedOption.value = user.id;
  }
}



/* This function is called when the form is submitted
    and will receive the todo of the selected user */
/* 2 - Create a paragraph for the todos, crossed if completed */
function createTodos(TodoArray) {
  console.log(TodoArray);
  /* create a paragraph for each todo of the TodoArray */
  /* put this paragraph inside the #todos <section> */
  /* this paragraph will contains the title of the todo */
  /* If the todo is completed (boolean) cross it with a line-through */
}

/* 3 - Warning... if you select a user and then another user you end up with the todos from both users */
/* It means you need to clean the #todo <section> when a need user is select */

/*  BONUS 1 - Modify the createTodos function
    to put the completed todos inside the #done <section> */

/*  BONUS 2 - When you click on a todo, it get moved to the done */

/*  BONUS 3 - When you click on a completed todo, it get moved to the todo */