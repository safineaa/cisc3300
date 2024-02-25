//6a
document.getElementById('changeTextButton').addEventListener('click', function() {
  this.textContent = 'Clicked!';
});

//6b
document.getElementById('myList').addEventListener('click', function() {
  let items = this.querySelectorAll('li');
  items.forEach(item => {
    item.style.color = 'blue';
  });
});

//6c
document.getElementById('appendParaButton').addEventListener('click', function() {
  let para = document.createElement('p');
  para.textContent = 'This is a new paragraph.';
  document.getElementById('container').appendChild(para);
});

