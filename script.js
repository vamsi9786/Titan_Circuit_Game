

let pointsRed=document.querySelector('#red-points');
let pointsBlue=document.querySelector('#blue-points');
let currentPlayer=document.getElementById('cur-player');


let countdown=document.getElementById('countdown');
let overallTime=document.getElementById('overalltimer');
let resetbtn=document.getElementById('reset2');
let pausebtn=document.getElementById('pause1');
let resumebtn=document.getElementById('resume1');
let svgres=document.getElementById('pauseres');

let redPoints=0;
let bluePoints=0;
let currplyrname;


let ovralltime5;
let trntime5;

let resumebtnres;
let pausebtnres;
let resetbtnres;

resetbtn.addEventListener('click',() =>{
    location.reload();
});



pausebtn.addEventListener('click',() =>{
    pausebtnres = true;
    svgres.setAttribute('z-index','4');
    svgres.setAttribute('background-color','black');
});

resumebtn.addEventListener('click',() =>{
    pausebtnres = false;
    svgres.setAttribute('z-index','0');
    svgres.setAttribute('background-color','#4b4b4b');
});


const adjacencyList ={
    n0: [],            //0 n0
    n1: ["n2","n6","n7"],      //1 n1
    n2: ["n1","n3"],         //2 n2
    n3: ["n2","n4","n9"],       //3 n3
    n4: ["n3","n5"],         //4 n4
    n5: ["n4","n6","n11"],      //5 n5
    n6: ["n1","n5"],         //6 n6
    n7: ["n8","n12","n1"],      //7 n7
    n8: ["n7","n9","n14"],      //8 n8
    n9: ["n8","n10","n3"],      //9 n9
    n10: ["n9","n11","n16"],     //10 n10
    n11: ["n10","n12","n5"],     //11 n11
    n12: ["n11","n7","n18"],    //12 n12
    n13: ["n14","n18"],       //13 n13
    n14: ["n13","n15","n8"],     //14 n14
    n15: ["n14","n16"],       //15 n15
    n16: ["n15","n17","n10"],     //16 n16
    n17: ["n16","n18"],        //17 n17
    n18: ["n17","n13","n12"],    //18 n18
};

const adjacencyList2 ={         
    n1: ["n2","n7"],       //1 n1
    n2: ["n3"],            //2 n2
    n3: ["n4","n9"],       //3 n3
    n4: ["n5"],            //4 n4
    n5: ["n6","n11"],      //5 n5
    n6: ["n1"],            //6 n6
    n7: ["n8"],            //7 n7
    n8: ["n9","n14"],      //8 n8
    n9: ["n10"],           //9 n9
    n10: ["n11","n16"],     //10 n10
    n11: ["n12"],          //11 n11
    n12: ["n7","n18"],     //12 n12
    n13: ["n14"],          //13 n13
    n14: ["n15"],          //14 n14
    n15: ["n16"],          //15 n15
    n16: ["n17"],          //16 n16
    n17: ["n18"],         //17 n17
    n18: ["n13"],         //18 n18
};



const edgewt = {
    n1n2 : 2 ,
    n2n3 : 1 , 
    n3n4 : 2 ,
    n4n5 : 1 ,
    n5n6 : 1 ,
    n6n1 : 3 ,
    n1n7 : 1 ,
    n3n9 : 1 ,
    n5n11 : 1 ,

    n7n8 : 5 ,
    n8n9 : 6 ,
    n9n10 : 4 ,
    n10n11 : 5 ,
    n11n12 : 6 ,
    n12n7 : 4 ,
    n8n14 : 1 ,
    n10n16 : 1 ,
    n12n18 : 1 ,

    n13n14 : 8 ,
    n14n15 : 8 ,
    n15n16 : 9 ,
    n16n17 : 8 ,
    n17n18 : 8 ,
    n18n13 : 9 ,
}


const nds = ["n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15","n16","n17","n18"];


function issubset(arr1,arr2){
   const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    
    const isSubset2 = [...set2].every(item => set1.has(item));
    return isSubset2;
}

function remele(arr,ele){
    for (let i= arr.length-1; i>=0; i--){
        if (arr[i]===ele){
            arr.splice(i,1);
        }
    }
}


