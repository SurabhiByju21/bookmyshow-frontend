import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Card  from 'react-bootstrap/Card';
import axios from "axios";
import {useParams} from "react-router";
import {useState, useEffect} from 'react';
// import data from "./movies.json";

function SingleMovieFetch() {
    //To get data from the Express Application
    const {movid} = useParams();
    const [singledata, setSingleData] = useState([]);

    useEffect( async () => {
        try {
            const response = await axios.get(`https://bookmyshow-backend21.herokuapp.com/movies/${movid}`);
            console.log(response);
            setSingleData([response.data]); //Wrapping into array
            console.log([response.data]);
          } catch (error) {
            console.error(error);
          }
    }, []); //Data can be fetched only once

    return(
        <div>
            <Container fluid style= {{padding:"8%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    { singledata.map((mov) =>
                          <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                          {/* <Card style = {{cursor:"pointer"}} onClick = {() => window.location.href="/AllMovies/"+mov._id }> */}
                          <Card>
                              <Card.Img variant="top" src={mov.imageurl} />
                              <Card.Body>
                              <Card.Title>{mov.title}</Card.Title>
                              <Card.Text>
                                  {mov.actor}
                              </Card.Text>
                              </Card.Body>
                              
                          </Card>
                          </Col >
                        )
                    }
                  
                    
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovieFetch;

//http://localhost:5000/movies/${movid}