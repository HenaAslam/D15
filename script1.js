let cont=document.getElementById('container')


function columnContent(){
let tds=document.getElementsByTagName('td')
for(i=0;i<tds.length;i++){
    let tdNode=tds[i];
    let content=tdNode.innerText
    console.log(content)
}
}

function changeTitle(newTitle){
    let h1Node=document.getElementsByTagName('h1')[0];
    h1Node.innerText=newTitle;
}

function extraRow(){
    let tableNode=document.getElementsByTagName('table')[0];
    let newRow=document.createElement('tr')
    newRow.classList.add('rowClass')
    tableNode.appendChild(newRow)
}

function classRow(){
    let rowNodes=document.getElementsByTagName('tr');
    for(i=0;i<rowNodes.length;i++){
        let rowNode=rowNodes[i];
        rowNode.classList.add('test');
    }
}

function redbg(){
    let links=document.getElementsByTagName('a');
    for(i=0;i<links.length;i++){
        let link=links[i];
        link.classList.add('redco')
    }

}


function onLoadActions(){
    console.log('Page loaded')


    let h1Node = document.getElementsByTagName("h1")[0]
    h1Node.addEventListener("click", removeLastLetter)

    let tdnodes=document.getElementsByTagName('td')
    for(i=0;i<tdnodes.length;i++){
        let tdnode=tdnodes[i];
        tdnode.addEventListener("click", bgchange)
    }
}
window.onload=onLoadActions

function addNewItems(newItem){
    let ulNode=document.getElementById("unordered")
    let newli=document.createElement('li');
    newli.innerText=newItem;
    ulNode.appendChild(newli)
}

function emptyList(){
    let liNodes=document.getElementById('ordered').childNodes;
    for(i=0;i<liNodes.length;i++){
        let liNode=liNodes[i];
        liNode.innerText=''
    }
    

}


/*function linkHover(){
    let linkNodes=document.getElementsByTagName('a')
    for(i=0;i<linkNodes.length;i++){
        let linkNode=linkNodes[i];
        linkNode.addEventListener('mouseover',displayAnchor)
    }
}

function displayAnchor(event) {
    let hoveredLink=event.target.href
    alert(hoveredLink)
}*/


function removeImages(){
    let allImage=document.getElementsByTagName('img');
    for(i=0;i<allImage.length;i++){
        let indImage=allImage[i];
        indImage.hidden=true;
        
    }
}
function hideShowTable(){
    let tableNode=document.getElementById('theTable');
    tableNode.classList.toggle('forTable')
}



function sumOfTableCells(){
    let sum=0;
    let cells= document.getElementsByTagName('td')
    for(let i=0;i<cells.length;i++){
        if(!isNaN(cells[i].innerText)) {
            sum = sum+parseInt(cells[i].innerText)
        } 
    }
    return sum;
}
        
       
function removeLastLetter(event){
    let h1Node = document.getElementsByTagName("h1")[0]

    h1Node.innerText = h1Node.innerText.slice(0, -1)
}

function bgchange(event){
    event.target.style.backgroundColor= "red";
}


    
    
   
 