function points(){
    redPoints=0;
    bluePoints=0;
    nds.forEach((node) => {
        let colr1 = document.getElementById(node);
        let clr1 = colr1.getAttribute('fill');

        adjacencyList2[node].forEach((nde) => {
            let colr2 = document.getElementById(nde);
            let clr2 = colr2.getAttribute('fill');
            if (clr1=='red' && clr1==clr2){
                redPoints = redPoints + edgewt[node+nde];
            }
            else if (clr1=='blue' && clr1==clr2) {
                bluePoints = bluePoints + edgewt[node+nde];
            }
        });
    });
}



const outhex = ["n1","n2","n3","n4","n5","n6"];
const midhex = ["n7","n8","n9","n10","n11","n12"];
const inhex = ["n13","n14","n15","n16","n17","n18"];




const allnodes = document.querySelectorAll('.nodes');


function arrequ(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    const srtd1 = [...arr1].sort();
    const srtd2 = [...arr2].sort();
    return srtd1.every((val, index) => val === srtd2[index]);
}

let outhexplcd=[];
let outhexplcd1=["n1","n2","n3","n4","n5","n6"];
let midhexplcd=[];
let midhexplcd1=["n7","n8","n9","n10","n11","n12"];

let plcdtitans = [];
let titans=["n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15","n16","n17","n18"];



let curridx = null;
let oldidx2 = null;
let newidx = null;

let trnInterval;


function starttrntimer(){
    clearInterval(trnInterval);
    
    let val2 =30;
    trnInterval= setInterval(()=>{
        if(!pausebtnres){
            val2=val2-1;
            trntime5=val2;
            countdown.innerHTML= val2 + " sec";
            if(val2<=0){
                clearInterval(trnInterval);
                alert("Time Up");
                currplyrname = (currplyrname=='Red')? "Blue" : "Red";
                currentPlayer.innerHTML= currplyrname;
                starttrntimer();
            }
        }
        else{
            val2=val2+0;
        }
    },1000);
    
}



let overallInterval;

function startovralltimer(){
    let val=900;
    overallInterval=setInterval(()=> {
        if(!pausebtnres){
            val=val-1;
            if(val>0){
                let min = Math.floor(val/60);
                let sec = val%60;
                overallTime.innerHTML= min + ":" + sec + " min";
            }
        }
        else{
            val=val+0;
        }
    },1000);
    if(val==0){
        clearInterval(overallInterval);
        alert("Time Up");
        location.reload();
    }
}


starttrntimer();
startovralltimer();


let j=1;

