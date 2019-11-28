
import React, {useState, useEffect} from 'react';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link } from "react-router-dom";
import Moment from 'react-moment';



function ExerciseAgenda() {
    useEffect(() => {
        fetchAgenda();
    }, []);
    
 
const [agenda, SetAgenda] = useState([]);

const fetchAgenda = async () => {
    const data = await fetch(
        'https://customerrest.herokuapp.com/api/trainings'
    );

    const agenda = await data.json();
    console.log(agenda.content);
    SetAgenda(agenda.content);

}

        return (
        
        <div className="App">
            <h1>TRAINING AGENDA</h1>
            {agenda.map(item => (
            <h3 key={item.links[2].href}>
               <Link to={'/calendar/${item.links[2].href}'}>
               {item.activity}    
               </Link> 
               <Moment format="   MMMM Do YYYY, h:mm:ss a">{item.dateToFormat}</Moment>
            </h3> 
            ))}
    
        </div>
     );
    
}


export default ExerciseAgenda;