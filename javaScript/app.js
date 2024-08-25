const stars1=document.querySelectorAll(".star1");
const stars2=document.querySelectorAll(".star2");
const stars3=document.querySelectorAll(".star3");
const stars4=document.querySelectorAll(".star4");
const stars5=document.querySelectorAll(".star5");
const stars6=document.querySelectorAll(".star6");

stars1.forEach(function(star1, index) {
    star1.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars1[i].classList.add('checked');
        }
        for(let i=index+1;i<stars1.length;i++){
            stars1[i].classList.remove('checked');
        }
    })
});

stars2.forEach(function(star2, index) {
    star2.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars2[i].classList.add('checked');
        }
        for(let i=index+1;i<stars2.length;i++){
            stars2[i].classList.remove('checked');
        }
    })
});

stars3.forEach(function(star3, index) {
    star3.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars3[i].classList.add('checked');
        }
        for(let i=index+1;i<stars3.length;i++){
            stars3[i].classList.remove('checked');
        }
    })
});

stars4.forEach(function(star4, index) {
    star4.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars4[i].classList.add('checked');
        }
        for(let i=index+1;i<stars4.length;i++){
            stars4[i].classList.remove('checked');
        }
    })
});

stars5.forEach(function(star5, index) {
    star5.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars5[i].classList.add('checked');
        }
        for(let i=index+1;i<stars5.length;i++){
            stars5[i].classList.remove('checked');
        }
    })
});

stars6.forEach(function(star6, index) {
    star6.addEventListener('click', function(){
        for(let i=0; i<=index; i++){
            stars6[i].classList.add('checked');
        }
        for(let i=index+1;i<stars6.length;i++){
            stars6[i].classList.remove('checked');
        }
    })
});