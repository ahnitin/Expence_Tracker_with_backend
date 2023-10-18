async function main(){
    try{
        let res = await axios.get("http://localhost:3000/get")
        for(let i =0;i<res.data.allexpences.length;i++)
        {
            AddUsertoScreen(res.data.allexpences[i]);
        }
    }
    catch(err)
    {
        console.log(err);
    }
}
main();
let button = document.getElementById("buttn");
button.addEventListener("click",()=>{
    AddExpence(event);
})

function AddExpence(event)
{
    event.preventDefault();
    let price = exampleInputEmail1.value;
    let description = exampleInputPassword1.value;
    let option =inputGroupSelect02.value;

    let obj={
        price,
        description,
        option
    }

    AddToLocalStorage(obj);
}
async function AddToLocalStorage(obj)
{
    try{
        let res = await axios.post("http://localhost:3000/post",obj)
        console.log(res);
        AddUsertoScreen(res.data.newexpence);
    }
    catch(err){
        console.log(err);
    }
}
function AddUsertoScreen(obj)
{
    let childele = document.createElement("li");
    childele.textContent= obj.price + obj.description + obj.option+obj.id;
    let parent = document.getElementById("Listofexpence");
    parent.appendChild(childele);
    let deleteBtn = document.createElement("input");
    deleteBtn.type ="button";
    deleteBtn.value = "DELETE";
    let editBtn = document.createElement("input");
    editBtn.type = "button";
    editBtn.value ="EDIT";
    childele.appendChild(deleteBtn);
    childele.appendChild(editBtn);
    deleteBtn.onclick =()=>{
        Himanidevi(obj.id);
    } 
    editBtn.onclick = ()=>{
        Yuktadevi(obj)
        Himanidevi(obj.id)
    }


}
async function Himanidevi(id)
{
    
    
    let parent = document.getElementById("Listofexpence");
    for(let i =0;i<parent.children.length;i++)
    {
        let child = parent.children[i];
        if(child.textContent.includes(id))
        {
            parent.removeChild(child);
        }
    }
    await axios.delete("http://localhost:3000/delete/"+id)
}
function Yuktadevi(obj)
{
    document.getElementById("exampleInputEmail1").value = obj.price;
    exampleInputPassword1.value = obj.description;
    inputGroupSelect02.value = obj.option;
}