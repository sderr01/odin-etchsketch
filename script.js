// const para = document.createElement('p');
const container = document.querySelector('.container');
// para.textContent = "HEllo";
// container.appendChild(para);
// para.style.color = 'red';

// const node = document.createElement('div');
// node.setAttribute('style', 'width: 100px; height: 100px; background: blue;');
// container.appendChild(node);
// const node2 = document.createElement('div');
// node2.setAttribute('style', 'width: 100px; height: 100px; background: red;');
// container.appendChild(node2);


// node.addEventListener('mouseover', function(e) {
//     e.target.style.background = 'pink';
// });


for(let j=0; j<16; j++){
    const col = document.createElement('div');
    
    // adding new node per col
    for (let i = 0; i < 16; i++){
        const node = document.createElement('div');
        node.setAttribute('style', 'width: 50px; height: 50px; background: blue');
        node.style.margin = '1px';
        col.appendChild(node);
    }

    //adding column to container
    container.appendChild(col);
}


container.addEventListener('mouseover', function(e){
    e.target.style.background = 'pink';
});