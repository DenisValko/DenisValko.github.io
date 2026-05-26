// ─── Meta Pixel ────────────────────────────────────────────────
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','2143685743061331');
fbq('track','PageView');

// ─── Google Tag Manager ────────────────────────────────────────
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGJDPTXV');

// ─── Мета-теги в <head> ────────────────────────────────────────
var head = document.head;

var fbMeta = document.createElement('meta');
fbMeta.name = 'facebook-domain-verification';
fbMeta.content = 'wduhygq6vk92tfifki8ly3q8iknkf6';
head.appendChild(fbMeta);

var css = document.createElement('link');
css.rel = 'stylesheet';
css.type = 'text/css';
css.href = 'style.css';
head.appendChild(css);

// ─── Сторонние скрипты ─────────────────────────────────────────
function loadScript(src, attrs) {
  var s = document.createElement('script');
  s.async = true;
  s.src = src;
  for (var k in attrs) s.setAttribute(k, attrs[k]);
  document.body.appendChild(s);
}

loadScript('https://d3ppax5trsa9bf.cloudfront.net/assets/loader.js',
  { 'data-chats-widget-id': 'ff7c8766-4d7e-4aac-b7a0-fad5078022b0' });

loadScript('https://d1kp6vowr9jauh.cloudfront.net/pulsepix.js',
  { 'data-project-id': 'f98c3fd9-03d7-479e-b4b8-e1543cffc4f7' });

// ─── Контент страницы ──────────────────────────────────────────
document.body.insertAdjacentHTML('beforeend', [

  '<a href="https://denisvalko.github.io/dvalko+11_front2.html">Перейти на prod2_stage.html</a>',

  '<button id="my_form" class="className">Buy</button>',

  '<a href="#" class="className">Ссылка</a>',
  '<a href="#" class="className">Подробнее</a>',

  '<div class="className">Блок 1</div>',
  '<div class="className">Карточка товара</div>',

  '<input type="submit" class="className" value="Отправить">',
  '<img src="https://picsum.photos/100/50" class="className" alt="Изображение">',
  '<span class="className">Кликни меня</span>',

  '<div>Римский император Константин I Великий по достоинству оценил выгодное местоположение приморского Византия, расположенного на стыке Европы и Азии.</div>',

  '<input type="button" class="className" value="Нажми">',
  '<input type="reset"  class="className" value="Сбросить">',
  '<input type="checkbox" class="className">',
  '<input type="radio"    class="className">',
  '<select class="className"><option>Выбрать</option></select>',
  '<textarea class="className">Текст</textarea>',
  '<label class="className">Лейбл</label>',

  '<nav class="className">Навигация</nav>',
  '<li class="className">Пункт меню</li>',
  '<details class="className"><summary>Раскрыть</summary>Контент</details>',

  '<video class="className" controls width="400" src="https://www.w3schools.com/html/mov_bbb.mp4"></video>',
  '<div class="className"><audio class="className" controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio></div>',
  '<canvas class="className" width="100" height="50"></canvas>',

  '<table class="className" border="1"><tr><td class="className">Ячейка</td><th class="className">Заголовок</th></tr><tr><td class="className" colspan="2">Строка 2</td></tr></table>',

  '<p class="className">Параграф</p>',
  '<h1 class="className">Заголовок H1</h1>',
  '<blockquote class="className">Цитата</blockquote>',

  '<dialog class="className" open>Диалог</dialog>',
  '<progress class="className" value="50" max="100"></progress>',
  '<meter class="className" value="0.6">60%</meter>',

  '<svg class="className" width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue"/></svg>',
  '<iframe class="className" src="about:blank" width="200" height="100"></iframe>',

  '<button onclick="window.SP_PIN.fireEvent(\'Нова подія 2025-08-14\')">Buy</button>',
  '<button onclick="window.SP_PIN.fireEvent(\'a92db867-ec48-4b08-b789-4a9fcdbae88f\'); fbq(\'trackCustom\',\'ButtonEvent\')">Кнопка події !!!!!!!!!!!!!!</button>',

  '<div class="block2"><a href="/11.html">11 page</a><div id="my_form2">st T</div></div>',

].join('\n'));
