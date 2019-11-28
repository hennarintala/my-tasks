import React, {useState, useEffect} from 'react';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 



const Customerslist = () => {
    const [customer, setCustomer] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchCustomer();
    }, [])


    const fetchCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }

    const DeleteCustomer = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => {
            toast.success("Customer Deleted", {
                position:toast.POSITION.BOTTOM_LEFT
            });
            fetchCustomer();
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
                    onClick: () => DeleteCustomer(link)
                
                }, {
                    label: 'No'
                }
            ]
        })
    }

    const saveCustomer = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
        {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newCustomer)
        }
    )
    .then(res => fetchCustomer())
    .catch(err => console.error(err) )
    }

    const updateCustomer = (customer, link) => {
        fetch (link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res=> fetchCustomer())
       .then(res => setMessage('Changes saved succesfully'))
        .then(res => setOpen(true))
       .catch(err=> console.error(err))

    }

  
   
        const columns = [
            {
            Header: 'Firstname',
            accessor: 'firstname'
        },  {
            Header: 'Lastname',
            accessor: 'lastname'
        },  {
            Header: 'Street address',
            accessor: 'streetaddress'
        },  {
            Header: 'Postcode',
            accessor: 'postcode'
        },  {
            Header: 'City',
            accessor: 'city'
        },  {
            Header: 'Email',
            accessor: 'email'
        }, {
            Header: 'Phone',
            accessor: 'phone'
        }, {
            id:'links[1].href',
            Header: 'Customer ID',
            accessor: ''
        }, {
            filterable: false,
            sortable: false,
            width:100,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>





        },  {
            accessor:'links[1].href',
            filterable: false,
            sortable:false,
            Cell: ({value}) => <Button size="small" color="secondary" onClick={() => confirmDelete(value)}>Delete</Button>     
        },
    ]


      

        return (
            <div>
            <h1>REGISTERED CUSTOMERS</h1>
            <AddCustomer saveCustomer={saveCustomer}/>
            <ReactTable data={customer} pageSize={10}  columns={columns} filterable={true}/>
            <Snackbar   message={message}/>
            <ToastContainer autoclose={1500} />
            </div>
        );
    }






export default Customerslist;
