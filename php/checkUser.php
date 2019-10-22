<?php 

$users = array ("johnny hallyday", "simon bertrand", "tom hanks", "toto tata", "john");

if ( isset( $_GET['submit'])) {
  //  $found = false;
    for ($i=0; $i < count($users); $i++) { 
       // print ($_GET['firstname']);
        if ( $users[$i] === ($_GET['firstname'].' '.$_GET['secondname'])) {
            print "Welcome user " .   ($_GET['firstname'].' '.$_GET['secondname'])  . " you are autorized";
            die();
            
        }
    }
       // if ( $found == false ) {
            print "<h1> YOU ARE NOT AUTORIZED !!! </h1>";
    
      //  }

}

?>