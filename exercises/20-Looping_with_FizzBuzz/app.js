function fizzBuzz() {  
	// Your code here
	for(let i=1;i<=100;i++){
		let outP =""; 
		if(i%3==0){ 
			outP = outP+"Fizz"; 
		}
		if(i%5==0){ 
			outP = outP+"Buzz"; 
		}
		if(outP===""){
			outP = i;
		}
		console.log(outP);

	}
}

fizzBuzz();