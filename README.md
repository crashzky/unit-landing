## Запуск в dev

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в своём браузере, чтобы увидеть результат.

## Запуск в docker (production)

```bash
docker build . -t unit-landing
docker run -p "3000:3000" -d unit-landing
```

## Редактирование

Ниже представлена таблица со списком параметров и файлов, в которых их можно корректировать. 

| Параметр | Путь в файлу |
| -------- | ------------ |
| Список команд | [/shared/consts/teams.ts](/shared/consts/teams.ts) |
| Список кураторов | [/shared/consts/curators.ts](/shared/consts/curators.ts) |
| Список партнёров | [/shared/consts/partners.ts](/shared/consts/partners.ts) |
| Организаторы | [/shared/consts/unitTeam.ts](/shared/consts/unitTeam.ts) |
| Таймлайн | [/shared/consts/timelineItems.ts](/shared/consts/timelineItems.ts) |