import HeaderComponent from '../components/HeaderComponent'
import MessageBoard from '../components/MessageBoard'
import FooterComponent from '../components/FooterComponent'
import { Container, Row, Col, PopoverBody } from 'react-bootstrap';
import Body from '../components/Body';
import axios from 'axios';

export default function Home({jsonData}) {
  
  
  
  return (
    <>
    
                
                <Row><Col lg={2}></Col><Col lg={8}><HeaderComponent /></Col></Row>
                <Row><Col lg={2}></Col><Col lg={8}><Body jsonData = {jsonData}/></Col></Row>
                <Row><Col lg={2}></Col><Col lg={8}><FooterComponent /></Col></Row>
            
            
          
    </>
  )
}

export async function getStaticProps(){
  let jsonData;
  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/messages`);
    jsonData = data;
  }catch (error){
    console.log('API Error: ' + error);
  }
   return{
     props: {
       jsonData
     }
   }
  }

