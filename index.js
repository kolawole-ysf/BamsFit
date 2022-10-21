//toggle nav
const toggleBtn=document.querySelector('#toggle');

toggleBtn.addEventListener('click', toggleOn);

function toggleOn(){
    document.querySelector('.collection').classList.toggle('active');
}
//image slider on showcase
let i=0,
    images=[];
    time=5000;

    images[0]='Desktop - 1.jpg';
    images[1]='Desktop - 2.jpg';
    images[2]='Desktop - 3.jpg';
    images[3]='Desktop - 4.jpg';
    images[4]='Desktop - 5.jpg';

    function showcase(){
        document.slide.src=images[i];
        if(i<images.length-1){
            i++;
        }else{
            i=0;
        }
      setTimeout(showcase,time);
    }
    window.onload=showcase;
//form validation

