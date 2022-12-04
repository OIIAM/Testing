/* Gallery */
var zoomImg = document.getElementById('zoom-img-id');
var zoomImgImg = document.getElementById('ZoomImg');

function OpenZoomIMG(galleryimg){
    zoomImg.style.display ="flex";
    zoomImgImg.src = galleryimg;
}
function ExitZoomIMG(){
    zoomImg.style.display="none";
}

//NavBar
const toggleB = document.getElementById('menubutton')
const NavList = document.getElementById('navList')

toggleB.addEventListener('click', () => {
    NavList.classList.toggle('active');
})

// Scroll to Top Function

let BTTButton = document.getElementById('BackToTopBtn');
/*button appear after user scolls*/
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        BTTButton.style.display = "block";
    }
    else{
        BTTButton.style.display= "none";
    }
}
/* Scroll back to top of page after user clicks */
function TOPFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



/* Music-Video.html */
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video iframe');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text =  video.children[1].innerHTML;
            title.innerHTML = text;
            
          };
        };
});