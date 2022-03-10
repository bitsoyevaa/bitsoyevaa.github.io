import React from 'react';




export function Tab({activeTab, changeActiveTab, name}){
    const isActive = name === activeTab;
            const className = `tab ${isActive && 'active'}`;
            const handleTabClick = () => {
                changeActiveTab(name);
            }
            return <div className={className} onClick={handleTabClick}>{name}</div>
}