import React from 'react';


export function FolderForm({onSubmit, tabType}){

    const [nameFolder, changeNameFolder]=React.useState('');
    

    function handleSubmit(){
        const trimNameFolder = nameFolder.trim();
        if (!trimNameFolder){
            return;
        };
        onSubmit(trimNameFolder,tabType);
        changeNameFolder('');
        
    }

    function handleChangeNameFolder(event){
        changeNameFolder(event.target.value);
    }

    return (
        <>
        <input type="text" placeholder="Назовите папку" className="input_sidebar" value={nameFolder} onChange={handleChangeNameFolder}/> 
        <button className='button_sidebar' onClick={handleSubmit} disabled={!nameFolder}>Создать папку</button>
        </>
    )
}