const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  // trims off white space from each tag and also doesn't add any empty tag
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  
  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}