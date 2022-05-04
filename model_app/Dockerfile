FROM node:14.18.1

WORKDIR /model-app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY ./frontend/package.json ./frontend/package.json
COPY ./frontend/package-lock.json ./frontend/package-lock.json
RUN cd frontend && npm install

RUN cd ..
COPY . .

CMD ["npm", "run", "dev"]
