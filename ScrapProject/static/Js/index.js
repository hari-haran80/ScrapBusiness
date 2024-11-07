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