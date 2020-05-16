import { aboutTab }   from './aboutTab'
import { menuTab }    from './menuTab'
import { contactTab } from './contactTab'
import { eventsTab }  from './eventsTab'

const content = document.getElementById('content');
const contentBox = document.createElement('div');

function populate(content){
  let contentWrapper = document.createElement('div');
  contentWrapper.setAttribute('id', 'content-wrapper');
  
  let title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.textContent = 'The Chili Trough';
  
  let tabDivider = document.createElement('h1');
  tabDivider.setAttribute('class', 'tab-divider');
  
  let pageNav = document.createElement('nav');
  pageNav.setAttribute('id', 'page-nav');
  
  let navTabAbout = document.createElement('span');
  navTabAbout.setAttribute('class', 'nav-tab');
  navTabAbout.setAttribute('id', 'nav-about');
  navTabAbout.textContent = 'About';
  pageNav.appendChild(navTabAbout);
  navTabAbout.addEventListener('click', function(){aboutTab(contentBox)});
  
  let navTabMenu = document.createElement('span');
  navTabMenu.setAttribute('class', 'nav-tab');
  navTabMenu.setAttribute('id', 'nav-menu');
  navTabMenu.textContent = 'Menu';
  pageNav.appendChild(navTabMenu);
  navTabMenu.addEventListener('click', function(){menuTab(contentBox)});
  
  let navTabContact = document.createElement('span');
  navTabContact.setAttribute('class', 'nav-tab');
  navTabContact.setAttribute('id', 'nav-contact');
  navTabContact.textContent = 'Contact';
  pageNav.appendChild(navTabContact);
  navTabContact.addEventListener('click', function(){contactTab(contentBox)});
  
  let navTabEvents = document.createElement('span');
  navTabEvents.setAttribute('class', 'nav-tab');
  navTabEvents.setAttribute('id', 'nav-events');
  navTabEvents.textContent = 'Events';
  pageNav.appendChild(navTabEvents);
  navTabEvents.addEventListener('click', function(){eventsTab(contentBox)});
  
  contentBox.setAttribute('id', 'content-box');
  
  contentWrapper.appendChild(title);
  contentWrapper.appendChild(tabDivider);
  contentWrapper.appendChild(pageNav);
  contentWrapper.appendChild(tabDivider.cloneNode(true));
  contentWrapper.appendChild(contentBox);
  
  content.appendChild(contentWrapper);
  
  aboutTab(contentBox);
};

populate(content);