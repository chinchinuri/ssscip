// Вставте сюди URL-адресу вашого веб-додатку Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbzktOE4vsr92MgYN3U8JxdU3QaNfN6Rlp5BdYmks9oHtFxfCNxPPcgiJl9C8cStxXZogw/exec'; 

const loader = document.getElementById('loader');
const output = document.getElementById('output');

// Функція для отримання та відображення даних
async function fetchData() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        // Відображаємо JSON у відформатованому вигляді
        output.textContent = JSON.stringify(data, null, 2);
        loader.style.display = 'none'; // Ховаємо завантажувач

    } catch (error) {
        loader.textContent = 'Не вдалося завантажити дані.';
        console.error('Помилка при запиті до API:', error);
    }
}

// Викликаємо функцію при завантаженні сторінки
fetchData();
