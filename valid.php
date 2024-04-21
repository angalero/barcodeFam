<?php

function main() {


//$tagOne = NULL;

$result = NULL;
$resultprint = array();

$_GET['barcode'] = "barcode set";

if (isset($_GET['barcode'])) {
   echo "is set";
   }
else {
   $_GET['barcode'] = "barcode";
}

//$_POST["barcode"]; 

//$result = implode($_POST["barcode"]);


$tagOne = "COV0047777";

//$resultprint = $_POST["barcode"];


if ($_GET['barcode'] == $tagOne) {

    echo "correct";
    

 }
 
 else {
    echo "nooo";
    //print(implode($$resultprint ));
    printf($_GET['barcode']);
    print("  in else. It failed if statement");
    red();
 }

 }


 function red() 
 {

   $output = array();
   $colour = array();

   $output[] = "<html>\n";
   $output[] = "<head>\n<title></title>\n<link rel=stylesheet href=colours\red.css>\n</head>\n"; // the head tag
	
	$output[] = "<body><p><output thing</p>\n";

   $output[] = "</body>\n";
	$output[] = "</html>\n";

   

   //echo "<link rel=stylesheet href=colours\green.css>";

   //echo (implode($colour));
   //echo (implode($output));

   echo "\nthe fucn red\n";

   return(implode($output));
 }


 main();

