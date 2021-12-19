import { collection ,query, where, getDocs, db}from '../../firebase' 
import React, { useEffect } from "react";


  function Dashboard() {
  useEffect( async ()=> {
  const q = query(collection(db, 'admins'))

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    
    console.log(doc.id, doc.data());
  });


  },[])
  return( 
    <div>|
        <h1>data fetch</h1>
    </div>
      
        )
    }
export default Dashboard;