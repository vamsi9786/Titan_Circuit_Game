

let pointsRed=document.querySelector('#red-points');
let pointsBlue=document.querySelector('#blue-points');
let currentPlayer=document.getElementById('cur-player');
let countdown=document.getElementById('countdown');
let overallTime=document.getElementById('overalltimer');

let redPoints=0;
let bluePoints=0;
let currplyrname;
let ovralltmr=900;
let trntmr=30;

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
    n12: ["n11","n13","n18"],    //12 n12
    n13: ["n14","n18"],       //13 n13
    n14: ["n13","n15","n8"],     //14 n14
    n15: ["n14","n16"],       //15 n15
    n16: ["n15","n17","n10"],     //16 n16
    n17: ["n16","n18"],        //17 n17
    n18: ["n17","n13","n12"],    //18 n18
};



function issubset(arr1,arr2){
   const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const isSubset1 = [...set1].every(item => set2.has(item));
    const isSubset2 = [...set2].every(item => set1.has(item));
    return isSubset1 || isSubset2;
}

function remele(arr,ele){
    for (let i= arr.length-1; i>=0; i--){
        if (arr[i]===ele){
            arr.splice(i,1);
        }
    }
}




const outhex = ["n1","n2","n3","n4","n5","n6"];
const midhex = ["n7","n8","n9","n10","n11","n12"];
const inhex = ["n13","n14","n15","n16","n17","n18"];


const choices = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18];



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
let clrofnode;
let clrofnode2;


let j=1;

allnodes.forEach((choice) => {
    choice.addEventListener('click', function () {
        curridx= this.id;

        //placement phase 1 outer hex
        if (j<9){
            if (j % 2 != 0 && outhex.includes(curridx) ) {
                if (this.getAttribute('fill') !== 'red' && this.getAttribute('fill') !== 'blue') {
                    this.setAttribute('fill','red');
                    outhexplcd.push(curridx); // if getAttribute is red reset turntimer
                    plcdtitans.push(curridx);
                    j++;
                    currplyrname="Blue";
                    currentPlayer.innerHTML=currplyrname;
                    trntmr=30;
                    countdown.innerHTML=trntmr;
                }
                else if (outhexplcd.includes(curridx)) {
                    alert('Already selected');
                }
                else if (outhexplcd.includes(curridx)) {
                    alert('Already selected');
                }
                
            } 
            else if (j % 2 == 0 && outhex.includes(curridx) ) {
                if (this.getAttribute('fill') !== 'red' && this.getAttribute('fill') !== 'blue') {
                    this.setAttribute('fill','blue');
                    outhexplcd.push(curridx);     // if getAttribute is blue reset turntimer
                    plcdtitans.push(curridx);
                    j++;
                    currplyrname="Red";
                    currentPlayer.innerHTML=currplyrname;
                    trntmr=30;
                    countdown.innerHTML=trntmr;
                }
                else if (outhexplcd.includes(curridx) ) {
                    alert('Already selected');
                }
                else if (outhexplcd.includes(curridx)) {
                    alert('Already selected');
                }
            }
            //placement phase2 midhex
            else{
                if(arrequ(outhexplcd,outhexplcd1) ){
                    if (j % 2 != 0 && midhex.includes(curridx) ) {
                        if (this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue') {
                            this.setAttribute('fill','red');
                            midhexplcd.push(curridx);
                            plcdtitans.push(curridx);
                            j++;
                            currplyrname="Blue";
                            currentPlayer.innerHTML=currplyrname;
                            trntmr=30;
                            countdown.innerHTML=trntmr;
                        }
                        else if (this.getAttribute('fill') == 'red') {
                            alert('Already selected');
                        }
                        else if (this.getAttribute('fill') == 'blue' ) {
                            alert('Already selected');
                        }
                        
                    } 
                    else if (j % 2 == 0 && midhex.includes(curridx)) {
                        if (this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue') {
                            this.setAttribute('fill','blue');
                            midhexplcd.push(curridx);
                            plcdtitans.push(curridx);
                            j++;
                            currplyrname="Red";
                            currentPlayer.innerHTML=currplyrname;
                            trntmr=30;
                            countdown.innerHTML=trntmr;
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
        if (j>=10 && (!(issubset(plcdtitans,inhex)))) {   

            if(j%2==0){
                if(this.getAttribute('fill') == 'red' || this.getAttribute('fill') == 'blue'){
                    oldidx = this.id;
                    oldidx2 = document.getElementById(this.id);
                    j++;
                    if(plcdtitans.includes(curridx)){
                        remele(plcdtitans,curridx);
                    }
                }
                else {
                    alert('Please select a Titan');
                }
            }
            

            else { 
                if (oldidx2.getAttribute('fill') == 'red' && this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue') {
                    if (adjacencyList[oldidx].includes(curridx)) {
                        this.setAttribute('fill','red');
                        oldidx2.setAttribute('fill','#4b4b4b');
                        plcdtitans.push(curridx);
                        j++;
                        currplyrname="Blue";
                        currentPlayer.innerHTML=currplyrname;
                        trntmr=30;
                        countdown.innerHTML=trntmr;
                    }
                    else {
                        alert('Invalid move');
                    }
                }
                else if (oldidx2.getAttribute('fill') == 'blue' && this.getAttribute('fill') != 'red' && this.getAttribute('fill') != 'blue') {
                    if (adjacencyList[oldidx].includes(curridx)) {
                        this.setAttribute('fill','blue');
                        oldidx2.setAttribute('fill','#4b4b4b');
                        plcdtitans.push(curridx);
                        j++;
                        currplyrname="Red";
                        currentPlayer.innerHTML=currplyrname;
                        trntmr=30;
                        countdown.innerHTML=trntmr;
                    }
                    else {
                        alert('Invalid move');
                    }
                }
                else {
                    alert('Already selected , Invalid move');
                }
            }  
                
        }
        if(j==9){
            j++;
        }

        if((issubset(plcdtitans,inhex))){
            alert("Game Over");
            ovralltmr=900;
            overallTime.innerHTML=ovralltmr;
            trntmr=30;
            countdown.innerHTML=trntmr;
        }

    });
});










