// box for bars of different sorting
let bubbleSortBox = document.querySelector('#bubble-sorting-box');
let selectionSortBox = document.querySelector('#selection-sorting-box');

// calling randomBars to fill the boxes of different sorting
let number_of_bars = 40;
randomBars(bubbleSortBox);
randomBars(selectionSortBox);

// boolean to check wheather sorting is done or not
let done_bubbleSort = false;
let done_selectionSort = false;
// on click Sort button 
function bubbleSort(){
    if(!done_bubbleSort)
    {startBubbleSort();}
}

function selectionSort(){
    if(!done_selectionSort)
    {startSelectionSort();}
}

// on click of reset button of different sortings
function resetBubbleSort(){
    while(bubbleSortBox.firstChild){
       bubbleSortBox.removeChild(bubbleSortBox.firstChild);
    }
    done_bubbleSort = false;
    randomBars(bubbleSortBox);
}

function resetSelectionSort(){
    while(selectionSortBox.firstChild){
        selectionSortBox.removeChild(selectionSortBox.firstChild);
    }
    done_selectionSort = false;
    randomBars(selectionSortBox);
}

// randomBars function to fill the boxes with bars

function randomBars(sortingBox)
{console.log(sortingBox.id.substring(0,sortingBox.id.indexOf('-')));
    let name = sortingBox.id.substring(0,sortingBox.id.indexOf('-'));
    for(let i=0 ; i<number_of_bars ;i++)
{   
    let x = Math.floor(Math.random() * 71);
    // console.log(x);
    const div = document.createElement('div');
    div.className = 'bar-'+name;
    div.style.height = x+'vh';
    div.style.order = i;
    sortingBox.appendChild(div);
}}

// #b45f70
function interChange(bar1,bar2){
    return new Promise((resolve)=>{
       let temp = bar1.style.order;
        bar1.style.order = bar2.style.order;
        bar2.style.order = temp;
        
        window.requestAnimationFrame(()=>{
            setTimeout(()=>{
                bubbleSortBox.insertBefore(bar2,bar1);
                resolve();
            },50)
        })
    })
}

// Bubble Sort Function
async function startBubbleSort(){
    let bars = document.querySelectorAll('.bar-bubble');
    for(let i =0;i<number_of_bars; i++){
        let n = number_of_bars-i-1;
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
                bars = document.querySelectorAll('.bar-bubble'); //because the position of bars are changing
             
            }
            bars[j].style.background = 'crimson';
            bars[j+1].style.background = 'crimson';
        }
        bars[number_of_bars-i-1].style.background = 'green'
    }
    done_bubbleSort = true;
}



// Selection Sort
function selectionInterChange(i,small){
    let bars = document.querySelectorAll('.bar-selection');
    let c = selectionSortBox.childNodes;
    // console.log(c[0]);
    return new Promise((resolve)=>{
        let temp = bars[i].style.order;
         bars[i].style.order = bars[small].style.order;
         bars[small].style.order = temp;
         
         window.requestAnimationFrame(()=>{
             setTimeout(()=>{
                selectionSortBox.insertBefore(bars[i],c[small+1]);
                selectionSortBox.insertBefore(bars[small],c[i]);
                
                 resolve();
             },500)
         })
     })
}
async function startSelectionSort(){
    let bars = document.querySelectorAll('.bar-selection');

        for(let i=0;i<number_of_bars-1;i++){
        
       let small = i;
        
        for(let j=i;j<number_of_bars;j++){
            const hh1 = bars[j].style.height;
            const hh2 = bars[small].style.height;
            const h1 = parseInt(hh1.substring(0,hh1.length-2));
            const h2 = parseInt(hh2.substring(0,hh2.length-2));
           
            if(h1<h2){
                small = j;
            }
            
        }
        bars[i].style.background = '#b45f70';
        bars[small].style.background = '#b45f70';
            await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },250)
            );
        await selectionInterChange(i,small);
        bars[i].style.background = 'crimson';
        bars[small].style.background = 'crimson';
        bars = document.querySelectorAll('.bar-selection');
        bars[i].style.background = 'green';
        }
        bars[number_of_bars-1].style.background = 'green';
        done_selectionSort = true;
}



// void Selection_sort(int a[],int n){

//     for(int i=0;i<n-1;i++){
    
//     int small = i;
    
//     for(int j=i;j<n;j++){
    
//         if(a[j]<a[small]){
//             small = j;
//         }
    
//     }
//     //Using inbuilt Swap Function 
//     swap(a[i],a[small]);
//     }
    
//     }