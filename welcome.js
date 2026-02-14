let namebox = document.getElementById("name");

let checkName = (event)=>
{
    event.preventDefault();
    console.log(event);
    let s1 = namebox.value ;
    localStorage.setItem("name",s1);


    setTimeout(
        ()=>
        {

            window.location.href = "./quiz.html";
         } , 2000);
}