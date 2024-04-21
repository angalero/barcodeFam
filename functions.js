
var codeOne = "687HYFD5";

const newCodes = ["RMJ6746X", "YCI4410W", "COV0047777", "YEW9919M", "IXL6029C", "COV0049555", "BFN4478I" ];
const usedCodes =[];
//

var verCode = "";


let code = newCodes.find(myFunction);

/*function myFunction(value, index, array) {
  if (value == barcode) {

    verCode = value;

    newCodes.pop(value);
    usedCodes.add
  }
}*/



// verify and change colour
function getURL() {
    var barcode = document.getElementById("barcode").value;

/*var code = document.forms["codeInput"]["barcode"].value;
var codeS = new String(code);*/
//alert(barcode);

//if (barcode == "COV0047777") {
    if (newCodes.includes(barcode)) {
            
    //var currlnk = document.getElementById("colour").innerHTML;
    //var lnk = document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\green.css>";

    //alert(barcode);
    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\green.css>";

    let position = newCodes.indexOf(barcode);
    newCodes.splice(position, 1);

    //newCodes.pop(barcode);
    usedCodes.push(barcode);
    
   // document.getElementById("colour").innerHTML = "<a href=colourGreen.html></a>";
}

else if(usedCodes.includes(barcode)) {

    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\yellow.css>";

}

else {

    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\red.css>";

}
// change back to blank
setTimeout(colourChange, 3000) 


document.getElementById("test").innerHTML = "test done";
//alert(currlnk);
// "The full URL of this page is:<br>" + window.location.href;

}




// time back out to blank
function colourChange() {

    document.getElementById("colour").innerHTML = "";
    document.getElementById("barcode").value = "";


}

function myFunction(val) {
   // alert("The input value has changed. The new value is: " + val);
  }