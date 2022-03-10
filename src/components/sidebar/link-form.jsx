import React from 'react';


export function LinkForm({onSubmit, linksObject}){
    const [nameLink, changeNameLink] = React.useState('');
    const [href, changeHref]=React.useState('');
    const [nameFolder, changeNameFolder]=React.useState('');

    const isFieldsValid = nameLink && href && nameFolder

    function handleSubmit(){
        const trimNameLink=nameLink.trim();
        const trimHref=href.trim();
        if (!isFieldsValid){
            return;
        }
        onSubmit(trimNameLink, trimHref, nameFolder);
        changeNameFolder('');
        changeNameLink('');
        changeHref('');
    }

    function handleChangeNameLink(event){
        changeNameLink(event.target.value);
    }

    function handleChangeHref(event){
        changeHref(event.target.value);
    }
    function handleChangeNameFolder(event){
        changeNameFolder(event.target.value);
    }
    if (!linksObject){
        return null;
    }
    return(
        <>
        <input type="text" placeholder="Назовите ссылку" className="input_sidebar" value={nameLink} onChange={handleChangeNameLink}/> 
        <input type="text" placeholder="Введите ссылку" className="input_sidebar" value={href} onChange={handleChangeHref}/> 
        <select value={nameFolder} className='select_sidebar' onChange={handleChangeNameFolder}>
            <option value=''>Выберите папку</option>
             {Object.keys(linksObject).map(key=>(
             <option value={key} key={key}>{key}</option>
             )
             )}
        </select>
        <button className='button_sidebar' onClick={handleSubmit} disabled={!isFieldsValid}>Создать ссылку</button>  
        </>
    )

}