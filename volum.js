class volum{
	constructor(){
		this.audio_file=document.getElementById("audio_file");
		
		this.audio_file.volume=50/100;//لان القيمه في الصوت من 0 الي 1 ولنجعلها في الوسط نكتب 50\100
		
		this.volume_rang=document.getElementById("volume_rang");
		this.volume_rang.addEventListener("change",()=>{
			this.audio_file.volume=this.volume_rang.value/100;//لان نسبة الشريط من 1 الي 100 ونسبة الصوت من 0 الي 1
		})

		this.volume_speed=document.getElementById("volume_speed");
		this.volume_speed.playbackRate=1;
		this.volume_speed.addEventListener("change",()=>{
			this.audio_file.playbackRate=this.volume_speed.value/100;//لان نسبة الشريط من 1 الي 100 وسرعة الصوت من 0 الي 2
		})
	}
	}
	onload=new volum();