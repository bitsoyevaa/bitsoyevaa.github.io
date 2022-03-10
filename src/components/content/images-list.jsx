import React from 'react';


export function ImagesList({ imagesObject }) {
    if (!imagesObject) {
        return null;
    }
    return (
        <div>
            {Object.entries(imagesObject).map(([key, entry], index) => (
                <div key={key}>
                    <h3>{key}</h3>
                    {Object.entries(entry).map(([imageKey, imageEntry]) => (
                        <img src={imageEntry.src} key={imageKey}/>
                    ))}
                </div>
                
            ))}
        </div>
    )
}