import { query, db,deleteDoc, addDoc, collection, onSnapshot, doc, where } from '../../firebase';
import { useEffect, useState } from "react"

function Accept() {
    const [acceptOrders, setAcceptOrders] = useState([]);
    useEffect(() => {
      const q = query(collection(db, "accept"),);
      onSnapshot(q, (querySnapshot) => {
        const accept = [];
        querySnapshot.forEach((doc) => {
          let id = doc.id
          let data =doc.data()
          accept.push({
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
        setAcceptOrders(accept);
      });
    }, []) 
   
    return (<>
       


{acceptOrders.map((eachTodo, i) => {

        return (
  
<div key={i} style={{display:"flex",flexDirection:'row',flexWrap:'wrap'}}>
<ul style={{disply:"inline"}}>
    <li style={{disply:"inline"}}> id: {eachTodo.id} </li>
    <li style={{disply:"inline"}}>name: {eachTodo.name}</li>
    <li style={{disply:"inline"}}> fatherName:{eachTodo.fatherName}</li>
    <li style={{disply:"inline"}}> CNiC: {eachTodo.cnic}</li>
    <li style={{disply:"inline"}}> DateofBirth: {eachTodo.dateOfBirth}</li>
    <li style={{disply:"inline"}}>  income: {eachTodo.income}</li>
    <li style={{disply:"inline"}}> category: {eachTodo.value}</li>
    <li style={{disply:"inline"}}>familyMemeber:{eachTodo.familyMemeber}</li>

</ul>
</div>
    )
  })}
                
               
               
               
              
               
       



</>







    );
}

export default Accept;