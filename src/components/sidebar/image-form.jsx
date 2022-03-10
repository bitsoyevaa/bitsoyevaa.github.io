import React from 'react';


export function ImageForm({onSubmit, imagesObject}){
    const [nameImage, changeNameImage]=React.useState('');
    const [src, changeSrc]=React.useState('');
    const [nameFolder, changeNameFolder]=React.useState('');

    const isFieldsValid = nameImage && src && nameFolder

    function handleSubmit(){
        const trimNameImage=nameImage.trim();
        const trimSrc=src.trim();
        if (!isFieldsValid){
            return;
        }
        onSubmit(trimNameImage, trimSrc, nameFolder);
        changeNameFolder('');
        changeNameImage('');
        changeSrc('');
    }

    function handleChangeNameImage(event){
        changeNameImage(event.target.value);
    }

    function handleChangeSrc(event){
        changeSrc(event.target.value);
    }
    function handleChangeNameFolder(event){
        changeNameFolder(event.target.value);
    }
    if (!imagesObject){
        return null;
    }


    return(
        <>
        <input type="text" placeholder="Назовите картинку" className="input_sidebar" value={nameImage} onChange={handleChangeNameImage}/> 
        <input type="text" placeholder="Добавьте ссылку на картинку" className="input_sidebar" value={src} onChange={handleChangeSrc}/> 
        <select value={nameFolder} className='select' onChange={handleChangeNameFolder}>
            <option value=''>Выберите папку</option>
             {Object.keys(imagesObject).map(key=>(
            
             <option value={key} key={key}>{key}</option>
             )
             )}
        </select>
        <button className='button_sidebar' onClick={handleSubmit} disabled={!isFieldsValid}>Создать картинку</button>
        </>
    )

}