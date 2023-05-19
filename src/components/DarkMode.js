import React, {useState} from 'react';

export default function DarkMode() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const handleClick = () => {
        if (btnText === "Enable Dark Mode") {
            setBtnText('Disable Dark Mode');
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
        }
        else {
            setBtnText('Enable Dark Mode');
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
        }
    }
    return (
        <>
        <div className="container" style={myStyle}>
            <button className="btn btn-primary" onClick={handleClick}>{btnText}</button>
            <p>change to dark and light theme.</p>
        </div>
        </>
    )
}