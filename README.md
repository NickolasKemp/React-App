
## Run Locally

Clone the project

```bash
  git clone https://github.com/NickolasKemp/React-App.git
```

Create postrgeeSQL db using Docker

```bash
  docker-compose up --build
```

Go to the project directories

```bash
  cd React-App/backend
  cd React-App/frontend
```

Install dependencies

```bash
  npm install
```

Create and configure .env file in backend directory


```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/postgres?schema=public"
```

Generate prisma client

```bash
  npx prisma generate
```


Start the backend server

```bash
  npm run start:dev
```

Start the frontend server

```bash
  npm start
```