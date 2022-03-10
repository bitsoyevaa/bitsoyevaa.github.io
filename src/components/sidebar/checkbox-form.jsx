import React from 'react';


export function CheckboxForm({onSubmit}){
    const [nameCheckbox, changeNameCheckbox] = React.useState('');

    function handleSubmit(){
        const trimNameCheckbox=nameCheckbox.trim();
        if(!nameCheckbox){
            return;
        }
        onSubmit(trimNameCheckbox);
        changeNameCheckbox('');
    }

    function handleChangeNameCheckbox(event){
        changeNameCheckbox(event.target.value);
    }
    return(
        <>
        <input type="text" placeholder="Назовите чекбокс" className="input_sidebar" value={nameCheckbox} onChange={handleChangeNameCheckbox}/> 
        <button className='button_sidebar' onClick={handleSubmit} disabled={!nameCheckbox}>Создать чекбокс</button>
        </>
    )

}