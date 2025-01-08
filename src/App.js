import React, { useState } from 'react'
const App = () => {

    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState(''); 

    const generateImage = async () => {
        const width = 768;
        const height = 768;
        const seed = 42; // Each seed generates a new image variation
        const model = 'flux'; // Using 'flux' as default if model is not provided
        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
        setImage(imageUrl);
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1>Image Generator using Pollinations AI</h1>
            <input type="text" value={prompt} onChange={(e) => { setPrompt(e.target.value) }} placeholder='Enter your prompt' style={{ width: "300px", padding: "10px", borderRadius: "5px" }} />
            <br></br>
            <button onClick={generateImage} style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "purple", color: "white", borderRadius: "5px" }}>Generate</button>

            <br></br>

            {image && <div>

                    <img src={image} alt="Generated Image" style={{borderRadius: "5px", marginTop: "20px"}} />
                
                </div>}
            
            
        </div>
    )
}

export default App
