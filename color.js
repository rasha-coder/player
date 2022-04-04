class color{
	constructor(){
this.color1=document.getElementById("color1")
this.color1.addEventListener("click",()=>{
this.select_color("color1");
})

this.color2=document.getElementById("color2")
this.color2.addEventListener("click",()=>{
this.select_color("color2");
})

this.color3=document.getElementById("color3")
this.color3.addEventListener("click",()=>{
this.select_color("color3");
})

this.color4=document.getElementById("color4")
this.color4.addEventListener("click",()=>{
this.select_color("color4");
})
if(localStorage.getItem("my_color")==null){
	document.getElementById("body").style.background="linear-gradient(to right, rgb(173 115 203),rgb(118 58 30))";
}this.select_color(localStorage.getItem("my_color"))
	}
	
	
	select_color(colore){
if(colore=="color1"){
	document.getElementById("body").style.background="#73cbcb";
} else if(colore=="color2"){
	document.getElementById("body").style.background="#ddb682";
}else if(colore=="color3"){
	document.getElementById("body").style.background="linear-gradient(to right, rgb(173 115 203),rgb(118 58 30))";
}else if(colore=="color4"){
	document.getElementById("body").style.background="linear-gradient(to right, rgb(219 29 99),  rgb(31 84 9))";
}
localStorage.setItem("my_color",colore)
	}
}
onload=new color();