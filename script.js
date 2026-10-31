//Зберігання даних у браузері
const SystemInfo = {
    userAgent: navigator.userAgent,
  platform: navigator.platform
};

localStorage.setItem('SystemInfo', JSON.stringify(SystemInfo));

const storedInfo = JSON.parse(localStorage.getItem('SystemInfo'));
const footerParagraph = document.getElementById('SystemInfo');

if (footerParagraph && storedInfo) {
    footerParagraph.textContent = `Платформа: ${storedInfo.platform} | Браузер: ${storedInfo.userAgent}`;
}

//Відображення динамічного вмісту з сервера
const VariantNumber = 17;
async function fetchComments() {
    const container = document.getElementById('commentsContainer');
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VariantNumber}/comments`);
        const comments = await response.json();

        container.innerHTML = '';
        
        comments.forEach(comment => {
            const commentCard = document.createElement('div');
      commentCard.className = 'comment-card';
      commentCard.innerHTML = `
        <h4>${comment.name} (${comment.email})</h4>
        <p>${comment.body}</p>
      `;
      container.appendChild(commentCard);
    });
  } catch (error) {
    console.error('Помилка при завантаженні коментарів:', error);
  }

        
    
}

fetchComments();

//Надсилання форми зворотного зв'язку
const modal = document.getElementById('feedbackModal');
const closeBtn = document.getElementById('closeModal');


setTimeout(() => {
  if (modal) {
    modal.style.display = 'block';
  }
}, 60000);


if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
//Перехід на нічний/денний режим
const themeBtn = document.getElementById('theme-toggle');


function setAutoTheme() {
  const currentHour = new Date().getHours();

  if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }
}


if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}


setAutoTheme();