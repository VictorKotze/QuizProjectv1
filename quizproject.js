
let currentQuestion = 0;
let score = 0;
let timeLeft = -1;
let timer; //this will be the timer function

let numHintsLeft =2; //allows uers 2 hints

let questions = [
   {
	"question": "When did WW2 officialy start?",
	"a": "1936",
	"b": "1939",
	"c": "1937",
	"d": "1940",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint": "Poland was attacked by germany close to the start of the 1940's"
   },
   {
	"question": "Which country had the second most casualties in WW2?",
	"a": "Soviet Union",
	"b": "Germany",
	"c": "United States",
	"d": "China",
	"image":"quizimages/q2.jpg",
	"answer": "d",
	"hint": "It's not Germany "
   },
   {
	"question": "Why did the United States join World War 2?",
	"a": "Unrestricted Submarine warfare from Germany",
	"b": "Mexico joined the Axis, and attacked America",
	"c": "Japan attacked Pearl Harbour",
	"d": "The United States were promised colonies if they attacked Germany",
	"image":"quizimages/q3.jpg",
	"answer": "c",
	"hint": "The United States were highly against Colonization"
   },
   {
	"question": "In the Northern Africa Campain which man was known as The Desert Fox",
	"a": "Kenneth Anderson ",
	"b": "Erwin Rommel",
	"c": "Bernard Montgomery",
	"d": "Giovanni Messe",
	"image":"quizimages/q4.jpg",
	"answer": "b",
	"hint": "The italian were known to have terrible performance throughout the war"
   },
   {
	"question": "What was the Nazi code name for a planned invasion of the United Kingdom during WW2?",
	"a": "The final Blitzkrieg",
	"b": "Operation Barbarossa",
	"c": "Operation Overlord",
	"d": "Operation Sealion",
	"image":"quizimages/q5.jpg",
	"answer": "d",
	"hint": "Blitzkrieg is a form of swift war "
   },
   {
	"question": "What was the largest battleship of World War 2?",
	"a": "The USS Missouri",
	"b": "Yamato",
	"c": "The Bismarck",
	"d": "HMS Queen Elizabeth",
	"image":"quizimages/q6.jpg",
	"answer": "b",
	"hint": "Western powers were highly limited by ship size because of the Second London Naval Treaty"
   },
   {
	"question": "What was Germany’s initial strategy for conquering Britain?",
	"a": "First establish air superiority, then send in ground forces",
	"b": "Immobilize London with poison gas attacks",
	"c": "First send in ground forces, then attack the country with aircraft",
	"d": "Immobilize London with poison gas attacks",
	"image":"quizimages/q7.jpg",
	"answer": "a",
	"hint": "Germany didn't have a big enough navy to destroy Britain's fleet "
   },
   {
	"question": "Via what route did Russians manage to send some supplies to Leningrad during the German siege of the city?",
	"a": "Airlifting supplies into Leningrad",
	"b": "A supply route across Lake Ladoga",
	"c": "A German supply line across the Black Sea",
	"d": "An underground railroad",
	"image":"quizimages/q8.jpg",
	"answer": "b",
	"hint": "This route was known as the Road of Life"
   },
   {
	"question": "After the Battle of Kursk, German forces did what?",
	"a": "Held their position until the end of the war",
	"b": "Advanced deeper into southern Russia",
	"c": "Advanced into Moscow",
	"d": "Began a lengthy retreat back to Germany",
	"image":"quizimages/q9.jpg",
	"answer": "d",
	"hint": "Kursk was the biggest tank battle of WW2"
   },
   {
	"question": "At what conference did the Allies set the terms for the Japanese surrender?",
	"a": "The Potsdam Conference",
	"b": "The Tehran Conference",
	"c": "The Casablanca Conference",
	"d": "The Yalta Conference",
	"image":"quizimages/q10.jpg",
	"answer": "a",
	"hint": "In This meeting it was also decided what to do to Germany"
   },
 ];
 
 //Idea: Question swap (1 use)
 //Idea: Timer
 //Idea: Question position swap
 //Idea: After user has a certain ammount of marks reduce the time the user has per question
 //Idea: Asking for tips (1 use)
 //Idea: 50/50 cut of questions (1 use)
 //Idea: Bonus question (1 use)
 //Idea: Retry Button


 

 
 
 
 function loadQuestion() {
     
	 //if the timer is running from the previous question stop it
	 if (timeLeft >= 0){
		 clearInterval(timer);
	 }
	 
	 
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct, your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect, your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
		
		console.log(score);
		if (score==1,2,3){
			message = "You know, you are a classic example of the inverse ratio between the size of the mouth and the size of the brain. (1,2, or 3 out of 10)";
		}
		
		if (score==4,5,6){
			message = "You have a basic knowledge of history, though you lack the finer details. (4,5, or 6 out of 10)";
		}
		
		if (score==7,8,9){
			message = "You have an amazing knowlege of history, but you still need to learn it all (7,8, or 9 out of 10)";
		}
		
		if (score==10){
			message = "You are a certified history person, and you most likely spend you free time playing World War Map games (10 out of 10) ";
		}
       // create a special message
      // message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
	   
    }
	else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
	
	//if a new question is loaded start a timer when the lightbox closes
	if (currentQuestion < questions.length - 1){
		startTimer();
	}
 } // closeLightbox
 
 
 //start the timer for the current question
 function startTimer(){
	 timeLeft = 10; //seconds
	 timer = setInterval( function(){
		  document.getElementById("countdown").innerHTML = timeLeft;
		  timeLeft--;
		  
		  if (timeLeft <= -1){
			  clearInterval(timer);
			  
			  //show the lightbox
			  let message = "Time over.Moving to next question";
			  document.getElementById("lightbox").style.display = "block";
              document.getElementById("message").innerHTML = message;
			  currentQuestion++;
			  loadQuestion();
		  }
	 }, 1000);
 }//startTimer
 

 

 
 function showHint(){
	 let message = "";
	 
	 
	 if (numHintsLeft > 0){
	 //unhide the lightbox with the hint in it
	 //current question's hint(need to add hints to questions)
	 
	 //get hint from qurrent question
	  message = questions[currentQuestion].hint;
	  numHintsLeft--; //subtract 1 fron NumHintsLeft
	 
	 } else { 
	 message = "You have no more hints left over";
	 };
	 //unhide the lightbox displaying hint
	  document.getElementById("lightbox").style.display = "block";
      document.getElementById("message").innerHTML = message;
	  
	 
 }//showHint
 
 
 
 
 
   
