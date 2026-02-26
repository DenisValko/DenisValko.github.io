// Основная функция, которая запрашивает данные и запускает попап
async function initPopup() {
    try {
        // 1. Запрашиваем параметры с вашего сервера
        // Замените URL на реальный адрес вашего API
        const response = await fetch('https://api.yourdomain.com/popup-settings'); 
        
        if (!response.ok) {
            throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
        }
        
        // Получаем JSON с параметрами
        const params = await response.json();
        
        /* Ожидаемый формат ответа от сервера примерно такой:
        {
            "showPopup": true,
            "title": "Специальное предложение!",
            "message": "Получите скидку 20% по промокоду.",
            "buttonText": "Получить",
            "backgroundColor": "#ffffff",
            "buttonColor": "#007bff"
        }
        */

        // 2. Проверяем, нужно ли показывать попап
        if (params.showPopup) {
            createAndShowPopup(params);
        }

    } catch (error) {
        console.error('Ошибка при получении параметров попапа:', error);
    }
}

// Функция для создания HTML-элементов попапа и стилизации
function createAndShowPopup(params) {
    // 1. Создаем затемняющий фон (overlay)
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '999999'; // Чтобы быть поверх всего
    overlay.hasAttribute('data-popup-overlay', true);

    // Закрывать попап при клике на темный фон
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });

    // 2. Создаем сам блок попапа
    const popupBox = document.createElement('div');
    popupBox.style.backgroundColor = params.backgroundColor || '#ffffff';
    popupBox.style.padding = '30px';
    popupBox.style.borderRadius = '12px';
    popupBox.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    popupBox.style.maxWidth = '400px';
    popupBox.style.width = '90%';
    popupBox.style.textAlign = 'center';
    popupBox.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    popupBox.style.position = 'relative';

    // 3. Добавляем заголовок (если сервер его прислал)
    if (params.title) {
        const titleEl = document.createElement('h2');
        titleEl.textContent = params.title;
        titleEl.style.marginTop = '0';
        titleEl.style.marginBottom = '15px';
        titleEl.style.color = '#333';
        popupBox.appendChild(titleEl);
    }

    // 4. Добавляем текст/сообщение
    if (params.message) {
        const messageEl = document.createElement('p');
        messageEl.textContent = params.message;
        messageEl.style.color = '#666';
        messageEl.style.lineHeight = '1.5';
        messageEl.style.marginBottom = '20px';
        popupBox.appendChild(messageEl);
    }

    // 5. Контейнер для кнопок
    const actionsContainer = document.createElement('div');
    actionsContainer.style.display = 'flex';
    actionsContainer.style.justifyContent = 'center';
    actionsContainer.style.gap = '10px';

    // Главная кнопка действия (если сервер прислал текст)
    if (params.buttonText) {
        const actionBtn = document.createElement('button');
        actionBtn.textContent = params.buttonText;
        actionBtn.style.padding = '10px 20px';
        actionBtn.style.cursor = 'pointer';
        actionBtn.style.border = 'none';
        actionBtn.style.backgroundColor = params.buttonColor || '#007bff';
        actionBtn.style.color = '#ffffff';
        actionBtn.style.borderRadius = '6px';
        actionBtn.style.fontWeight = 'bold';
        actionBtn.style.transition = 'opacity 0.2s';
        
        actionBtn.onmouseover = () => actionBtn.style.opacity = '0.9';
        actionBtn.onmouseout = () => actionBtn.style.opacity = '1';

        actionBtn.onclick = () => {
            // Здесь может быть логика для кнопки (например, редирект на нужную страницу)
            console.log('Клик по главной кнопке попапа');
            document.body.removeChild(overlay); // Закрываем попап после клика
        };
        actionsContainer.appendChild(actionBtn);
    }

    // Кнопка простого закрытия (крестик в углу)
    const closeIconBtn = document.createElement('button');
    closeIconBtn.innerHTML = '&times;';
    closeIconBtn.style.position = 'absolute';
    closeIconBtn.style.top = '10px';
    closeIconBtn.style.right = '15px';
    closeIconBtn.style.background = 'none';
    closeIconBtn.style.border = 'none';
    closeIconBtn.style.fontSize = '24px';
    closeIconBtn.style.cursor = 'pointer';
    closeIconBtn.style.color = '#999';
    closeIconBtn.onclick = () => {
        document.body.removeChild(overlay);
    };
    popupBox.appendChild(closeIconBtn);

    popupBox.appendChild(actionsContainer);
    overlay.appendChild(popupBox);

    // 6. Добавляем всю эту конструкцию в DOM (на страницу)
    document.body.appendChild(overlay);
}

// Запускаем скрипт, только когда страница полностью загрузилась
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPopup);
} else {
    initPopup();
}
