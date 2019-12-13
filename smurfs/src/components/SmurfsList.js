import React, {useState} from 'react'

import { connect } from 'react-redux'
import {getSmurfs, createSmurfs} from './../actions'

import {Button, CircularProgress, TextField} from '@material-ui/core'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'

import SmurfsCard from './SmurfsCard'

const SmurfsList = props => {

    const [open, setOpen] = useState(false);
    
    const [value, setValue] = useState({
        name: '',
        age: '',
        height: '',
        id: null
    })

    const handleChange = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.createSmurfs(value)
        handleClose()
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return (
        <>
            
            <Button onClick={props.getSmurfs}>Get Smurfs!</Button>

            {!props.smurfArray && !props.isFetching && <p>SMURFS!</p>}

            {props.isFetching && (<CircularProgress />)}

            {props.smurfArray && 
                <div>
                    {
                        props.smurfArray.map( smurf => (<SmurfsCard props={smurf} />))
                    }
                </div>}

            <Button color="primary" variant="contained" onClick={handleClickOpen}>Add Smurf</Button>
                        <Dialog open={open}
                            onClose={handleClose}>
                            <DialogTitle id="addSmurf">Add a new Smurf</DialogTitle>
                            <DialogContent>
                                <form onSubmit={handleSubmit}>
                                <TextField
                                    required 
                                    id="name"
                                    name="name"
                                    onChange={e => handleChange(e)}
                                    autoFocus/>
                                <TextField
                                    required 
                                    id="age"
                                    label="Age"
                                    name="age"
                                    onChange={e => handleChange(e)}
                                    autoFocus/>
                                <TextField
                                    required 
                                    id="name"
                                    label="Height"
                                    name="height"
                                    onChange={e => handleChange(e)}
                                    autoFocus/>
                                <Button type="submit" variant="contained">Add</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
            
        </>
    )
}


const mapStateToProps = state => {
    return {
      smurfArray: state.smurfArray,
      isFetching: state.isFetching,
      isUpdating: state.isUpdating,
      isDeleting: state.isDeleting
    }
  }
  
  
export default connect(
    mapStateToProps,
    {getSmurfs, createSmurfs})
    (SmurfsList);
  