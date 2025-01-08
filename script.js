// container for canvas
const container = document.querySelector('.container');

// user input for grid size
let answer;

// creates grid based on either default 16x16 or with user input
function gridCreation(answer){
    // base
    if (answer == 0 || answer == undefined){
        answer = 16;
    }

    for(let j = 0; j < answer; j++){
        const col = document.createElement('div');
        
        // adding new node per col

        // default: 816x816px, cell is 50x50px with 1px margin
        for (let i = 0; i < answer; i++){
            const node = document.createElement('div');
            node.style.width = 816/answer + "px";
            node.style.height = 816/answer + "px";
            node.style.backgroundColor = 'black';
            node.style.margin = '1px';
            col.appendChild(node);
            
    
            //  color change 
            node.addEventListener('mouseover', function(e){
                e.target.style.background = 'white';
            });
        }
    
        //adding column to container
        container.appendChild(col);
    }    
}

// clear previous canvas before creating new one
// sets all container elements to ""
function gridClear(){
    container.innerHTML = "";
}

// button for grid size
const gridsize = document.getElementById("gridsize");

// clears grid then creates new grid with user input
gridsize.addEventListener("click", function (e){
    answer = prompt("grid");
    gridClear();
    gridCreation(answer);
});



gridCreation();

