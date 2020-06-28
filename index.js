var rand=Math.floor(Math.random()*6)+1;
var randomdice= "images/"+"dice"+rand+ ".png";
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",randomdice);
var rand2=Math.floor(Math.random()*6)+1;
var randomdice2= "images/"+"dice"+rand2+ ".png";
var imag1=document.querySelectorAll("img")[1];
imag1.setAttribute("src",randomdice2);

if(rand>rand2){
	document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(rand2>rand){
	document.querySelector("h1").innerHTML="Player 2 wins";}
	else if(rand2==rand){
		document.querySelector("h1").innerHTML="Draw";
	}
