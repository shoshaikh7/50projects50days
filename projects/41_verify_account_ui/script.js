const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      console.log(codes[idx]);
      codes[idx].value = '';
      setTimeout(() => codes[idx + 1].focus(), 10); 
    } else if (e.key === 'Backspace' && codes[idx] !== codes[0]) {            
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  })
})