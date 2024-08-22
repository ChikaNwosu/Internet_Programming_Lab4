let project1Name = prompt('Fill the text box for naming the project 1')
	if (!project1Name){
		project1Name = 'First project'
	}
	document.getElementById('project-1').innerText = project1Name

	let project2Name = prompt('Fill the text box for naming the project 2')
	if (!project2Name){
		project2Name = 'Secound project'
	}
	document.getElementById('project-2').innerText = project2Name
	
	let project3Name = prompt('Fill the text box for naming the project 3')
	if (!project3Name){
		project3Name = 'Third project'
	} 
	document.getElementById('project-3').innerText = project3Name

	let project4Name = prompt('Fill the text box for naming the project 4')
	if (!project4Name){
		project4Name = 'Mid-term Project'
	} 
	document.getElementById('project-4').innerText = project4Name
	
	let project5Name = prompt('Fill the text box for naming the project 5')
	if (!project5Name){
		project5Name = 'Final Project'
	} 
	document.getElementById('project-5').innerText = project5Name

	let answer1 = 'The let keyword in JavaScript is used to declare variables with block scope, meaning the variable is only accessible within the block where it is defined (such as inside a function, loop, or conditional). It also prevents redeclaration within the same scope.'
	document.getElementById('question-1').innerText = answer1