
const Questions = [{
    id: 0,
    q: "Which is the president of India?",
    a: [{ text: "ramnath kovind", isCorrect: false },
        { text: "pranab mukharjie", isCorrect: false },
        { text: "droupadi murmu", isCorrect: true },
        { text: "prativha debisingh patil", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of japan?",
    a: [{ text: "Roam", isCorrect: false, isSelected: false },
        { text: "bangkok", isCorrect: false },
        { text: "los angel", isCorrect: false },
        { text: "Tokiyo", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the currency of turkey?",
    a: [{ text: "dollar", isCorrect: false },
        { text: "pound", isCorrect: false },
        { text: "lira", isCorrect: true },
        { text: "dhiram", isCorrect: false }
    ]

},

{
    id: 3,
    q: "capital of USA ?",
    a: [{ text: "California", isCorrect: false },
        { text: "Chili", isCorrect: false },
        { text: "Washington, D.C.", isCorrect: true },
        { text: "New jersey", isCorrect: false }
    ]

}

]


var start = true;


function iterate(id) {


var result = document.getElementsByClassName("result");
result[0].innerText = "";


const question = document.getElementById("question");



question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');



op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";


op1.addEventListener("click", () => {
    op1.style.backgroundColor = "green";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
    selected = op1.value;
})


op2.addEventListener("click", () => {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "green";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
    selected = op2.value;
})


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "green";
    op4.style.backgroundColor = "red";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "green";
    selected = op4.value;
})


const evaluate = document.getElementsByClassName("evaluate");


evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "write";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "wrong";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 3) {
    id++;
    iterate(id);
    console.log(id);
}

})