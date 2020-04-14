const db=firebase.firestore();

/*db.collection('student').get().then((snapshot)=>{
	snapshot.forEach(doc=>{
		console.log(doc);
	})
});
const table=document.querySelector('#')*/
/*var app = firebase.initializeApp(config);
var db;
db = firebase.firestore(app);*/

const formS=document.querySelector('#Studentfrom');
const formT=document.querySelector('#Teacherfrom');


formS.addEventListener('submit',(e)=>{
	e.preventDefault();
	//console past
	console.log(formS.student_id.value);
	console.log(formS.student_name.value.concat(" ", formS.student_lname.value));
	console.log(formS.student_password.value);
	console.log(formS.student_username.value);


	//database add to stdent_collection
	db.collection('student').add({
		student_id:formS.student_id.value,
		student_name:formS.student_name.value.concat(" ", formS.student_lname.value),
		student_password:formS.student_password.value,
		student_username:formS.student_username.value
	});

});


formT.addEventListener('submit',(e)=>{
	e.preventDefault();
	//console past

	console.log(formT.teacher_name.value.concat(" ", formT.teacher_lname.value));
	console.log(formT.teacher_password.value);
	console.log(formT.teacher_username.value);

	//database add to teacher_collection

	db.collection('teacher').add({
		teacher_name:formT.teacher_name.value.concat(" ", formT.teacher_lname.value),
		teacher_password:formT.teacher_password.value,
		teacher_username:formT.teacher_username.value
	});
});

