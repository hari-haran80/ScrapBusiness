// ---------------  Image Slider for Front Page  -------------

document.addEventListener('DOMContentLoaded',()=>{

    const slides = document.querySelectorAll('.sliderImg');
    let CurrentSlider = 0;

    function ShowSlide(index){
        slides.forEach((slide, i) => {
            slide.classList.remove('Active');
            if (i === index){
                slide.classList.add('Active');
            }
        });
    }

    function nextSlide(){
        CurrentSlider = (CurrentSlider < slides.length - 1) ? CurrentSlider + 1 : 0; 
        ShowSlide(CurrentSlider);

    }
    document.getElementById('previous').addEventListener('click', ()=>{
        CurrentSlider = (CurrentSlider>0) ? CurrentSlider - 1 : slides.length - 1;
        ShowSlide(CurrentSlider);
    })

    document.getElementById('next').addEventListener('click', ()=>{
        nextSlide()
    })

    ShowSlide(CurrentSlider);

    setInterval(nextSlide, '4000')
})


// -------------  Slider for Customer Review  -----------------

let SlidePosition = 0;

const Sliders = document.querySelectorAll('.Customer-revive');
const totalSliders = Sliders.length;

function UpdatePosition() {
    Sliders.forEach(slide => {
        slide.classList.remove('SliderActive');
        slide.classList.add('hiddenSlider');
    });

    Sliders[SlidePosition].classList.add('SliderActive');

    dots.forEach(dot => {
        dot.classList.remove('activeDot');
    });

    dots[SlidePosition].classList.add('activeDot');
}

// Create Dots According to the Number of Images

const dotContainer = document.querySelector('.dots');
Sliders.forEach(slide => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[SlidePosition].classList.add('activeDot');


// Click Event for Dots

dots.forEach((dot , index)=> {
    dot.addEventListener('click', function(){
        SlidePosition = index;
        UpdatePosition();
    });
});

setInterval(()=>{
    if(SlidePosition == totalSliders -1){
        SlidePosition = 0;
    }
    else{
        SlidePosition++;
    }
    UpdatePosition();
},3000);