
    function validateAge(){
        if(parseInt(document.getElementById("txtAge").value, 10) > 18){
            alert('you can vote');
            document.getElementById("OutputDisplay").innerHTML = 'you can vote';
        } else {
            alert('you are not eligible');
            document.getElementById("OutputDisplay").innerHTML = 'you are not eligible';
        }
    }
    function Add(){
        document.getElementById("txtNum03").value = 
        parseInt(document.getElementById("txtNum01").value, 10) + 
        parseInt(document.getElementById("txtNum02").value, 10)
    }
    function Sub(){
        document.getElementById("txtNum03").value = 
        parseInt(document.getElementById("txtNum01").value, 10) - 
        parseInt(document.getElementById("txtNum02").value, 10)
    }
    function Mul(){
        document.getElementById("txtNum03").value = 
        parseInt(document.getElementById("txtNum01").value, 10) * 
        parseInt(document.getElementById("txtNum02").value, 10)
    }
    function Div(){
        document.getElementById("txtNum03").value = 
        parseInt(document.getElementById("txtNum01").value, 10) / 
        parseInt(document.getElementById("txtNum02").value, 10)
    }