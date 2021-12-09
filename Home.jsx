import { useState } from "react";
import { Modal,ModalBody,ModalHeader} from "reactstrap";

const Home=()=>{
    
     const store1=[{
        title:"Homer",
        author:"faulkner",
        subject:"as i lay dying",
    }];
    const [data,setData]=useState(["store1"]);
    const [newData,setnewData]=useState([]);

const onChangeHandler=(e)=>{
  console.log(e.target);
    setnewData(e.target.value);
}
const onChangeSubmit=(e)=>{
     setData([...data,newData]);
     setnewData('');
}

 
    return (
       <> 
        {data.map((each))=>
        return(
        {each.title}
        )};
          
   <Modal  >
      <ModalHeader >newData</ModalHeader>
       <ModalBody>
              <form >
                   <input type="text" placeholder="enter" value={newData} onChange={onChangeHandler} />
                   <button onClick={onChangeSubmit} type="button">add book</button>
                   <button onClick={()=>setData(data)} >updateData</button>
           </form>
    </ModalBody>
  </Modal>
  </>
    

          )
              }

export default Home;