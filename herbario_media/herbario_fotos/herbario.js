var MovingUpSpeed=5;
var InitialValues=[7,6,5,4,5,6,7,6,5,4];
var deg=0;
var Time=1;

function Search()
{
    var Text=document.getElementById("Text").value.toUpperCase();
    var Elements=document.getElementsByClassName("Searchable");
    var ElementText;
    var ResultNum=0;
    if(Text.length==0)
        {
            for(var i=0;i<Elements.length;i++)
                {
                    Elements[i].style.display="";
                }
            return;
        }
    for(var i=0;i<Elements.length;i++)
        {
            ElementText=Elements[i].getAttribute("id").toUpperCase();
            if(ElementText.substring(0,Text.length)==Text)
                {
                    ResultNum++;
                            
                    Elements[i].style.display="";
                }                
            else
                {
                        Elements[i].style.display="none";
                }
            
                
                
            
        }
    if(ResultNum==0 && Text.length!=0)
        {
                    document.getElementById("NoResult").style.display="";
        }
    else
        {
                    document.getElementById("NoResult").style.display="none";
        }
}



function ShowData(e)
{
    var El=document.getElementById(e).children[1];
    var index=$(".LanguageDetail").index(El);
    var MainElement=document.getElementsByClassName("LanguageDetail")[index];
    
    $(MainElement).slideToggle(300);



    var Logo=document.getElementById(e).children[0].children[0];
    var LogoRotation=parseInt(document.getElementById(e).getAttribute("LR"));
    if(LogoRotation==0)
        {
            Logo.style.transform="rotate(90deg)";
            Logo.style.webkitTransform="rotate(90deg)";
            document.getElementById(e).setAttribute("LR","90");
        }
    else
        {
            Logo.style.transform="rotate(0deg)";
            Logo.style.webkitTransform="rotate(0deg)";
            document.getElementById(e).setAttribute("LR","0");
        }



}



function OpenMenu()
{
    var Element=document.getElementById("Menu");
    var Height=parseInt($(Element).css("height"));
    if(Height==50)
        {
            Element.style.height=250;
        }
    else
        {
            Element.style.height=50;
           
        }
}

function ShowAll()
{
document.getElementById("Text").value="" ;
    var Elements=document.getElementsByClassName("LanguageDetail");
    var CurrentElement;
    var CollapseLogo=document.getElementsByClassName("CollapseLogo");
    for(var i=0;i<Elements.length;i++)
        {
            CurrentElement=Elements[i];
            CollapseLogo[i].style.transform="rotate(90deg)";
            CollapseLogo[i].style.webkitTransform="rotate(90deg)";
            document.getElementsByClassName("Searchable")[i].setAttribute("LR",90);
            $(CurrentElement).show(1000);  
            

        }
}
function HideAll()
{
    var Elements=document.getElementsByClassName("LanguageDetail");
    var CurrentElement;
    var CollapseLogo=document.getElementsByClassName("CollapseLogo");
    for(var i=0;i<Elements.length;i++)
        {
            CurrentElement=Elements[i];
            CollapseLogo[i].style.transform="rotate(0deg)";
            CollapseLogo[i].style.webkitTransform="rotate(0deg)";
            document.getElementsByClassName("Searchable")[i].setAttribute("LR",0);
            $(CurrentElement).hide(1000);  
            

        }
}

function LearnMore()
{
    document.location.href="https://www.elsevier.es/es-revista-offarm-4-articulo-plantas-medicinales-13120069";
}








function MoveCircles()
{
    var Circles=document.getElementsByClassName("Circles");
    var CY;

    var CurrentCircle;
    var ToMove;
    
    for(var i=0;i<Circles.length;i++)
        {
            CurrentCircle=Circles[i];
            CY=parseFloat(CurrentCircle.getAttribute("cy"));
            ToMove=CurrentCircle.getAttribute("tm");
            CY-=ToMove;
            ToMove-=0.1;
            CurrentCircle.setAttribute("cy",CY.toFixed(2));
            CurrentCircle.setAttribute("tm",ToMove);
            if(ToMove<-InitialValues[i])
                {
                    CurrentCircle.setAttribute("tm",InitialValues[i]);
                }
            
            

        }

}


function Load()
{
    if(deg==0)
        {
            Time++;
            if(Time>35)
                {
                    Time=0;
                }
            else
                {
                    return;
                }
            
        }
    var LoadingBar=document.getElementById("Load");
    LoadingBar.style.transform="rotate("+deg+"deg)";
    LoadingBar.style.webkitTransform="rotate("+deg+"deg)";
   // LoadingBar.style.mozTransform="rotate("+deg+"deg)";
    deg+=2;
    if(deg>=360)
        {
            deg=0;
            
        }
    if(deg==100)
        {
            LoadingBar.style.borderBottomColor="#74678A";
        
        }
    if(deg==50)
        {
            
            LoadingBar.style.borderRightColor="#74678A";
        }
    if(deg==200)
        {
            
        }
    if(deg==320)
        {
            LoadingBar.style.borderBottomColor="#F5F5F5";

           /// LoadingBar.style.borderRightColor="#1D1D1D";
        }
    if(deg==330)
        {
         //   LoadingBar.style.borderBottomColor="#1D1D1D";

            LoadingBar.style.borderRightColor="#F5F5F5";
        }
 

}





function HideLoadingBar()
{
    document.getElementById("Menu").style.opacity=1;
    document.getElementById("AboutProgramming").style.opacity=1;
    document.getElementById("Parent").style.opacity=1;
    document.getElementById("LoadingParent").style.display="none";
}



setInterval(Load,4);

setInterval(MoveCircles,17);

setInterval(Search,10);