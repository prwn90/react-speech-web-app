import React from "react";
import { useSpeechSynthesis } from "react-speech-kit"; 

const Speech = () => {
    //Speech function
    const [value, setValue] = React.useState('');
    const { speak } = useSpeechSynthesis();

    return ( 
        <div className="speech">
            <div className="group">
                <h2>Text to Speech Web App! 🔊</h2>
            </div>

            <div className="group">
                <textarea rows="15" value={value} onChange={(e) => setValue(e.target.value)}>
                </textarea>
            </div>
            
                <div className="group">
                    <button onClick={() => speak({text: value})}><h3>SPEECH THIS! 📣</h3></button>
                </div>
        </div>
    )
}

export default Speech;