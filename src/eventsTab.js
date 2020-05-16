const eventsTab = (contentBox) => {
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let eventsTitle = document.createElement('h3');
  eventsTitle.setAttribute('class', 'mini-title');
  eventsTitle.textContent = "Upcoming Events";
  contentBox.appendChild(eventsTitle);
  
  let eventsItem = document.createElement('p');
  eventsItem.setAttribute('class', 'events-item');
  eventsItem.textContent = "Feb 22: The Great Chili Chug";
  contentBox.appendChild(eventsItem);
  
  eventsItem = document.createElement('p');
  eventsItem.setAttribute('class', 'events-item');
  eventsItem.textContent = "Feb 23: The Great Toilet Hug";
  contentBox.appendChild(eventsItem);
  
  eventsItem = document.createElement('p');
  eventsItem.setAttribute('class', 'events-item');
  eventsItem.textContent = "Mar 11: Spicy Pepper Eating Contest";
  contentBox.appendChild(eventsItem);
};

export { eventsTab };