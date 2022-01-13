import React, { useState } from 'react';


// 1. Takes a prop, `const EditTrack = (   eachTrack   ) => {`
const EditTrack = (  { track }  ) => {

    //console.log(track.track)
    // 4. declare state using useState with the default value
    const [newtrack, setNewtrack] = useState(track.track)

   console.log(track.track_id)

// 10. setup that function `updateTrackFunc`
   const updateTrackFunc = async (e) => {

    console.log(e)
       e.preventDefault()
       
       console.log("HELLO")

        try{

            //11 store newtrack state in the body variable
            const body = { newtrack }
            console.log(body)

            //12 fetch using the correct id, using the props
            const response = await fetch(`http://localhost:8080/tracks/${track.track_id}`, {

                //13 use put method
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            console.log(response)
            14
            window.location = "/tracklist";
        }catch(err){
            console.error(err.message)
        }
    }

    return(
        <>
        {/* <!-- Button trigger modal --> */}
        {/*  7. EDIT button: Add `id` to the `data-target` */}
            <span 
            type="button" 
            className="btn" 
            data-toggle="modal" 
            data-target={`#id${track.track_id}`}>✏️</span>
        
        {/* <!-- Modal --> */}
        {/* 6. but all other data, pop up window shows the same value, in order to fix that edit `id`. "id10" */}
        <div className="modal fade" id={`id${track.track_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Edit Track</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <form onSubmit={ updateTrackFunc } className="modal-body">  
  
            {/* 2. add input attributes in the modal-body */}
                <input 
                    type="text" 
                    className='form-control' 
                    //5. add `value` with the `newtrack` from the state
                    value={newtrack} 
                    // 8. Add `onChange` attribute to the input tag
                    onChange={ e => setNewtrack(e.target.value)} 
                    />
           
            {/* 3. add `edit` button in the modal footer. */}
                <button 
                    type="button" 
                    className="btn btn-warning" 
                    data-dismiss="modal"
                    // onClick={e => {
                    //     updateTrackFunc(e);
                    //     return false;}}
                        >Edit</button>
                
                {/* <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-dismiss="modal">Close</button> */}
                
                {/* 9. add `onClick` attribute to fire on a mouse click to execute JS function */}
                {/* <button 
                    type="button" 
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={ e => updateTrackFunc(e)}
                    >Save changes</button> */}
            </form> 

            </div>
        </div>
        </div>
        </>
    )
}
export default EditTrack