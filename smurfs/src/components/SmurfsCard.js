import React, {useState} from 'react'

import {Card, CardActions, IconButton, Tooltip} from '@material-ui/core'
import {Delete as DeleteIcon, Edit as EditIcon} from '@material-ui/icons'

const SmurfsCard = props => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Card>
            <h1>{props.props.name}</h1>
            Age: {props.props.age}
            Height: {props.props.height}
            <CardActions>
                <Tooltip title="edit">
                    <IconButton><EditIcon /></IconButton>
                </Tooltip>
                <Tooltip title="delete">
                    <IconButton><DeleteIcon /></IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}


export default SmurfsCard
  