let audio = document.querySelector('audio')
let icon = document.querySelector('#icon')
let img = document.querySelector('img')
let Status = false 

const playorstop = ()=>{
	Status = !Status

	if (Status == true) {
		audio.play()
		icon.classList.remove('bi-play-fill')
		icon.classList.add('bi-pause-fill')
		img.classList.add('animation-img')
	}else{
		audio.pause()
		icon.classList.remove('bi-pause-fill')
		icon.classList.add('bi-play-fill')
		img.classList.remove('animation-img')
	}
}

let timeMusic =audio.duration /60

const after = ()=>{
	audio.currentTime = 0
}

const before = ()=>{
	audio.currentTime = timeMusic -1
}

const Front = ()=>{
	audio.currentTime -= 5
}

const Back = ()=>{
	audio.currentTime += 5
}