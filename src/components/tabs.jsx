import React from 'react';
import {Tab} from './tab'

export function Tabs({tabsObject, activeTab, changeActiveTab}) {
return(
    <div className="wrapper">
        <div className="tabs"> {Object.keys(tabsObject).map((key, index) => (
            <Tab activeTab={activeTab} changeActiveTab={changeActiveTab} index={index} key={key} name={key}></Tab>
        ))}
        </div>
    </div>)
}
