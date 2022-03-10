import React from 'react';
import { CheckboxesList } from './content/checkboxes-list';
import { ImagesList } from './content/images-list';
import { LinksList } from './content/links-list';


export  function Content({tabType, activeTab, checkboxesObject,linksObject, imagesObject, onToggleCheckbox }){

    if (tabType === 'checkboxes'){
        return <CheckboxesList checkboxesObject={checkboxesObject[activeTab]} onToggleCheckbox={onToggleCheckbox}/>
    } else if (tabType === 'links'){
        return <LinksList linksObject={linksObject[activeTab]} />
    } else if (tabType === 'images'){
        return <ImagesList imagesObject={imagesObject[activeTab]} />
    } else return null;
}
