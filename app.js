const testParagraph = ['If you have an in-built app that records screen time, good, if you don’t have one, download it. It tells you how much you’re using your phone, how many times in the day you pick it up and which apps you waste most of your time on',
						'My phone has a fixed spot in the room. It is always on a table no matter where I am in my home. It doesn’t go around with me. Most people carry their phones wherever they go. Learn to live without it too!',
						'Fix the time you would like to use your phone for— Whatever suits you the best. I recommend not touching your phone right at the start of the day. I don’t touch mine',
						'Make frequent access to your phone difficult by removing fingerprint unlock and setting a long password that you have to type every time you wish to unlock your phone'];

const textArray  = document.getElementById('textArray');
const btn  = document.getElementById('btn');
const textarea = document.getElementById('textarea');
let startTime, endTime, totalTime;


const startTest = () =>{
	let randomNumber = Math.floor(Math.random()*testParagraph.length);
	textArray.innerText = testParagraph[randomNumber];

	const date = new Date();
	startTime = date.getTime();
	btn.innerText = 'Done';
}


const endTest = () =>{
	const date = new Date();
	endTime = date.getTime();

	totalTime = Math.floor((endTime - startTime)/1000);
	let totalstr = textarea.value;

	let wordCounter = counter(totalstr) -1;
	let speed = Math.floor((wordCounter/totalTime)*60);
	let finalMessage = 'Your typing speed is '+speed+ ' words per minute';

	finalMessage += compareTwoString(textArray.innerText, totalstr)

	textArray.innerText = finalMessage;


}

const compareTwoString = (str1, str2) =>{
 let stringOne = str1.split(" ");
 let stringTwo = str2.split(" ");
 let count = 0;;

 stringOne.forEach(function(items, index){
 	if(items == stringTwo[index]){
 		count++;
 	}
 })

 let errors = (stringOne.length - count);
	return (' with'+ errors + ' Mistake')
}


const counter = (string) =>{
	let totalNumberOfWords = string.split(' ').length;
	return totalNumberOfWords;
}		

textarea.disabled = true;

btn.addEventListener('click',function(){
	if (this.innerText == 'start'){
		textarea.disabled = false;
		startTest();
		textarea.focus();
	} else if (this.innerText == 'Done'){
		textarea.disabled = true;
		endTest();

		this.innerText  = 'start';
		textarea.value = '';
		}

})	

