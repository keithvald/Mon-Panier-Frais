
//---------------------------------------CONFITURES---------------------------------------

document.querySelector('button.confitures').addEventListener("click", myFunctionJams);

function myFunctionJams() {

  	document.querySelector("#CONFITURE").style.display = "block";

  	document.querySelector("#BOISSON").style.display = "none";
 	document.querySelector("#FRUIT").style.display = "none";
 	document.querySelector("#LEGUME").style.display = "none";

}

//----------------------------------------BOISSONS----------------------------------------

document.querySelector('button.boissons').addEventListener("click", myFunctionDrinks);

function myFunctionDrinks() {

  	document.querySelector("#BOISSON").style.display = "block";

  	document.querySelector("#CONFITURE").style.display = "none";
 	document.querySelector("#FRUIT").style.display = "none";
 	document.querySelector("#LEGUME").style.display = "none";
  
}


//---------------------------------------TOUT PRODUITS-------------------------------------

document.querySelector('button.produit').addEventListener("click", myFunctionAll);

function myFunctionAll() {

  	document.querySelector("#CONFITURE").style.display = "block";
  	document.querySelector("#BOISSON").style.display = "block";
 	document.querySelector("#FRUIT").style.display = "block";
 	document.querySelector("#LEGUME").style.display = "block";
  
}



//-----------------------------------------FRUITS------------------------------------------

document.querySelector('button.fruits').addEventListener("click", myFunctionFruits);

function myFunctionFruits() {

	document.querySelector("#FRUIT").style.display = "block";

  	document.querySelector("#CONFITURE").style.display = "none";
 	document.querySelector("#BOISSON").style.display = "none";
 	document.querySelector("#LEGUME").style.display = "none";
  
}

//-----------------------------------------LEGUMES------------------------------------------

document.querySelector('button.legumes').addEventListener("click", myFunctionVegetables);

function myFunctionVegetables() {

 	document.querySelector("#LEGUME").style.display = "block";

  	document.querySelector("#CONFITURE").style.display = "none";
 	document.querySelector("#BOISSON").style.display = "none";
 	document.querySelector("#FRUIT").style.display = "none";
  
}