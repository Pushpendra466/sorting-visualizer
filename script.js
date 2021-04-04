let sortingBox = document.querySelector('#sorting-box');

randomBars();
let done_bubbleSort = false;
function bubbleSort(){
    if(!done_bubbleSort)
    {startBubbleSort();}
}

function resetBubbleSort(){
    while(sortingBox.firstChild){
       sortingBox.removeChild(sortingBox.firstChild);
    }
    done_bubbleSort = false;
    randomBars();
}

function randomBars()
{for(let i=0 ; i<40 ;i++)
{   
    let x = Math.floor(Math.random() * 71);
    // console.log(x);
    const div = document.createElement('div');
    div.className = 'bar';
    div.style.height = x+'vh';
    div.style.order = i;
    sortingBox.appendChild(div);
}}
// #b45f70
function interChange(bar1,bar2){
    return new Promise((resolve)=>{
       var temp = bar1.style.order;
        bar1.style.order = bar2.style.order;
        bar2.style.order = temp;
        
        window.requestAnimationFrame(()=>{
            setTimeout(()=>{
                sortingBox.insertBefore(bar2,bar1);
                resolve();
            },50)
        })
    })
}

async function startBubbleSort(){
    let bars = document.querySelectorAll('.bar')
    for(let i =0;i<40; i++){
        let n = 40-i-1;
        for(let j=0; j<n;j++){
            const hh1 = bars[j].style.height;
            const hh2 = bars[j+1].style.height;
            const h1 = parseInt(hh1.substring(0,hh1.length-2));
            const h2 = parseInt(hh2.substring(0,hh2.length-2));
            bars[j].style.background = '#b45f70';
            bars[j+1].style.background = '#b45f70';
            await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },25)
            );
            if(h1>h2){
                await interChange(bars[j],bars[j+1]);
                bars = document.querySelectorAll('.bar'); //because the position of bars are changing
             
            }
            bars[j].style.background = 'crimson';
            bars[j+1].style.background = 'crimson';
        }
        bars[40-i-1].style.background = 'green'
    }
    done_bubbleSort = true;
}