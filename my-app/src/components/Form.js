import React from "react"

export default function Form(props) {

    //const initialFormData = {url: "", caption: "", accept: false, cancel: false}

    //const [dialog, setDialog] = React.useState(false)
    //const [formData, setFormData] = React.useState(initialFormData)

     
    function toggleDialog(e) {
            e.preventDefault()
            props.setDialog(prevDialog=>!prevDialog)
    }

    function handleChange(e) {
        const {name, value} = e.target
        props.setFormData(prevFormData => {return {
            ...prevFormData, [name]: value
        }})
        /*
        if(props.formData.url === "" || props.formData.caption === "") {
            props.setErrorMessage(true)
        } else {
            props.setErrorMessage(false)
        }
        */
    }

    function handleCancel(e) {
        e.preventDefault()
        props.setFormData(props.initialFormData)
        props.setDialog(prevDialog=>!prevDialog)
    }


    return(
        <div>
            <button className="btn btn-outline-dark button--dialog" onClick={toggleDialog}>{props.dialog ? "Close" : "Open"} Photo Entry Dialog</button>
            {props.dialog && 
                <form>
                    <div className="form-group">
                        <label>Photo URL</label>
                        <input
                            className="form-control"
                            name="url" 
                            placeholder="Enter URL" 
                            type="text" 
                            value={props.formData.url}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Photo Caption</label>
                        <input 
                            className="form-control"
                            name="caption" 
                            placeholder="Enter Caption" 
                            type="text" 
                            value={props.formData.caption}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button--submit">
                        <button 
                            className="btn btn-outline-dark"
                            name="accept"
                            onClick={props.addCard}
                        > 
                            Accept 
                        </button>
                        <button 
                            className="btn btn-outline-dark"
                            type="reset"
                            name="cancel"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                    {props.errorMessage && 
                        <div class="alert alert-danger error " role="alert">You must enter both a URL and a caption. </div>
                    }
                </form>
            
            }
        </div>
    )
}