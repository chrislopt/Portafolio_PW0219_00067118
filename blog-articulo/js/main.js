window.onload=()=>{

    var d1 = document.getElementsById("1");
    var d2 = document.getElementsById("2");
    var d3 = document.getElementsById("3");
    var d4 = document.getElementsById("4");
    var d5 = document.getElementsById("5");

    d1.style.display="none";
    d2.style.display="none";
    d3.style.display="none";
    d4.style.display="none";
    d5.style.display="none";

    var btn1 = document.querySelector(".Dia1");
    var btn2 = document.querySelector(".Dia2");
    var btn3 = document.querySelector(".Dia3");
    var btn4 = document.querySelector(".Dia4");
    var btn5 = document.querySelector(".Dia5");

    btn1.addEventListener("click", ()=>{

        dia1.style.display="block";
        dia2.style.display="none";
        dia3.style.display="none";
        dia4.style.display="none";
        dia5.style.display="none";        


    });

    btn2.addEventListener("click", ()=>{

        dia1.style.display="none";
        dia2.style.display="block";
        dia3.style.display="none";
        dia4.style.display="none";
        dia5.style.display="none";        


    });

    btn3.addEventListener("click", ()=>{

        dia1.style.display="none";
        dia2.style.display="none";
        dia3.style.display="block";
        dia4.style.display="none";
        dia5.style.display="none";        


    });



    btn4.addEventListener("click", ()=>{

        dia1.style.display="none";
        dia2.style.display="none";
        dia3.style.display="none";
        dia4.style.display="block";
        dia5.style.display="none";        


    });

    btn5.addEventListener("click", ()=>{

        dia1.style.display="none";
        dia2.style.display="none";
        dia3.style.display="none";
        dia4.style.display="none";
        dia5.style.display="block";        


    });
}