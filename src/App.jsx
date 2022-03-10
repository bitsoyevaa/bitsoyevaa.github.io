import './App.css';
import React from 'react';
import { Tabs } from './components/tabs';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content-app'

function App() {
  const [tabName, changeTabName] = React.useState('');
  const [tabType, changeTabType] = React.useState('');
  const [tabsObject, changeTabsObject] = React.useState(JSON.parse(localStorage.getItem('tabsObject'))??{});
  const [activeTab, changeActiveTab] = React.useState(localStorage.getItem('activeTab'));
  const [checkboxesObject, changeCheckboxesObject] = React.useState(JSON.parse(localStorage.getItem('checkboxesObject'))??{});
  const [imagesObject, changeImagesObject] = React.useState(JSON.parse(localStorage.getItem('imagesObject'))??{});
  const [linksObject, changeLinksObject] = React.useState(JSON.parse(localStorage.getItem('linksObject'))??{});




  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tabName && !tabType) {
      return;
    };
    console.log(tabType);
    if (tabsObject[tabName]) {
      alert('Уже существует');
      return;
    };
    if (Object.keys(tabsObject).length === 0) {
      changeActiveTab(tabName);
    }
    changeTabsObject({ ...tabsObject, [tabName]: tabType });
    changeTabName('');

  };

  const handleChangeTabName = (event) => {
    changeTabName(event.target.value);


  };
  const handleChangeTabType = (event) => {
    changeTabType(event.target.value);

  };

  const handleCreateCheckbox = (nameCheckbox) => {
    changeCheckboxesObject({
      ...checkboxesObject,
      [activeTab]: {
        ...checkboxesObject[activeTab],
        [nameCheckbox]: { checked: false }
      }
    });
  }

  const handleToggleCheckbox = (nameCheckbox) => {
    changeCheckboxesObject({
      ...checkboxesObject,
      [activeTab]: {
        ...checkboxesObject[activeTab],
        [nameCheckbox]: { checked: !checkboxesObject[activeTab][nameCheckbox].checked }
      }

    })
  }

  const handleCreateImage = (nameImage, src, nameFolder) => {
    changeImagesObject({
      ...imagesObject,
      [activeTab]: {
        ...imagesObject[activeTab],
        [nameFolder]: {
          ...imagesObject[activeTab]?.[nameFolder],
          [nameImage]: { src }
        }
      }
    });
  }


  const handleCreateLink = (nameLink, href, nameFolder) => {
    changeLinksObject({
      ...linksObject,
      [activeTab]: {
        ...linksObject[activeTab],
        [nameFolder]: {
          ...linksObject[activeTab]?.[nameFolder],
          [nameLink]: { href }
        }
      }
    });
  }

  const handleCreateFolder = (nameFolder) => {
    if (tabsObject[activeTab] === 'images') {
      changeImagesObject({
        ...imagesObject,
        [activeTab]: {
          ...imagesObject[activeTab],
          [nameFolder]: {}
        }
      })
    } else if (tabsObject[activeTab] === 'links') {
      changeLinksObject({
        ...linksObject,
        [activeTab]: {
          ...linksObject[activeTab],
          [nameFolder]: {}
        }
      });
    }

  }
React.useEffect(()=>{localStorage.setItem('tabsObject', JSON.stringify(tabsObject))}, [tabsObject]);
React.useEffect(()=>{localStorage.setItem('activeTab', activeTab)}, [activeTab]);
React.useEffect(()=>{localStorage.setItem('imagesObject', JSON.stringify(imagesObject))}, [imagesObject]);
React.useEffect(()=>{localStorage.setItem('linksObject', JSON.stringify(linksObject))}, [linksObject]);
React.useEffect(()=>{localStorage.setItem('checkboxesObject', JSON.stringify(checkboxesObject))}, [checkboxesObject]);


  return (
    <div className="App">
      <header className="header">
        <form onSubmit={handleSubmit}>
          <input value={tabName} type="text" placeholder="Введите название вкладки" className="input" onChange={handleChangeTabName} />
          <select value={tabType} onChange={handleChangeTabType} className="select" >
            <option value="">Выберите тип вкладки</option>
            <option value="checkboxes">Список чекбоксов</option>
            <option value="links">Список ссылок</option>
            <option value="images">Папки с картинками</option>
          </select>

          <button className="button" type="submit" disabled={!tabName && !tabType}>Создать вкладку</button>
        </form>
      </header>

      <main className="content">
        <Tabs tabsObject={tabsObject} activeTab={activeTab} changeActiveTab={changeActiveTab} />
        {!!activeTab && (
          <>
            <Sidebar className="sidebar" tabType={tabsObject[activeTab]} onCreateCheckbox={handleCreateCheckbox} onCreateImage={handleCreateImage} onCreateLink={handleCreateLink} onCreateFolder={handleCreateFolder} imagesObject={imagesObject[activeTab]} linksObject={linksObject[activeTab]} />
            <Content className="content" tabType={tabsObject[activeTab]} activeTab={activeTab} checkboxesObject={checkboxesObject} linksObject={linksObject} imagesObject={imagesObject} onToggleCheckbox={handleToggleCheckbox} />
          </>)}
      </main>
    </div>
  );
}

export default App;







// Структуры данных - почитать (как что хранить)
// стили - настроить сайдбар/ сжимать вкладки 
// нарисовать дерево компонентов и как двигаются пропсы 


// аккаунт гитхаб   ----- ГОТОВО
// аккаунт на яндекс облаке и получить грант на облако   ----- ГОТОВО
// тримить все текстовые поля - проверка на валидность полей в имейдж-форм и линк-форм, как исправить то, что теперь тримится поле? и надо ли? Доделать трим табов
// настроить селекты - для tabType считает тип с пустым значением тоже выбором 
// залочить кнопки 
// читать про сети,  https://expressjs.com/ru/starter/faq.html

