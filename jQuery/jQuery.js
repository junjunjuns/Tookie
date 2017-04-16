/*JS and JQueries shared by all pages goes here*/

/*For responsive nav from http://www.w3schools.com/howto/howto_js_topnav.asp*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

/*To capture the date of user's computer*/
function dateFunction() {
	var d = new Date();
	document.getElementById("date").innerHTML=d.toDateString();
}

function dateAlert(){
	date = document.getElementById("date").innerHTML;
	if(date!="date"){
		alert("Today is " +date+ ". The date is not wrong, if you think it is, you might have travelled to the wrong time!");
	}
	if(date=="date"){
		alert("Uh oh, seems like you're caught in a temporal zone! We can't get your date!")
	}
}