// run scripts when document loaded
$(document).ready(function(){

	//declare variables
	var answer1;
	var answer2;
	var answer3;
	var answer4;
	var answer5;
	var answer6;
	//empty array
	var answerArray = [];
	//initialize score
	var score = 5;
	// jQuery selector variables
	var $moustacheDiv = $('.moustache-wrapper');
	var $moustacheActual = $('.moustache-actual');
	var $resultsH2 = $('.resultsH2');
	var $resultsImg = $('.resultsImg');
	var $resultsDesc = $('.resultsDesc');

	//initialize functions
	function unCheckAll(){
		$('input[type="radio"]:checked').prop('checked', false);
	}
	function resetAnswers(){
		answer1 = undefined;
		answer2 = undefined;
		answer3 = undefined;
		answer4 = undefined;
		answer5 = undefined;
		answer6 = undefined;
	}

	$moustacheDiv.hide();
	$('.results').hide();

	// when a radio button gets clicked run a value check
	$('input[type="radio"]').on('click',function(){
		// add value of radio to a variable
		answer1 = $('input[name="question1"]:checked').val();
		answer2 = $('input[name="question2"]:checked').val();
		answer3 = $('input[name="question3"]:checked').val();
		answer4 = $('input[name="question4"]:checked').val();
		answer5 = $('input[name="question5"]:checked').val();
		answer6 = $('input[name="question6"]:checked').val();
		
		// log out the value to see it working!
		console.log(answer1);
		console.log(answer2);
		console.log(answer3);
		console.log(answer4);
		console.log(answer5);
		console.log(answer6);
	}); // radio listener

	// SUBMIT button IS PRESSED
	//===============================================================

	//listen for the submit button being pressed
	$('input[type="submit"]').on('click', function(e){
		// prevent page from reloading
		e.preventDefault();

		//check all answers have a value
		if (typeof answer1 === 'undefined' ||
			typeof answer2 === 'undefined' ||
			typeof answer3 === 'undefined' ||
			typeof answer4 === 'undefined' ||
			typeof answer5 === 'undefined' ||
			typeof answer6 === 'undefined'){
			alert('Whoops! You missed a question or two!?');
		} else{

			//push final answers into answerArray
			answerArray.push(answer1);
			answerArray.push(answer2);
			answerArray.push(answer3);
			answerArray.push(answer4);
			answerArray.push(answer5);
			answerArray.push(answer6);
			
			// log out to see listener working
			console.log('button pressed!');
			console.log(answerArray);

			//check answers and create a score
			//loop through each item in the array
			for (var i = 0; i < answerArray.length; i++){
				// make sure there is value in the radio if not break
				if ( typeof answerArray[i] === 'undefined' ){
					alert('You forgot to answer a question!');
					answerArray = [];
					break;
				// check values and add or subtract from score
				} else if ( answerArray[i] === "positive" ){
					score++;
					console.log(score);
				} else if ( answerArray[i] === "negative" ){
					score--;
					console.log(score);
				}
			} //looping through answerArray

			if (score === -1){
				// show the moustache
				$moustacheDiv.show();
				// change the source of the moustace image based on score
				$moustacheActual.attr("src", "assets/moustache.png");
				// inject the text
				$resultsH2.text('\"The He Who Shall Not Be Named\"');
				$resultsImg.attr('src', 'assets/results.jpg');
				$resultsDesc.text("Once a representation of laughter, this stache now typifies a true antagonist. No one wants this stache... do you? We won't judge.");
			} 
			else if (score === 1){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache1.png");

				$resultsH2.text('\"The Goatee\"');
				$resultsImg.attr('src', 'assets/results1.jpg');
				$resultsDesc.text("Nothing says gun-toting Texas oil baron more than this stache. Yosemite Sam would be proud.");
			}
			else if (score === 0){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache2.png");

				$resultsH2.text('\"The Fu Manchu\"');
				$resultsImg.attr('src', 'assets/results2.gif');
				$resultsDesc.text("Love the retro look?  Love comics or kung fu flicks? This is old school evil stache is you.");
			}
			else if (score === 3){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache3.png");

				$resultsH2.text('\"The Pervert\"');
				$resultsImg.attr('src', 'assets/results3.jpg');
				$resultsDesc.text("You should be ashamed of yourself. (Ya... we don't get our logic either)");
			}
			else if (score === 0){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache4.png");

				$resultsH2.text('\"The Dali\"');
				$resultsImg.attr('src', 'assets/results4.gif');
				$resultsDesc.text("Congradulations! You have the same creepy moustache as Salvador Dali!  You know...that guy who pained the melting clocks?");
			}
			else if (score === 5){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache5.png");

				$resultsH2.text('\"The Captian Hook\"');
				$resultsImg.attr('src', 'assets/results5.gif');
				$resultsDesc.text("While Captain Hook is pretty BADA55 his moustache is just plain bad.  Maybe if he spent less time waxing it, he could actually catch Peter Pan...but probably not.");
			}
			else if (score === 7){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache6.png");

				$resultsH2.text('\"The Hulkamania\"');
				$resultsImg.attr('src', 'assets/results6.jpg');
				$resultsDesc.text("Because of Hulk Hogan, no one takes this stache seriously. Perfect if you want to look tough without having to act tough.");
			}
			else if (score === 9){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache7.png");

				$resultsH2.text('\"The Selleck\"');
				$resultsImg.attr('src', 'assets/results7.gif');
				$resultsDesc.text("Now this is a stache.  Full yet clean. So lovable, even Flanders approves.");
			}
			else if (score === 0){
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache8.png");

				$resultsH2.text('\"The Super Mario\"');
				$resultsImg.attr('src', 'assets/results8.png');
				$resultsDesc.text("Itsa me! Mario!");
			}
			else{
				$moustacheDiv.show();
				$moustacheActual.attr("src", "assets/moustache9.png");

				$resultsH2.text('\"The Ryan Christiani\"');
				$resultsImg.attr('src', 'assets/results9.jpg');
				$resultsDesc.text("One facial hair style to rule them all! This style is known to cause a person to spontaneously clap, \"woo\" and chant \"JavaScript, JavaScript\".");
			}

			// hide the questions and show the results 
			$('.questions').hide();
			$('.results').show();


		} //end of undefined checker!
	}); // submit listener

	//reset button
	//==============================================================================================================
	$('.reset').on('click', function(){
		$('.questions').show();
		$('.results').hide();
		//reset variables
		score = 5;
		$moustacheDiv.hide();
		answerArray = [];
		resetAnswers();
		unCheckAll();
		console.log(score);

	}); // reset listener



	// run draggable jQuery UI
	$(function(){
		$(".moustache-wrapper").draggable();
	});
	// run resizable UI
	$(function() {
	    $( ".moustache-wrapper" ).resizable();
	 });



}); // document ready function













