

import Icon from './Components/Icon';
import React,{useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
const itemarray=new Array(9).fill("empty");



const App = () => {

 const [iscross,setIscross]=useState(false);
 const [winmessage,setWinmessage]=useState("");

 const reloadgame = () =>{
      setIscross(false);
      setWinmessage("");
      itemarray.fill("empty",0,9);
 }

 const checkiswinner = () => {
     if(itemarray[0]===itemarray[1] && 
      itemarray[0]===itemarray[2] &&
      itemarray[0]!=="empty"){
        setWinmessage(`${itemarray[0]} wins `)
      }
      else if(itemarray[3]===itemarray[4] && 
        itemarray[4]===itemarray[5] &&
        itemarray[3]!=="empty"){
          setWinmessage(`${itemarray[3]} wins `)
        }
        else if(itemarray[6]===itemarray[7] && 
          itemarray[6]===itemarray[8] &&
          itemarray[6]!=="empty"){
            setWinmessage(`${itemarray[6]} wins `)
        }
        else if(itemarray[0]===itemarray[3] && 
          itemarray[3]===itemarray[6] &&
          itemarray[0]!=="empty"){
            setWinmessage(`${itemarray[0]} wins `)
        }
        else if(itemarray[1]===itemarray[4] && 
          itemarray[4]===itemarray[7] &&
          itemarray[1]!=="empty"){
            setWinmessage(`${itemarray[1]} wins `)
        }
        else if(itemarray[2]===itemarray[5] && 
          itemarray[5]===itemarray[8] &&
          itemarray[2]!=="empty"){
            setWinmessage(`${itemarray[1]} wins `)
        }
        else if(itemarray[0]===itemarray[4] && 
          itemarray[4]===itemarray[8] &&
          itemarray[0]!=="empty"){
          setWinmessage(`${itemarray[0]} wins `)
        }
        else if(itemarray[2]===itemarray[4] && 
          itemarray[4]===itemarray[6] &&
          itemarray[2]!=="empty"){
          setWinmessage(`${itemarray[2]} wins `)
        }
 }

 const changeitem = itemnumber => {
     if(winmessage){
       return toast(winmessage,{type:"success"})
     }
    
     if(itemarray[itemnumber] === "empty"){
       itemarray[itemnumber]=iscross?"cross":"circle";
       setIscross(!iscross)
     }
     else{
       return toast("Already Filled",{type:"error"})
     }

     checkiswinner();
 }
  return (
    <Container className="p-5">
  
       <ToastContainer position="bottom-center"/>
     
         <Row>
           <Col md={6} className="offset-md-3">
             {winmessage ? (
               <div className='mb-2 mt-2'>
                 <h1 className="text-success text-uppercase text-center">
                   {winmessage}
                 </h1>
                 <Button color="success" block 
                 onClick={reloadgame} >
                Reload the game
                   </Button>

              
               </div>
             ) : (
              <h1 className="text-center text-warning">
                {iscross ? "Cross":"Circle"} turns
              </h1>
             )}
             <div className="grid">
                {itemarray.map((item,index) =>(
                  <Card onClick={()=> changeitem(index)}  color="warning">
                    <CardBody className="box">
                      
                      <Icon name={item}/>
                      
                      
                    </CardBody>
                  </Card>
                ))}
             </div>
           </Col>
         </Row>

     
    </Container>
  );
}

export default App;
