var buttons = document.getElementsByTagName('button');

function inputvalue()
{
    var input = this.innerHTML;
    console.log(input) ;
   printvalue(input);
}

function printvalue(input)
{
    var out =document.querySelector("#result");
    var current = out.innerHTML;

    if(out.innerHTML == "0")
    {
        if(input!="AC")
        {
            out.innerHTML="";
            out.innerHTML+=input;
        }
    }
    else{
        if(out.innerHTML == "Del")
        {
            out.innerText=current.slice(0,-1);
            if(out.innerHTML.length<=1)
            out.innerHTML="0";
        }
        if(input!= "C" && input!="DEL" && input!="="){ 
            out.innerHTML += input;
          }
          if(input =="="){
            let res = out.innerHTML;
            out.innerHTML = eval(res);
          }
          if(input == "C"){
            out.innerHTML = "0";
          }
    }
}

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",inputvalue);
}