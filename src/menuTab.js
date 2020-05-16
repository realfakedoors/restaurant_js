const menuTab = (contentBox) => {
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let menuTitle = document.createElement('h3');
  menuTitle.setAttribute('class', 'mini-title');
  menuTitle.textContent = "Menu";
  contentBox.appendChild(menuTitle);
  
  let menuItem = document.createElement('p');
  menuItem.setAttribute('class', 'menu-item');
  menuItem.textContent = "All The Chili You Can Inhale - $39";
  contentBox.appendChild(menuItem);
};

export { menuTab };