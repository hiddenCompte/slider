let img_slider = document.getElementsByClassName("img__slider") ; 
let nbr_image = img_slider.length ;
let etape = 0  ; 
let actuel = document.getElementsByClassName("item");

function enleverimageactive () {
    for (let i=0 ; i<nbr_image ; i++)
    {
           img_slider[i].classList.remove('active') ;
           actuel[i].classList.remove('active');
    }    

}

let suivant = document.querySelector('.suivant') ;
let precedent = document.querySelector('.precedent') ;

suivant.addEventListener ( 'click' , function(){ 
            etape ++ ; 
            if(etape >= nbr_image){
                 etape = 0 ; 
            }
               enleverimageactive() ;
               img_slider[etape].classList.add('active') ;
               actuel[etape].classList.add('active');
})

precedent.addEventListener ( 'click' , function (){
    etape -- ; 
    if(etape < 0){
         etape = nbr_image -1 ; 
    }
       enleverimageactive() ;
       img_slider[etape].classList.add('active') ;
       actuel[etape].classList.add('active');
})

setInterval(() => {
    etape ++ ; 
            if(etape >= nbr_image){
                 etape = 0 ; 
            }
               enleverimageactive() ;
               img_slider[etape].classList.add('active') ;
               actuel[etape].classList.add('active');
    
}, 7000);




