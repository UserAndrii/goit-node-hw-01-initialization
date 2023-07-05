# Керівництво користувача

Це README.md файл, який містить інформацію про використання та доступні функції
для взаємодії з додатком "Контакти".

## Огляд

Додаток "Контакти" надає можливість управляти списком контактів. Ви можете
отримати список всіх контактів, додати новий контакт, отримати контакт за його
ідентифікатором або видалити контакт зі списку.

## Інструкції

Для виконання різних операцій з контактами використовуйте команди та флаги,
наведені нижче:

### Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

`node index.js --action="list"`

[результат коду (скріншот) можна побачити тут](https://monosnap.com/file/JpoFDGlQjVNg9HwQ114hYGuMwPeEZY)

### Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

`node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6`

[результат коду (скріншот) можна побачити тут](https://monosnap.com/file/6yvUNY1p4rQJjXXQ9wnIQtfsdFzhYN)

### Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

`node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22`

[результат коду (скріншот) можна побачити тут](https://monosnap.com/file/T4JfLVpf67fSzyINJGEgBipQD80TYK)

### Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

`node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH`

[результат коду (скріншот) можна побачити тут](https://monosnap.com/file/HMq0pDte8SNIcT3GWHbW6I0rr0Xl0h)
