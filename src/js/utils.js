const currentYear = new Date().getFullYear();
const copyrightEl = document.querySelector('#copyright');
copyrightEl.textContent = '©' +  currentYear;