/* ============================================
   Бодрый Бобр — скрипты
   ============================================ */

(function () {
    'use strict';

    /* Плавная прокрутка для якорных ссылок.
       Важные детали:
       - ссылки с href="#" (логотип и пустые ссылки) пропускаются,
         иначе querySelector('#') бросает SyntaxError;
       - смещение под sticky-шапку решается через scroll-margin-top в CSS. */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', href);
            }
        });
    });

    /* Форма обратной связи: inline-сообщение вместо alert().
       Без backend — при подключении добавить action/method или fetch. */
    const form = document.querySelector('.contact-form form');
    const message = document.getElementById('form-message');

    if (form && message) {
        form.addEventListener('submit', function () {
            message.textContent =
                'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в течение часа.';
            message.classList.add('form-message--success');
            form.reset();
        });
    }

    /* Актуальный год в футере */
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
