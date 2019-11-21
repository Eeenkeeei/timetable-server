# Backend Timetable

## Что это?

Это бекенд на Node + Restify для моего сервиса TimeTable (Ищи аналогичное название в профиле)

## Особенности
Шифрование паролей пользователей. Пароли не расшифровываются, только можно сравнить не зашифрованную строку с зашифрованной.
Авторизация пользователей по токену (токен имеет срок годности и над автоматической выдачей нового по истечении я заморачиваться не стал)
Развернуто на Heroku

## Что использовано?

1. Restify
2. БД MongoDB
3. JWT
4. bcrypt

## Недостатки 

1. Нулевое разделение на модули, почти все в одном файле.
2. Наверное, не лучшая идея при обновлении кусочка данных юзера обновлять сразу всего юзера в базе. 