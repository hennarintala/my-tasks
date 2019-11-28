
import React, {useState, useEffect} from 'react';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; 


function Item() {
    useEffect(() => {
        fetchItem();
    }, []);
    

const [item, SetItem] = useState([]);


const fetchItem = async () => {
    const data = await fetch(
        'https://customerrest.herokuapp.com/api/customers/'
    );

    const item = await data.json();
    console.log(item.content);
    SetItem(item.content);  
}

        return (
        
        <div className="App">
                <h1>Training customers</h1>
              {item.map(item => (
            <h3 key={item.links[2].href}>
               {item.firstname} {item.lastname} 
            </h3>
            ))}
        </div>
    );  
}


export default Item;