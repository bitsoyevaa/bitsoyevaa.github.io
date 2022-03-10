import React from 'react';




export function CheckboxesList({ checkboxesObject, onToggleCheckbox }) {
    if (!checkboxesObject) {
        return null;
    }

    const sum = Object.values(checkboxesObject).filter(entry => entry.checked).length*10;
    return (
        <div>
            {Object.entries(checkboxesObject).map(([key,entry], index) => (
                <label className="label" key={key}>
                    <input className="checkbox" type='checkbox' checked={entry.checked} onChange={()=>onToggleCheckbox(key)} />
                    <span className="checkboxName">{key}</span>
                </label>
            ))}
            <h3 className="h3">Итого: {sum}</h3>
        </div>
    )
}