allnodes.forEach((choice) => {
    choice.addEventListener('click', function (e) {
        curridx= this.id;
        
        //placement phase 1 outer hex
        if (j<9 && !pausebtnres){
            
            if (outhex.includes(curridx) ) {
                if (this.getAttribute('fill') !== 'red' && this.getAttribute('fill') !== 'blue' && currplyrname=='Red') {
                    this.setAttribute('fill','red');
                    outhexplcd.push(curridx); // if getAttribute is red reset turntimer
                    plcdtitans.push(curridx);
                    j++;
                    currplyrname="Blue";
                    currentPlayer.innerHTML=currplyrname;
                    starttrntimer();
                }
                else if(this.getAttribute('fill') !== 'red' && this.getAttribute('fill') !== 'blue' && currplyrname=='Blue'){
                    this.setAttribute('fill','blue');
                    outhexplcd.push(curridx);     // if getAttribute is blue reset turntimer
                    plcdtitans.push(curridx);
                    j++;
                    currplyrname="Red";
                    currentPlayer.innerHTML=currplyrname;
                    starttrntimer();
                }
                else if (outhexplcd.includes(curridx)) {
                    alert('Already selected');
                }
            } 

            
            //placement phase2 midhex
            else {
                if(arrequ(outhexplcd,outhexplcd1) ){
                    if (j % 2 != 0 && midhex.includes(curridx) ) {
                        if (this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue' && currplyrname=='Red') {
                            this.setAttribute('fill','red');
                            midhexplcd.push(curridx);
                            plcdtitans.push(curridx);
                            j++;
                            currplyrname="Blue";
                            currentPlayer.innerHTML=currplyrname;
                            starttrntimer();
                        }
                        else if (this.getAttribute('fill') == 'red') {
                            alert('Already selected');
                        }
                        else if (this.getAttribute('fill') == 'blue' ) {
                            alert('Already selected');
                        }
                        
                    } 
                    else if (j % 2 == 0 && midhex.includes(curridx)) {
                        if (this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue' && currplyrname=='Blue') {
                            this.setAttribute('fill','blue');
                            midhexplcd.push(curridx);
                            plcdtitans.push(curridx);
                            j++;
                            currplyrname="Red";
                            currentPlayer.innerHTML=currplyrname;
                            starttrntimer();
                        }
                        else if (this.getAttribute('fill') == 'red' ) {
                            alert('Already selected');
                        }
                        else if (this.getAttribute('fill') == 'blue' ) {
                            alert('Already selected');
                        }
                        
                    }
                    else {
                        alert('mid hexagon is not filled yet');
                    }
                }
                else {
                    alert('outer hexagon is not filled yet');

                }
            }
        }
        
        //movement phase
        if (j>=10 && (!(issubset(plcdtitans,inhex))) && !pausebtnres) {   

            if(j%2==0){
                if(this.getAttribute('fill') == 'red' && currplyrname == 'Red' ){
                    oldidx = this.id;
                    oldidx2 = document.getElementById(this.id);
                    j++;
                    if(plcdtitans.includes(curridx)){
                        remele(plcdtitans,curridx);
                    }   
                    currplyrname = 'Red';
                    currentPlayer.innerHTML=currplyrname;
                    this.setAttribute('stroke','Black');
                }

                else if(this.getAttribute('fill') == 'blue' && currplyrname == 'Blue'){
                    oldidx = this.id;
                    oldidx2 = document.getElementById(this.id);
                    j++;
                    if(plcdtitans.includes(curridx)){
                        remele(plcdtitans,curridx);
                    }   
                    currplyrname = 'Blue';
                    currentPlayer.innerHTML=currplyrname;
                    this.setAttribute('stroke','Black');
                }

                else if (this.getAttribute('fill') == 'blue' && currplyrname != 'Blue'){
                    alert("Red Player Has to Play");
                    currplyrname = 'Red';
                    currentPlayer.innerHTML=currplyrname;
                }

                else if (this.getAttribute('fill') == 'red' && currplyrname != 'Red'){
                    alert("Blue Player Has to Play");
                    currplyrname = 'Blue';
                    currentPlayer.innerHTML=currplyrname;
                }

                else {
                    alert('Please select a Titan');
                }
            }
            

            else { 
                if (oldidx2.getAttribute('fill') == 'red' && this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue') {
                    if(currplyrname=='Red') {
                        if (adjacencyList[oldidx].includes(curridx)) {
                            this.setAttribute('fill','red');
                            oldidx2.setAttribute('fill','#4b4b4b');
                            plcdtitans.push(curridx);
                            j++;
                            oldidx2.setAttribute('stroke','white');
                            currplyrname="Blue";
                            currentPlayer.innerHTML=currplyrname;
                            starttrntimer();
                        }
                        else {
                            alert('Invalid move');
                        }
                    }
                    else {
                        alert("Player Blue has to play");
                    }
                }
                else if (oldidx2.getAttribute('fill') == 'blue' && this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue') {
                    if(currplyrname=='Blue') {
                        if (adjacencyList[oldidx].includes(curridx)) {
                            this.setAttribute('fill','blue');
                            oldidx2.setAttribute('fill','#4b4b4b');
                            oldidx2.setAttribute('stroke','white');
                            plcdtitans.push(curridx);
                            j++;
                            currplyrname="Red";
                            currentPlayer.innerHTML=currplyrname;
                            starttrntimer();
                        }
                        else {
                            alert('Invalid move');
                        }
                    }
                    else {
                        alert("Player Red has to play");
                    }
                }
                else {
                    alert('Already selected , Invalid move');
                }
            }  
                
        }

        if(j==9 & !pausebtnres){
            j++;
        }

        points();
        pointsRed.innerHTML= redPoints;
        pointsBlue.innerHTML= bluePoints;

        if((issubset(plcdtitans,inhex))){            
            setTimeout(() =>{
                if((redPoints!==bluePoints)){
                    if(redPoints>bluePoints) {
                        alert("Game Over Player Red Wins")
                    } 
                    else if(redPoints<bluePoints) {
                        alert("Game Over Player Red Wins");
                    }
                }
                else if(redPoints==bluePoints){
                    alert("Match Tied");
                }
                starttrntimer();
                startovralltimer();
                location.reload();
            } ,400);
        }
    });
});














