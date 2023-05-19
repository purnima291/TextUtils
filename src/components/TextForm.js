import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
        </div>
        <div className="container my-5">
            <h2>Your text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.toLowerCase()}</p>
        </div>
        </>
    )
}