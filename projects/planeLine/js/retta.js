function main(Output){
    var canvas = document.getElementById("xy");
    var height = document.getElementById("xy").clientHeight;
    var width = document.getElementById("xy").clientWidth;
    var ctx = canvas.getContext("2d");
    spawnPlane(ctx,height,width);
    retta = prompt("Equazione esplicita della retta:");
    genLine(ctx,height,width,retta,Output);
}

function spawnPlane(ctx,height,width){
    for(var i=0;i<height;i++){
        ctx.fillRect(i,Math.floor(height/2),2,2);
        ctx.fillRect(Math.floor(width/2),i,2,2);
        }
       
    }
function genLine(ctx,height,width,equation,Output){
    var segno = -1;
    var n=" ";
    var n1=" ";
    var y = 0;
    for(i=0;i<equation.length;i++){
            if(equation[i]!="=" && equation[i]!="y" && equation[i]!= "x"){
                    n += equation[i];
                }
            if(equation[i]=='x')break;
        }
    for(i+=1;i<equation.length;i++){
            if(equation[i] == '+')segno = 0;
            
            if(equation[i] == '-')segno = 1;
            
            if(equation[i] != ' ' && equation[i] != '+' && equation[i] != '-')
                n1+=equation[i];
                
    }
    if(n==" ")n="1";
    n=Number(n);
    n1=Number(n1);
    //alert("N="+n+" N1="+n1+" Segno="+segno);
    for(i=x=-Math.floor(height/2);i<height;i++,x++){
            //if(segno == 0)fillRect(i,n*x+n1);
            if(segno == 1){
                y = n*x;
                y=y-Number(n1);
                ctx.fillRect(Math.floor(width/2)-i,Math.floor(height/2)-(y*-1),2,2);
                Output.innerHTML+="Y="+y+" N="+n+" N1="+n1+"<br>";
            }
            else{
                y = n*i
                y= y + Number(n1);
                ctx.fillRect(Math.floor(width/2)-i,Math.floor(height/2)-(y*-1),2,2);
                Output.innerHTML+="Y="+y+"N="+n+"N1"+n1+"<br>";
            }
    }
    Output.innerHTML+="N="+n+" N1="+n1;
}
