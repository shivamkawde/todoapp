let count
let mainContant=document.querySelector(".mainContant")
let completed=document.querySelector(".completed");
let taskList=document.querySelector(".taskList");
taskList.addEventListener("click",function(e){
    if(completed.classList.contains("colorchange"))
    completed.classList.remove("colorchange"); 
    taskList.classList.add("colorchange");
    count=0;
})



let data;


 //data=JSON.parse(localStorage.getItem("myarr"))

completed.addEventListener("click",function(e){
   
         
      console.log(data);
    let getData=JSON.parse(localStorage.getItem("myarr"))
    if(count==getData.length)
    return
    count=getData.length;
    console.log(getData)
    console.log(count)

    for(let i=0;i<getData.length;i++)
    {
        
        let div=document.createElement("div");
    div.classList.add("datadiv")
    let input=document.createElement("input");
    input.classList.add("inp")
    let val=getData[i];
    input.value=getData[i];
    let  checkBox=document.createElement("input");
    checkBox.type="checkbox"
    checkBox.classList.add("check")
    let btn=document.createElement("button");
    btn.innerHTML='X'
    btn.classList.add("btn");
    div.append(checkBox)
    div.append(input)
    div.append(btn);
    mainContant.append(div);

        btn.addEventListener("click",function(e){
            //localStorage.removeItem("myarr")
            //div.remove()
            let vv=JSON.parse(localStorage.getItem("myarr"))
            for(let i=0;i<vv.length;i++){
             if(val==vv[i])
             {
                vv.splice(i,1);
                div.remove()
             }
        }

          localStorage.setItem("myarr",JSON.stringify(vv))

        })


    taskList.addEventListener("click",function(){
        div.remove()  
       })
       
           
    }





})

//console.log(getData)

completed.addEventListener("click",function(e){

    if(taskList.classList.contains("colorchange"))
    taskList.classList.remove("colorchange");
completed.classList.add("colorchange");
})


let mainBtn=document.querySelector(".mainBtn");
mainBtn.addEventListener("click",function(e){
    
let div=document.createElement("div");
div.classList.add("datadiv")
let input=document.createElement("input");
input.classList.add("inp")
let  checkBox=document.createElement("input");
checkBox.type="checkbox"
checkBox.classList.add("check")
let btn=document.createElement("button");
btn.innerHTML='X'
btn.classList.add("btn");
div.append(checkBox)
div.append(input)
div.append(btn);
mainContant.append(div);

btn.addEventListener("click",function(e){
    div.remove()
})
completed.addEventListener("click",function(e){
div.remove()
})

checkBox.addEventListener("click",function(e){
 if(checkBox.checked)
 {
     
    data = JSON.parse(localStorage.getItem("myarr"));
    console.log("hai")
    console.log(input.value)
    if(data==undefined)
    {
        data=[]
    }
    data.push(input.value)  
    console.log(data);

   localStorage.setItem("myarr",JSON.stringify(data))

 }
 else{
     console.log("nahi")
 }
})

})


console.log(data)