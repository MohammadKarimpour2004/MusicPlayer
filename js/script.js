let audio = document.querySelector('audio')
let icon = document.querySelector('#icon')
let img = document.querySelector('img')
let list = document.querySelector('.musics')
let names = document.querySelector('h1')
let ranges = document.querySelector('input')
let Status = false 
let songgIndex = 0

let musics = [
	{name:'awat_1',music:'./music/music_1.ogg',image:'images/img_1.png'},
	{name:'awat_2',music:'./music/music_2.ogg',image:'images/img_2.png'},
	{name:'awat_3',music:'./music/music_3.ogg',image:'images/img_3.png'},
	{name:'awat_4',music:'./music/music_4.ogg',image:'images/img_4.png'},
	{name:'awat_5',music:'./music/music_5.ogg',image:'images/img_5.png'}
]

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

const nextORPrevious = (mm)=>{
    audio.src = mm.music
	img.src = mm.image
	names.innerText = mm.name	
} 

//musicTime
let timeMusic =audio.duration /60

const after = ()=>{
	songgIndex--;
  if (songgIndex < 0) {
    songgIndex = musics.length - 1;
  }
  nextORPrevious(musics[songgIndex]);
  audio.play();
}
const before = ()=>{
	songgIndex++;
  if (songgIndex > musics.length - 1) {
    songgIndex = 0;
  }
  nextORPrevious(musics[songgIndex]);
  audio.play();
}

const Front = ()=>{
	audio.currentTime -= 5
}

const Back = ()=>{
	audio.currentTime += 5
}

const change = ()=>{
	audio.currentTime = Number(ranges.value)
}
let time = setInterval(()=>{
	ranges.max = `${audio.duration}`
	ranges.value =`${audio.currentTime}`
},1000)

