const db=firebase.firestore();
const table=document.querySelector('#myTable');


db.collection('student').get().then((snapshot)=>{
	snapshot.forEach(doc=>{
		console.log(doc.data().student_id);
		console.log(doc.data().student_name);
		showData(doc);
	});
});

function showData(doc) {
	var row=table.insertRow(-1);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);

	cell1.innerHTML=doc.data().student_id;
	cell2.innerHTML=doc.data().student_name;
}