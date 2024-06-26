# Список городов

Демо: https://list-cities-test.vercel.app/

## Задача

Создать веб-приложение на Angular, отображающее данные о городах. Приложение должно быть сверстано по [дизайн-макету в Figma](https://www.figma.com/design/5eklzRSGfECfGdJ67TeDUF/HR-enKod%3A-тестовое-задание-Fronted-разработчик?node-id=1-14&t=OdhPZum2EdPiox0v-0).

## Требования
1. У приложения есть два компонента, отвечающие за вывод данных в виде
плитки и списка соответственно. Переключение между ними происходит в
родительском компоненте app.
2. У элементов есть возможность добавить в избранное, и это состояние
общее, то есть не зависит от типа отображения (плитка и список).
3. Требования к внешнему виду:
- Верстка в соответствии с макетом.
- Шрифт Roboto.
- Использовать иконки и цвета из макета.
4. Использовать CSS Flexbox при верстке страниц. Страница должна
растягиваться во весь экран. (при желании можно дополнить CSS Grid
Layout)

### Формат данных
- id (number)
- image - фото города (string)
- name - название города (string)
- description - описание города (string)
- favorite - состояние добавленного в избранное (boolean)

## Установка и запуск

Приложение написано на Angular CLI 18.0.2

```bash
# Установка зависимостей
$ npm install

# Запуск приложения
$ ng build
```