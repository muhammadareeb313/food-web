import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { query, db,deleteDoc, addDoc, collection, onSnapshot, doc, where } from '../../firebase';
import { useEffect, useState } from "react"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




function Weather() {
  //   const [todo, settodo] = useState(null)


  //     const get =()=>{

  //   const q = query(collection(db, "users"),);
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //           console.log("New city: ", change.doc.data(3));
  //           settodo(change.doc.data())
  //           console.log(todo);
  //       }
  //       if (change.type === "modified") {
  //           console.log("Modified city: ", change.doc.data());
  //       }
  //       if (change.type === "removed") {
  //           console.log("Removed city: ", change.doc.data());
  //       }
  //     });
  //   });
  // }



  const [pendingOrders, setPendingOrder] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"),);
    onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        let id = doc.id
        let data =doc.data()
        orders.push({
          id:id,
          name:data.name,
          fatherName:data.fatherName,
          cnic:data.cnic,
          dateOfBirth:data.dateOfBirth,
          familyMemeber:data.familyMemeber,
          income:data.income,
          value:data.value,
        
        });
      });
      setPendingOrder(orders);
    });
  })




const accept= (id,name,fatherName,cnic,dateOfBirth,familyMemeber,income,value)=>{
  try {
    const docRef = addDoc(collection(db, "accept",), {
      id:id,
      name:name,
      fatherName:fatherName,
      cnic:cnic,
      dateOfBirth:dateOfBirth,
      familyMemeber:familyMemeber,
      income:income,
      value:value,
    
    
    });
    console.log("Document written with ID: ", docRef.id);




    
       deleteDoc(doc(collection(db,"users"), id));
    } catch (e) {
    console.error("Error adding document: ", e);
  }

console.log(id,name,fatherName,cnic,dateOfBirth,familyMemeber,income,value)
}
async function del(id) {
  await deleteDoc(doc(collection(db,"users"), id));
}
  return (
  <>


    {pendingOrders.map((eachTodo, i) => {

      return (

        <Card key={i} sx={{ minWidth: 275 }} style={{border:"1px solid red"}} >
          <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              id: {eachTodo.id}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              name: {eachTodo.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              fatherName:{eachTodo.fatherName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              CNiC: {eachTodo.cnic}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              DateofBirth: {eachTodo.dateOfBirth}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              familyMemeber: {eachTodo.familyMemeber}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              income: {eachTodo.income}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              category: {eachTodo.value}
            </Typography>
          </CardContent>
         <Button onClick={()=>{del(eachTodo.id)}}>Reject</Button>
         <Button onClick={()=>{accept(eachTodo.id,eachTodo.name,eachTodo.fatherName,eachTodo.cnic,eachTodo.dateOfBirth,eachTodo.familyMemeber,eachTodo.income,eachTodo.value)}}>Accept</Button>
</Card>
      )
    })}
  </>
  );
}
export default Weather;

{/* <div key={i}>
  <br />
  <div> id: {eachTodo.id}</div>
  <div> name: {eachTodo.fathername}</div>
  <div> cnic: {eachTodo.cnic}</div>

  <br />
</div> */}