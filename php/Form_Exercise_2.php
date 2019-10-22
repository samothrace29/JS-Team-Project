<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<!--             - Name
	            - First name
	            - E-mail
	            - Password
	            - Confirmation of password
	            - Checkbox "Subscribe to the newsletter" -->

	<form action="recap-signin.php">
	<input type="text" name="name" id="inputName" placeholder="name">
	<BR>
	<input type="text" name="firstName" id="inputFirstName" placeholder="firstName"> 
	<BR>
	<input type="email" name="email"    id="inputEmail" placeholder="email">
	<BR>
	<input type="password" name="password"    id="inputPassword" placeholder="password">
	<BR>
	<input type="password" name="passwordCfm" id="inputPasswordCfm" placeholder="passwordCfm">
	<BR>
	<input type="checkbox" name="newsLetter" id="inputNewsLetter" placeholder="newsLetter">News Letter
	<BR>
	<input type="submit" value="OK">
	
	</form>



</body>
</html>

<?php 




/*
    - Exercise : 
	
		-- Part 1 :
	   		Create two pages:
	        - signin.php: User registration page, with the following fields:
	            - Name
	            - First name
	            - E-mail
	            - Password
	            - Confirmation of password
	            - Checkbox "Subscribe to the newsletter"

	        - recap-signin.php: Page showing the summary of the information entered.

		-- Part 2 :
			1. Using the first part, merge both the signin.php and recap-signin.php files into one.
			If we arrive on the page without the form being submitted, we will post the form, otherwise we will display the summary.

			2. Add validators on the different fields of the form:
				- The name and the first name are mandatory.
				- The e-mail must be between 8 and 50 characters long and should contains @
				- The fields "Password" and "Confirmation" must be identical and have at least 8 characters

			3. Add a box "I accept the conditions of use of the product", which must be checked.

			Bonus: Make the form values ​​reappear with each submission, in case of error.
    */

 ?>