//THIS CODE WORKS 

// var clicks = 0; 

// function clickME() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks; 
//  }


function AddClicks(clicks) {
	this.clicks = clicks;
 }
AddClicks.prototype.clickMe = function() {
        this.clicks += 1;
        document.getElementById("clicks").innerHTML = this.clicks; 
 }

