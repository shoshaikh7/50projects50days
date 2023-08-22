// Scroll animation using Intersection Observer
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  })
}, {
  threshold: 0.1,
});

projects.forEach(project => {
  observer.observe(project);
})
