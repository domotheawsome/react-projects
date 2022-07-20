import React from "react"

export default function Form() {

    const initialFormData = {url: "", caption: "", accept: false, cancel: false}

    const [dialog, setDialog] = React.useState(false)
    const [formData, setFormData] = React.useState(initialFormData)

     
    function toggleDialog(e) {
            e.preventDefault()
            setDialog(prevDialog=>!prevDialog)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevFormData => {return {
            ...prevFormData, [name]: value
        }})
    }

    function handleAccept() {
        
    }

    function handleCancel(e) {
        e.preventDefault()
        setFormData(initialFormData)
        setDialog(prevDialog=>!prevDialog)
    }

// note to myself:

// change it so the state is in the parent and the child updates the state
// pass callback functions as props and have the child update it 
// that way i can access form data in the parent (and also have state in the parent which is good practice)

    return(
        <div>
        
            <button onClick={toggleDialog}>Open Photo Entry Dialog</button>
            {dialog && 
            <form>
                <input 
                    name="url" 
                    placeholder="Enter Photo URL" 
                    type="text" 
                    value={formData.url}
                    onChange={handleChange}
                />
                <input 
                    name="caption" 
                    placeholder="Enter Caption" 
                    type="text" 
                    value={formData.caption}
                    onChange={handleChange}
                />
                <button 
                    type="submit"
                    name="accept"
                >
                    Accept
                </button>
                <button 
                    type="reset"
                    name="cancel"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </form>
            
            }
       
        <h1>hi</h1>
        </div>
    )
}