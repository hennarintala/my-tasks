import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function EditCustomer(props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname:'', lastname:'', streetaddres:'', postcode:'', city:'', email:'', phone:''}
    );


const handleClickOpen = () => {
    setCustomer({firstname:props.firstname, lastname:props.lastname, streetaddres:props.streetaddres, postcode:props.postcode, city:props.city, email:props.email, phone:props.phone})
    console.log(props);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) =>{
    setCustomer({...customer,[event.target.name]:event.target.value })
    console.log(customer)
  }

  const updateCustomer = () => {
      props.updateCustomer(customer,props.customer.links[2].href) 
      handleClose();
      

  }



  return (
    <div >
      <Button  size="small" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit customers information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the infomation for new customers
          </DialogContentText>
          <TextField
                autoFocus
                margin="dense"
                name="firstname"
                value={customer.firstname}
                onChange={e => handleChange(e)}
                label="firstname"
                fullWidth
              />
    
                <TextField
                autoFocus
                margin="dense"
                name="lastname"
                value={customer.lastname}
                onChange={e => handleChange(e)}
                label="lastname"
                fullWidth
              />
    
                <TextField
                autoFocus
                margin="dense"
                name="streetaddres"
                value={customer.streetaddres}
                onChange={e => handleChange(e)}
                label="street address"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="postcode"
                value={customer.postcode}
                onChange={e => handleChange(e)}
                label="postcode"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="city"
                value={customer.city}
                onChange={e => handleChange(e)}
                label="city"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                name="email"
                value={customer.email}
                onChange={e => handleChange(e)}
                label="email"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                name="phone"
                value={customer.phone}
                onChange={e => handleChange(e)}
                label="phone"
                fullWidth
              />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCustomer} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  }

