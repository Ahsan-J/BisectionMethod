var xl=0;
var xu=0;
var index=0;
var Es = false;
var res = [];
function f(value){
    return (value*value)-2;
}
function mid(one,two){
    return (one+two)/2;
}
function absError(){
    if(Math.abs(res[index-2]-res[index-3])<0.001){
        Es = true;
        return true;
    }
    else{
        Es=false;
        return false;
    }
}
function calculation(){
    xl = Number(document.getElementById("lowerBound").value);
    xu = Number(document.getElementById("upperBound").value);
    while(index<15){
        if(index>3){
            if(absError()==true){
                addData();
                document.getElementById("ans").style.visibility="visible";
                var node = document.createTextNode(mid(xl,xu));
                document.getElementById("ans").appendChild(node);
                break;
            }
        }
        addData();
    }
}
function addData(){
    var table = document.getElementById("data_table");
    var td=[];
    for(var i=0;i<9;i++){
        td[i]=document.createElement("td");
    }        
        tr = document.createElement("tr");
        td[0].innerText = Number(index+1);
        td[1].innerText = xl;
        td[2].innerText = xu;
        td[3].innerText = Number(f(xl));
        td[4].innerText = Number(f(xu));
        td[5].innerText = Number(mid(xl,xu));
        td[6].innerText = Number(f(mid(xl,xu)));
        td[7].innerText = Number(f(xl)*f(mid(xl,xu)));
        td[8].innerText = Es;
    for(var i=0;i<9;i++){
        tr.appendChild(td[i]);
    }    
        
        res[index]=Number(f(xl)*f(mid(xl,xu)));
        if(Number(f(xl)*f(mid(xl,xu)))==0){
            alert(mid(xl,xu)+" is the root");
        }
        if(Number(f(xl)*f(mid(xl,xu)))<0){
            xu=mid(xl,xu);
        }
        else{
            xl=mid(xl,xu);            
        }
        table.appendChild(tr);
        index++;
}

function show(){
    document.getElementById("data_table").style.visibility = "visible";
}