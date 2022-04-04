class player{
	constructor(){
var main=document.getElementById("player");
var content=document.getElementById("content")
main.style.height=screen.height+"px";
if(screen.width<620){//ليتناسب مع اجهزة الهواتف
main.style.width=screen.width+"px";
}
content.style.height=screen.height-300+"px";
	}

}
class audio_player{
	constructor(){
this.audio_file=document.getElementById("audio_file");
this.titel_audio=document.getElementById("titel_audio");
this.play_puase=document.getElementById("play_puase")
this.isplayed;
this.play_puase.addEventListener("click",()=>{
	this.play_puases();
});


this.names_radio=["let to night","music in amirca","baby sleep"];
this.source_audio=["img/music1.mp3","img/music2.mp3","img/music3.mp3"];
this.server=0;
this.setResource();
document.getElementById("next").addEventListener("click",()=>{
	if(this.server<this.source_audio.length-1){
		++this.server;
		this.isplayed=false;
	}else{
		this.server=0
	}
	localStorage.setItem("save_sound",this.server)
	this.setResource();
	
});
document.getElementById("back").addEventListener("click",()=>{
	if(this.server>0){
		--this.server;
		this.isplayed=false;
		
	}else{
		this.server=this.source_audio.length-1;
	
	}
     localStorage.setItem("save_sound",this.server)
	this.setResource();
	
});

	}
	
	setResource(){
		if(localStorage.getItem("save_sound")!=null){
            this.server=localStorage.getItem("save_sound");
		}
		this.audio_file.src=this.source_audio[this.server];
		this.titel_audio.innerHTML=this.names_radio[this.server];
		this.play_puases();
	}
	play_puases(){
		if(this.isplayed==false){
			this.audio_file.play();
			this.play_puase.src="img/pause.png"
			this.isplayed=true;

		}else{
			this.audio_file.pause();
			this.play_puase.src="img/play.png"
			this.isplayed=false;
		}
	}
	
}

onload=new player();
onload=new audio_player();
