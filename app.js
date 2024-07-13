const playbutton=document.querySelector("#play")
let isplayed=false;
const audioinput=document.querySelector('audio')
playbutton.addEventListener('click',function()
{
    console.log("Clicked")
    playpauseaudio()
}
)

function playpauseaudio()
{
    if(isplayed==false)
    {
        isplayed=true
        audioinput.play()
        playbutton.classList.replace("fa-play","fa-pause")
    }
    else{
        isplayed=false
        audioinput.pause()
        playbutton.classList.replace("fa-pause","fa-play")
    }
}
songslist=[{
    author:"AAA",
    imageandaudio:"image-1"
},
{
    author:"BBB",
    imageandaudio:"image-2"
},
{
    author:"CCC",
    imageandaudio:"image-3"
}
]
audioinput.addEventListener("timeupdate",function (info)
{
    let currenttime=info.srcElement.currentTime
    let duration=info.srcElement.duration
    let  currenttimeinsec=Math.floor(currenttime%60)
    let currenttimeinmins=Math.floor(currenttime/60)
    let durationinsec=Math.floor(duration%60)
    let durationinmins=Math.floor(duration/60)
    if(durationinsec<10)
        durationinsec=`0${durationinsec}`
    if(durationinmins<10)
        durationinmins=`0${durationinmins}`
    let durationinfull=`${durationinmins}:${durationinsec}`
    document.querySelector('.endtime').textContent=durationinfull
    if(currenttimeinmins<10)
    currenttimeinmins=`0${currenttimeinmins}`
    if(currenttimeinsec<10)
    currenttimeinsec=`0${currenttimeinsec}`
    let currenttimeinfull=`${currenttimeinmins}:${currenttimeinsec}`
    
    let changecurrtime=document.querySelector('.starttime')
    console.log(currenttimeinfull)
    changecurrtime.textContent=currenttimeinfull
    let percentoftime=(currenttime/duration)*100
    document.querySelector('.progressbar').style.width=`${percentoftime}%`
}
)
let index=0
let imgfile=document.querySelector('img')
function forwardbackward(dir)
{
    if(dir===true)
    {
        index++
        if(index===songslist.length)
        index=0
        
    }
    else
    {
        index--
        if(index===-1)
        index=songslist.length-1
    }
        audioinput.src=`audio/${songslist[index].imageandaudio}.mp3`
        imgfile.src=`images/${songslist[index].imageandaudio}.jpg`
        document.querySelector('h3').textContent=songslist[index].author
        let duration=audioinput.duration
        let durationinsec=Math.floor(duration%60)
        let durationinmins=Math.floor(duration/60)
        if(durationinsec<10)
        durationinsec=`0${durationinsec}`
        if(durationinmins<10)
        durationinmins=`0${durationinmins}`
        let durationinfull=`${durationinmins}:${durationinsec}`
        document.querySelector('.endtime').textContent=durationinfull

}
let forwardbutton=document.querySelector('#forward')
let backwardbutton=document.querySelector('#backward')
forwardbutton.addEventListener('click',function()
{
    forwardbackward(true)
    audioinput.play()
}
)
backwardbutton.addEventListener('click',function()
{
    forwardbackward(false)
    audioinput.play()
})