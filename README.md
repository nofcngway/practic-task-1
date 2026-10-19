# StoreForFun

SPA-каталог товаров интернет-магазина на React и Redux Toolkit. Данные загружаются из [DummyJSON API](https://dummyjson.com).

**Деплой на Vercel:** [StoreForFun](https://practic-task-1.vercel.app)

## Функциональность

- **Категории** — список всех категорий товаров.
- **Товары категории** — карточки с фото, названием и ценой.
- **Страница товара** — галерея фото, цена со скидкой, наличие, характеристики и отзывы.
- **Страница 404** для несуществующих адресов
- Состояния загрузки, ошибки и пустого списка на каждой странице.
- Кэширование запросов через RTK Query.
- Адаптивность.

## Стек

- React 19
- React Router 8
- Redux Toolkit + RTK Query
- CSS
- Webpack
- ESLint + Prettier

## Зависимости

### Основные

| Пакет | Назначение |
|---|---|
| `react`, `react-dom` | Компоненты и рендеринг интерфейса |
| `react-router` | Маршрутизация |
| `@reduxjs/toolkit` | Хранилище состояния и RTK Query для запросов к API |
| `react-redux` | Связка React и Redux |

### Для разработки

| Пакет | Назначение |
|---|---|
| `webpack`, `webpack-cli` | Сборка проекта |
| `webpack-dev-server` | Dev-сервер |
| `babel-loader`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react` | Преобразование JSX и современного JS |
| `css-loader`, `style-loader` | Подключение CSS из компонентов |
| `mini-css-extract-plugin` | Вынос CSS в отдельный файл в production-сборке |
| `html-webpack-plugin` | Генерация `index.html` с подключёнными скриптами и стилями |
| `copy-webpack-plugin` | Копирование файлов из `public/` в сборку |
| `eslint` + плагины `react-hooks`, `react-refresh` | Проверка кода |
| `prettier`, `eslint-config-prettier` | Форматирование кода |

## Запуск

Требуется Node.js 20+.

```bash
git clone https://github.com/nofcngway/practic-task-1.git
cd practic-task-1
npm install
npm run dev
```

Приложение откроется на <http://localhost:3000>.

### Скрипты

| Команда | Что делает |
|---|---|
| `npm run dev` | Dev-сервер на <http://localhost:3000> |
| `npm run build` | Production-сборка в папку `dist/` |
| `npm run preview` | Production-версия на <http://localhost:3001> |
| `npm run lint` | Проверка кода ESLint |
| `npm run lint:fix` | Автоисправление ошибок ESLint |
| `npm run format` | Форматирование кода Prettier |
| `npm run format:check` | Проверка форматирования без изменений |

## Сборка

Проект собирается через Webpack, конфигурация в [`webpack.config.js`](webpack.config.js):

- JSX и JS обрабатываются Babel;
- в development CSS подключается через `<style>`, в production выносится в отдельный файл;
- в production к именам файлов добавляется хеш содержимого для кэширования;

## Структура проекта

```text
src/
├── app/          # Корень приложения: маршруты, глобальные стили
├── pages/        # Страницы
├── components/   # Компоненты для страниц
├── shared/       # Переиспользуемые компоненты и конфиг маршрутов
└── store/        # Redux store и RTK Query API
```
