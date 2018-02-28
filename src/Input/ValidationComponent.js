import React from 'react';

const ValidationComponent = (props) => {
    if(props.length <= 5){
        return (
            <div>
                <p>This is too small</p>
            </div>
        )
    } else if(props.length >= 10){
        return (
            <div>
                <p>This is too long!</p>
            </div>
        )
    }
    return(
       <div>
           <p>This is the proper length!</p>
       </div>
       
    )
}

export default ValidationComponent;