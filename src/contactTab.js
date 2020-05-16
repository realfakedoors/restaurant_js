const contactTab = (contentBox) => {
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let contactTitle = document.createElement('h3');
  contactTitle.setAttribute('class', 'mini-title');
  contactTitle.textContent = "Drop Us A Line!";
  contentBox.appendChild(contactTitle);
  
  let contactItem = document.createElement('p');
  contactItem.setAttribute('class', 'address-item');
  contactItem.textContent = "Phone: (212)555-3232";
  contentBox.appendChild(contactItem);
  
  contactItem = document.createElement('p');
  contactItem.setAttribute('class', 'address-item');
  contactItem.textContent = "3104 Old Mission Blvd";
  contentBox.appendChild(contactItem);
  
  contactItem = document.createElement('p');
  contactItem.setAttribute('class', 'address-item');
  contactItem.textContent = "Spiceville, CO";
  contentBox.appendChild(contactItem);
};

export { contactTab };