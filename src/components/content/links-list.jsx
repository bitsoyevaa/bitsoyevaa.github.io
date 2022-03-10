import React from 'react';


export function LinksList({ linksObject }) {
    if (!linksObject) {
        return null;
    }
    return (
        <div>
            {Object.entries(linksObject).map(([key, entry], index) => (
                <div key={key}>
                    <h3>{key}</h3>
                    {Object.entries(entry).map(([linkKey, linkEntry]) => (
                        <a href={linkEntry.href} target='_blank' key={linkKey}>
                            {linkKey}
                        </a>
                    ))}
                </div>

            ))}
        </div>
    )
}