import React from 'react';

const DisplayItem = (props) => {
    return (
        <div onClick={()=>{props.deleteList(props.id)}}>
         <li>{props.items}</li>
        </div>
    )
}

export default DisplayItem
