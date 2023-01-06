let containerNode=document.getElementById('container')

function td(){
let tdNodes=document.getElementsByTagName('td')
for(i=0;i<tdNodes.length;i++){
    let tdNode=tdNodes[i];
    console.log(tdNode.innerText)
}
}

function changeHeading(){
    let h1Node=document.getElementsByTagName("h1")[0];
    h1Node.innerText="Changed title"
}

function extraRow(){
    let table=document.getElementsByTagName('table')[0];
    let newRow=document.createElement('tr')
    newRow.classList.add('new-row')
    table.appendChild(newRow)
}
function classToRow(){
    let rows=document.getElementsByTagName('tr')
  
    for(i=0;i<rows.length;i++){
        let row=rows[i]
        row.classList.add('test')
    }
}
function redbg(){
    let links=document.getElementsByTagName('a');
    for(i=0;i<links.length;i++){
        let link=links[i];
        link.classList.add('redco')
    }

}

window.onload=function(){
    console.log("page loaded")
    


    let tdNodes=document.getElementsByTagName('td')
    for(i=0;i<tdNodes.length;i++){
        tdNode=tdNodes[i]
        tdNode.addEventListener("click",bgchange)
}
}

function addNewItems(){
    let ulNode=document.getElementById("unordered")
    let newli=document.createElement('li');
    newli.innerText="new";
    ulNode.appendChild(newli)
}
function emptyList(){
    let liNodes=document.getElementById('ordered').childNodes;
    for(i=0;i<liNodes.length;i++){
        let liNode=liNodes[i];
        liNode.innerText=''
    }
    

}

function alertLink(){
    let aNodes=document.getElementsByTagName('a')
    for(i=0;i<aNodes.length;i++){
        let aNode=aNodes[i]
      
        aNode.addEventListener("mouseover",function(){
            alert(aNode.href)
        })
    }
}
alertLink()


function hideImages(){
    let imgs=document.getElementsByTagName('img')
    for(i=0;i<imgs.length;i++){
        let im=imgs[i]
        im.classList.add('hidden')
    }
}

function hideShowTable(){
    let tableNode=document.getElementsByTagName('table')[0];
    tableNode.classList.toggle('hidden')
}



function sumOfTableCells(){
    let sum=0;
    let cells= document.getElementsByTagName('td')
    for(let i=0;i<cells.length;i++){
       // console.log( parseInt(cells[i].innerText))
        if(parseInt(cells[i].innerText)!=="NaN"){
            sum=sum+parseInt(cells[i].innerText)
        }
       // if(!isNaN(cells[i].innerText)) {
            //sum = sum+parseInt(cells[i].innerText)
       // } 
    }
    return sum;
}

function lastLetter(){
    let h1Node=document.getElementsByTagName('h1')[0]
    h1Node.addEventListener("click",function(){
        h1Node.innerText = h1Node.innerText.slice(0, -1)
    })
}
lastLetter()

function bgchange(event){
    event.target.style.backgroundColor="red";
      
}

function randomtd(){
  
    let tds=document.getElementsByTagName('td')
    let randnum=Math.floor(Math.random()*20+1)
    console.log(randnum)
    let td=tds[randnum]
    td.remove();
}
function pinkbd(){
    let tds=document.getElementsByTagName('td')
    for(i=0;i<tds.length;i++){
        let td=tds[i]
        td.addEventListener("mouseover",function(){
            td.classList.add('pink')
        })
    }
}
pinkbd();



function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 4; i++) {
      var tr = document.createElement('tr');
      tr.classList.add('tablecell')
      for (var j = 0; j < 3; j++) {
        if (i == 2 && j == 1) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
      
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }

  function lasttable(){
    let lasttab=document.getElementsByTagName('table')[1]
    lasttab.remove()
  }