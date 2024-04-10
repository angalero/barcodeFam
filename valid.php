<?php

function main() {


//$tagOne = NULL;

$result = NULL;
$resultprint = array();

if (isset($_POST['barcode'])) {
   echo "is set";
   }
else {
   $_POST['barcode'] = NULL;
}

$_POST["barcode"]; 

//$result = implode($_POST["barcode"]);


$tagOne = "COV0047777";

//$resultprint = $_POST["barcode"];


if ($_POST["barcode"] == $tagOne) {

    echo "correct";
    

 }
 
 else {
    echo "no";
    //print(implode($$resultprint ));
    printf($_POST["barcode"]);

   
 }

 }


 main();

