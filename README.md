# StoreForFun

SPA-каталог товаров интернет-магазина на React и Redux Toolkit. Данные загружаются из [DummyJSON API](https://dummyjson.com).

**Деплой на Vercel:** [StoreForFun](https://practic-task-1.vercel.app)

## Функциональность

- **Категории** — список всех категорий товаров.
- **Товары категории** — карточки с фото, названием и ценой.
- **Страница товара** — галерея фото, цена со скидкой, наличие, характеристики и отзывы.
- **Страница 404** для несуществующих адресов
- Состояния загрузки, ошибки и пустого списка на каждой странице.
- Кэширование запросов через RTK Query: при повторном переходе на страницу данные не загружаются заново.
- Адаптивность.

## Стек

- React 19
- React Router 8
- Redux Toolkit + RTK Query
- CSS
- Vite
- ESLint + Prettier

## Зависимости

### Основные

| Пакет | Назначение |
|---|---|
| `react`, `react-dom` | UI-библиотека |
| `react-router` | Маршрутизация |
| `@reduxjs/toolkit` | Хранилище состояния и RTK Query для запросов к API |
| `react-redux` | Связка React и Redux |

### Для разработки

| Пакет | Назначение |
|---|---|
| `vite`, `@vitejs/plugin-react` | Сборка и dev-сервер |
| `eslint` + плагины `react-hooks`, `react-refresh` | Проверка кода |
| `prettier`, `eslint-config-prettier` | Форматирование кода |

## Запуск

Требуется Node.js 20+.

```bash
git clone <URL_репозитория>.git
cd practic-task-1
npm install
npm run dev
