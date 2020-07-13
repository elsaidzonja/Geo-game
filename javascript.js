var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
function hide(Id) {
	"use strict";
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
	"use strict";
    document.getElementById(Id).style.display = "block";
}

function funksioni1() {
	"use strict";
	setTimeout(function () { hide("correct");
                }, 1000);
}
function funksioni2() {
	"use strict";
	setTimeout(function () {
        hide("wrong");
    }, 1000);
}
function stopCountdown() {
	"use strict";
    clearInterval(action);
}



function startCountdown() {
	"use strict";
    action = setInterval(function () {
        timeremaining -= 1;

        document.getElementById("timeremainingvalue").innerHTML =
            timeremaining;
        if (timeremaining === 0) {
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML =
                "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;

            document.getElementById("startreset").innerHTML = "StartGame";
        }
    }, 1000);
}

var indekseteMarra = [-1];
function gjeneroX(sasia) { "use strict"; var x;
    do {x = Math.round((sasia - 1) * Math.random()); } while (indekseteMarra.indexOf(x) > -1);
		return (x);
    }
function generateQA() { "use strict"; var capitals, states, y, correctPosition, answers, i, wrongAnswer;          states = ['4.canada', 'USA', 'mexico', 'guatemala', 'belize', 'honduras', 'el salvador', 'nicaragua', 'costaRica', 'panama', 'jamaica', 'cuba', 'bahamas', 'haiti', 'dominRepublic', 'puertoRico', 'Antigua&Barbuda', 'dominica', 'saintLucia', 'StVincent', 'grenada', 'barbados', 'Trinidad&Tobago', 'bermuda', 'colombia', 'venezuela', 'guyana', 'surinamme', '6.eccuador', '6.peru', '3.brazil', '6.bolivia', 'chile', '3.paraguay', 'uruguay', '3.argentina', '5.morocco', '5.westSahara', '5.algeria', '5.tunisia', '5.libya', '5.egypt', '5.mauritania', '5.mali', '5.chad', '5.sudan', '1.eritrea', '1.southSudan', '1.centralArica', '1.niger', '1.bourkinaFasos', '1.guinea', '1.senegal', '1.gambia', '1.guineaBissau', '1.sierraLeone', '1.liberia', '1.CoteDIvoir', '1.ghana', '1.togo', '1.benin', '1.nigeria', '1.cameroon', '1.gabon', '1.congo', '1.demRepCongo', '1.uganda', '1.ethiopia', '1.djibouti', '5.somalia', '1.kenia', '1.tanzania', '1.rwanda', '1.burundi', '1.malawi', '1.mozambique', '1.zambia', '1.zimbabwe', '1.angola', 'equatGuinea', '5.namibia', '5.botswana', '1.southAfrica', '1.lesotho', '1.swaziland', 'comoros', 'madagascar', '4.iceland', '4.faroeIslands', '4.normay', '4.sweden', '4.finland', '4.denmark', '4.scotland', '4.northIreland', '3.ireland', '3.wales', '3.england', '3.netherlands', '3.germany', '3.poland', '4.estonia', '3.latvia', '3.lithuania', '3.russia', '3.belarus', '3.ukraine', '3.slovakia', '3.checzhRep', '3.belgium', '3.luxemburgh', 'france', '6.switzerland', '6.liechtenstein', '6.austria', '3.hungary', '3.slovenia', 'croatia', '3.romania', 'italy', '3.moldova', '3.serbia', '3.bosnia', '3.sanMarino', '6.andorra', 'montenegro', '3.kosovo', '3.bulgaria', '3.macedonia', 'albania', 'greece', 'turkey', 'spain', 'portugal', 'gibraltar', 'malta', 'cyprus'];
    capitals = ['ottawa', 'washington', 'mexicoCity', 'guatemalaCity', 'belmopan', 'tegucigalpa', 'sanSalvador', 'managua', 'san jose', 'panamaCity', 'kingston', 'havana', 'nasau', 'PortAuPrince', 'SantoDomingo', 'san-Juan', 'road Town', 'roseau', 'castries', 'kingstown', 'StGeorges', 'bridgeTown', 'PortofSpain', 'hamilton', 'bogota', 'caracas', 'georgeTown', 'paramaribo', 'quito', 'lima', 'brazilia', 'sucre', 'santiago', 'asuncion', 'montevideo', 'BuenosAires', 'rabat', 'Layoune', 'algiers', 'tunis', 'tripoli', 'cairo', 'nouackchot', 'bamako', 'N-Jamena', 'khartoum', 'asmara', 'juba', 'bangui', 'niamey', 'ouagadougou', 'conakry', 'dakar', 'banjul', 'Bissau', 'freetown', 'monrovia', 'Yamoussoukro', 'accra', 'lome', 'porto-novo', 'abuja', 'Yaounde', 'libreville', 'brazaville', 'kinshasa', 'kampala', 'addis-abeba', 'djiboutiCity', 'mogadishu', 'nairobi', 'dodoma', 'kigali', 'bujumbura', 'lilongwe', 'maputo', 'lusaka', 'harare', 'luanda', 'malabo', 'windhoek', 'gaborone', 'pretoria', 'maseru', 'mbabane', 'moroni', 'antananarivo', 'reykjavik', 'torshavn', 'oslo', 'stockholm', 'helsinki', 'cobenhagen',  'edinburgh', 'belfast', 'dublin', 'cardiff', 'london', 'amsterdam', 'berlin', 'warsaw', 'talin', 'riga', 'vilnius', 'moscow', 'minsk', 'kiev', 'bratislava', 'prague', 'brussels', 'luxembourg', 'paris', 'bern', 'vaduz', 'vienna', 'budapest', 'ljubjana', 'zagreb', 'bucharest', 'rome', 'chisinau', 'beograd', 'sarajevo', 'sanMarino', 'LaVella', 'podgorica', 'prishtina', 'sofia', 'skopje', 'tirana', 'athens', 'ankara', 'madrid', 'lisbon', 'gibraltar', 'valleta', 'nicosia'];
	y = gjeneroX(states.length);
	indekseteMarra.push(y);
    correctAnswer = capitals[y];
    correctPosition = 1 + Math.round(3 * Math.random());
    var pattern1= new RegExp("1","g");
    var pattern3= new RegExp("3","g");
    var pattern4= new RegExp("4","g");
    var pattern5= new RegExp("5","g");
    var pattern6= new RegExp("6","g");
       if(pattern1.test(states[y])){
         document.getElementById("question").style.backgroundImage = "url('images/1.africa.jpg')";
       }   
            else if(pattern3.test(states[y])){
           document.getElementById("question").style.backgroundImage = "url('images/3.ceurope.jpg')";
       }    else if(pattern4.test(states[y])){
           document.getElementById("question").style.backgroundImage = "url('images/4.coldsea.jpg')";
       }   
            else if(pattern5.test(states[y])){
           document.getElementById("question").style.backgroundImage = "url('images/5.desert.jpg')";
       }   
            else if(pattern6.test(states[y])){
           document.getElementById("question").style.backgroundImage = "url('images/6.mountain.jpg')";
       }
                       else{
           document.getElementById("question").style.backgroundImage = "url('images/beach.jpg')";
       }             
    document.getElementById("question").innerHTML = states[y].split('.').pop();
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    answers = [correctAnswer];
    for (i = 1; i < 5; i += 1) {
        if (i !== correctPosition) {
            do {wrongAnswer = capitals[Math.round((states.length - 1) * Math.random())]; } while (answers.indexOf(wrongAnswer) > -1); // =>tregon qe gjendet


            document.getElementById("box" + i).innerHTML =
                   wrongAnswer;
            answers.push(wrongAnswer);
        }
    }

    }

document.getElementById("startreset").onclick = function () {
    "use strict";
	if (playing === true) { location.reload();  } else {

 

        playing = true;



        score = 0;
        document.getElementById("scorevalue").innerHTML = score;

 

        show("timeremaining");
        timeremaining = 100;

        document.getElementById("timeremainingvalue").innerHTML =
            timeremaining;



        hide("gameOver");

 
        document.getElementById("startreset").innerHTML = "Reset Game";
 
 

        startCountdown();

 

        generateQA();
    }
};
function funksioniLoopit(k) {
	"use strict";
	document.getElementById("box" + k).onclick = function () {
        if (playing === true) {
            if (this.innerHTML === correctAnswer) {

                score += 1;

                document.getElementById("scorevalue").innerHTML = score;
 
                hide("wrong");
                show("correct");
                funksioni1();
                generateQA();
            } else {
 
                hide("correct");
                show("wrong");
                funksioni2();
            }
        }
    };
}
var j;
for (j = 1; j < 5; j += 1) {
	funksioniLoopit(j);
   
}
  
     
     