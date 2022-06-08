FROM node:13.12.0-alpine

WORKDIR /model-app
ENV PATH = "./node_modules/.bin:$PATH"

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY ./frontend/package.json ./frontend/package.json
COPY ./frontend/package-lock.json ./frontend/package-lock.json

RUN cd frontend && npm install

RUN cd ..
COPY . .

CMD ["npm", "run", "dev"]
