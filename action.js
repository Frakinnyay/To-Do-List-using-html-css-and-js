const inputbox=document.getElementById("input-box");
const list=document.getElementById("list");
function addTask()
{
    if(inputbox.value ==='')
    {
        alert("please add task to begin");
    }
    else{
          let li=document.createElement("li");
          li.innerHTML=inputbox.value;
          list.appendChild(li);
          let span=document.createElement("span");
          span.innerHTML="\u00d7"
          li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
inputbox.addEventListener("keydown",function(f)
{
    if(f.key ==="Enter")
    {
        addTask();
    }
});
list.addEventListener("click", function(e)
{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        // alert("tu lund hai");
        savedata();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();

    }
},false);

list.addEventListener("dblclick",function(e)
{
    if(e.target.tagName==="LI")
    {
        const otext=e.target.childNodes[0].nodeValue.trim();
        const newtext=prompt("edit your task",otext);
        if(newtext.trim()!=="" &&newtext !==null)
        {
            e.target.childNodes[0].nodeValue=newtext;
            savedata();
        }
        
    }
})
// list.addEventListener("dblclick", function(e) {
//     if (e.target.tagName === "LI") {
//         const otext = e.target.childNodes[0].nodeValue.trim(); // get original text
//         const newtext = prompt("Edit your task", otext); // ask user to edit

//         if (newtext !== null && newtext.trim() !== "") {
//             e.target.childNodes[0].nodeValue = newtext; // update task
//             saveData(); // save changes to localStorage (optional)
//         }
//     }
// });

function savedata()
{
localStorage.setItem("data",list.innerHTML);
}

function showtask()
{
list.innerHTML=localStorage.getItem("data");
}
showtask();




