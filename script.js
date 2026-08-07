const quotes=[

"Dream big. Start small. Act now.",

"Success comes from consistency.",

"Every expert was once a beginner.",

"Believe in yourself every single day.",

"Push yourself because no one else will.",

"Coding gets easier with practice.",

"Stay curious and keep learning.",

"Your future is created by today's efforts.",

"Small progress is still progress.",

"Discipline beats motivation."

];

function generateQuote(){

let random=Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML=quotes[random];

}