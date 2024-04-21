
var codeOne = "687HYFD5";

//

// verify and change colour
function getURL() {
    var barcode = document.getElementById("barcode").value;

/*var code = document.forms["codeInput"]["barcode"].value;
var codeS = new String(code);*/
//alert(barcode);

if (barcode == "COV0047777") {
    //var currlnk = document.getElementById("colour").innerHTML;
    //var lnk = document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\green.css>";

    //alert(barcode);
    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\green.css>";
    
   // document.getElementById("colour").innerHTML = "<a href=colourGreen.html></a>";
}


setTimeout(colourChange, 3250) 


document.getElementById("test").innerHTML = "test done";
//alert(currlnk);
// "The full URL of this page is:<br>" + window.location.href;

}


// change back to blank


// time back out to blank
function colourChange() {

    document.getElementById("colour").innerHTML = "";
    document.getElementById("barcode").value = "";


}

function myFunction(val) {
    alert("The input value has changed. The new value is: " + val);
  }