FROM node:20-alpine

WORKDIR /app

# Сначала копируем только файлы зависимостей для кэширования
COPY package.json package-lock.json ./

# Устанавливаем зависимости (включая devDependencies для разработки)
RUN npm ci

# Копируем остальные файлы проекта
COPY . .

# Для production сборки раскомментируйте:
# RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
