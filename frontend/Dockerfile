# Use a imagem do Node.js como base
FROM node:18-alpine
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Crie a build do React
RUN npm run build

# Configure a porta padrão do contêiner
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npx", "serve", "-s", "build"] 

