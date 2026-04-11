## Что было сделано

### 1. Переход на Vite
- Проект переведен на сборку через **Vite**.
- Настроены скрипты запуска и сборки (`dev`, `build`, `preview`).
- Обновлена конфигурация (`@vitejs/plugin-react`, alias, SVGR).

### 2. Миграция архитектуры на FSD
- Начата и выполнена структуризация проекта по **Feature-Sliced Design**.
- Разделены слои: `app`, `pages`, `widgets`, `features`, `entities`, `shared`.
- Исправлены нарушения слоистой архитектуры и межслойных импортов.

### 3. Формирование слоя `entities`
- Выделены и структурированы сущности `product`, `user`, `cart`.
- Вынесены типы, модельные данные, базовые редьюсеры и селекторы.

### 4. Формирование слоя `features`
- Выделены фичи по бизнес-сценариям:
    - `auth` (sign-in/sign-up/guard, api),
    - `cart` (add-to-cart, delete-cart-product),
    - `product` (search, sort, load-more, toggle-like, favorites),
    - `common/query-state`.
- Приведена структура `model / ui / api` по месту применения.

### 5. Перенос инфраструктуры в `app/providers`
- Redux-конфигурация перенесена в `app/providers/store/config`.
- Router/providers перенесены в `app/providers`.
- `store` приведен к роли инфраструктурной точки входа слоя `app`.

### 6. Реорганизация API-слоя
- `authApi` перенесен в `features/auth/api`.
- `productApi` перенесен в `entities/product/api`.
- Общая настройка запросов выделена в `shared/api/config`.

### 7. Выделение общих хуков и утилит
- `useAppDispatch`, `useAppSelector`, `useDebounce`, `usePagination` вынесены в `shared/hooks`.
- Утилиты и импорты перераспределены по корректным слоям.

### 8. Развитие `shared/ui`
- Вынесены и переиспользуются общие UI-компоненты.
- Добавлены `Loader`, `CounterInput`, `Portal`, `Modal`, `Dialog`.
- Удален устаревший `Spinner`.

### 9. Сохранение пользовательской сессии
- Реализован persist `user/accessToken` в `localStorage`.
- Добавлено восстановление сессии при старте приложения.
- Нормализован `Authorization` заголовок для API-запросов.

### 10. Оптимизация производительности
- Выполнена точечная оптимизация рендеринга:
    - `React.memo`,
    - `useMemo`,
    - `useCallback`.
- Снижено количество лишних ререндеров в списках и производных вычислениях.

### 11. Модальные сценарии и доступность
- Реализован portal-based рендер модальных окон.
- Добавлено подтверждение удаления товара через `Dialog`.
- Настроены обработка `ESC`/overlay и управление фокусом (`useRef`, возврат фокуса на триггер).

### 12. Обновление React
- Проект переведен на React `19.2.5`.
- Синхронизированы зависимости и окружение после обновления.



## Структура проекта
```text
src
├── app
│   ├── providers
│   │   ├── router
│   │   │   └── config
│   │   └── store
│   │       └── config
│   └── styles
├── pages
│   ├── HomePage
│   ├── ProductPage
│   ├── CartPage
│   ├── FavoritesPage
│   ├── ProfilePage
│   ├── SignInPage
│   ├── SignUpPage
│   └── NotFoundPage
├── widgets
│   ├── Header
│   ├── Footer
│   ├── ReviewList
│   ├── cart
│   │   ├── CartList
│   │   ├── CartItem
│   │   └── CartAmount
│   └── product
│       └── ProductCardList
├── features
│   ├── auth
│   │   ├── api
│   │   ├── guard
│   │   ├── sign-in
│   │   │   ├── model
│   │   │   └── ui
│   │   └── sign-up
│   │       ├── model
│   │       └── ui
│   ├── cart
│   │   ├── add-to-cart
│   │   │   ├── model
│   │   │   └── ui
│   │   └── delete-cart-product
│   │       ├── model
│   │       └── ui
│   ├── product
│   │   ├── search
│   │   ├── sort
│   │   ├── load-more
│   │   ├── toggle-like
│   │   └── favorites
│   └── common
│       └── query-state
├── entities
│   ├── user
│   │   └── model
│   ├── product
│   │   ├── api
│   │   ├── lib
│   │   ├── model
│   │   └── ui
│   └── cart
│       ├── lib
│       ├── model
│       └── ui
└── shared
├── api
│   └── hooks
├── assets
│   ├── icons
│   └── images
├── hooks
│   └── lib
├── types
├── utils
└── ui
├── Logo
├── ButtonBack
├── Rating
├── Loader
├── CounterInput
├── Portal
├── Modal
└── Dialog
```