const aboutTab = (contentBox) => {  
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let description = document.createElement('p');
  description.setAttribute('class', 'description');
  description.textContent = "Come on down to The Chili Trough! We got chili, cheddar cheese, bags of Fritos, sour cream, salsa, hot sauce, and what you do is, you just smush it up in a bowl and take a large straw, and inhale it all!";
  contentBox.appendChild(description);
  
  let chiliPhoto = document.createElement('img');
  chiliPhoto.setAttribute('id',  'chili-photo');
  chiliPhoto.setAttribute('src', './static/chili.jpg');
  contentBox.appendChild(chiliPhoto);
};

export { aboutTab };