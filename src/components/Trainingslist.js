import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import AddTraining from './AddTraining';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


const Trainingslist = () => {
    const [training, setTraining] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTraining();
    }, [])


    const fetchTraining = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTraining(data.content))
        .catch(err => console.error(err))
    }

    const DeleteTraining = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => {
            toast.success("Training Deleted", {
                position:toast.POSITION.BOTTOM_LEFT
            });
            fetchTraining();
        }) 
        .catch(err => {
            toast.error("ERROR DELETING", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            console.error(err)
        })
    }

    const confirmDelete = (link) => {
        confirmAlert({
            message: 'Do you really want to delete',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => DeleteTraining(link)
                
                }, {
                    label: 'No'
                }
            ]
        })
    }


    const saveTraining = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings',
        {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newTraining)
        }
    )
    .then(res => fetchTraining())
    .catch(err => console.error(err) )
    }

    


        const columns = [{
            Header: 'Date',
            accessor: 'date'
        },  {
            Header: 'Duration',
            accessor: 'duration'
        },  {
            Header: 'Activity',
            accessor: 'activity'
        }, {
            Header: 'Customer ID',
            accessor: 'links[2].href'
        }, {
    
            filterable: false,
            sortable:false,
            Cell: ({value}) => <Button size="small" color="secondary" onClick={() => confirmDelete(value)}>Delete</Button>     
        },
        
    ]


        return (
        
            <div className="App">
            <h1>TRAINING PROGRAMS</h1>
            <AddTraining saveTraining={saveTraining}/>
            <ReactTable data={training} pageSize={10} columns={columns} filterable={true}/>
            <Snackbar   message={message}/>
            <ToastContainer autoclose={1500} />

            </div>
        );
    }



export default Trainingslist;