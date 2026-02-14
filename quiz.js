let s1 = localStorage.getItem("name");
console.log(s1);

let playerbox = document.getElementById("playerbox");

let showName = ()=>
{

 playerbox.innerText ="Player :" +s1;

}
showName();


let a1 = [];
let current ;
let index = 0;

let questionbox = document.getElementById("question");

let optionbox = document.getElementById("options");

let nxt = document.getElementById("next-btn");
let scoreTag = document.getElementById("score");


let loadArray = async()=>
{

    a1 = await fetch("./quiz.json");
    a1 = await a1.json();
    showQuestion();
}

let showQuestion = ()=>
{   
    console.log(a1);
    current = a1[index];
     console.log(current);

    current.options.forEach((str, i) => 
        {
            let b1= document.createElement("button");
            b1.innerText = str;
            b1.classList.add("option-btn");
            b1.addEventListener("click", () =>
                 {
                    checkAnswer(i)
                });
            optionbox.appendChild(b1);
        }
    );
    questionbox.innerText= current.question ;
}

loadArray();

let nextQuestion = ()=>
{
    index++;
    optionbox.innerHTML = "";
    if(index === a1.length)
    {
        questionbox.innerText = "Quiz completed";
        nxt.style.display= "None";
        return;
    }
    showQuestion();
}

let score = 0;
let checkAnswer = (i)=>
{
    let b1 = document.querySelectorAll(".option-btn");
    b1.forEach(
        (btn,i)=>
        {
            btn.disabled = true ;
            if(i === current.correct)
            {
                btn.style.backgroundColor = "green";
                return;
            }
            btn.style.backgroundColor = "red";
        }
    );

    if(current.correct === i)
    {
        score++;
        scoreTag.innerText = "Score :" + score;

    }
}