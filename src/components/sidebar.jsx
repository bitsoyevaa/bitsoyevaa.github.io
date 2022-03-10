import React from 'react';
import { CheckboxForm } from './sidebar/checkbox-form';
import { ImageForm } from './sidebar/image-form'
import { LinkForm } from './sidebar/link-form'
import { FolderForm } from './sidebar/folder-form'
 




export function Sidebar({ tabType, onCreateCheckbox, onCreateLink, onCreateImage, onCreateFolder, imagesObject, linksObject }){


return (<div className='sidebar'>
    {(tabType === 'links' || tabType === 'images') && <FolderForm onSubmit={onCreateFolder}  /> }
    {tabType === 'checkboxes' && <CheckboxForm onSubmit={onCreateCheckbox} />}
    {tabType === 'links' && <LinkForm onSubmit={onCreateLink} linksObject={linksObject}/>}
    {tabType === 'images' && <ImageForm onSubmit={onCreateImage} imagesObject={imagesObject} />}
</div>)
   
}