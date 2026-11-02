import React, { useState, useEffect } from "react";

function Reviews({ theme }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Помилка при завантаженні коментарів:', error));
  }, []);

  return (
    <div className="my-8">
      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
        Відгуки роботодавців
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className={`p-4 border rounded-xl shadow-sm transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-slate-700 border-slate-600 text-slate-100' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              {comment.name}
            </h4>
            <p className={`text-xs mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {comment.email}
            </p>
            <p className="text-sm leading-relaxed">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
