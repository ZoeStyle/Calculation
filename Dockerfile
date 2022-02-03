FROM node:16

# Criar diretório de aplicativos
WORKDIR /usr/src/app

# Instalar dependências de aplicativos
COPY package*.json ./

# RUN para informar quais comandos serão executados nesse ambiente para efetuar as mudanças necessárias 
# na infraestrutura do sistema.
RUN npm ci

# Se você está construindo seu código para produção
# RUN npm ci --only=production

# Origem do aplicativo do pacote
COPY . .

EXPOSE 3000

CMD [ "node", "./API/server.js" ]