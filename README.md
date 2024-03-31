
## Run Locally

Clone the project

```bash
  git clone https://github.com/NickolasKemp/React-App.git
```

Go to the project directory

```bash
  cd React-App
```

Install dependencies

```bash
  npm install
```

Configure .env file in backend directory


```bash
DATABASE_URL="postgresql://user:password@host:port/database_name?schema=public"
```

Generate prisma client

```bash
  npx prisma generate
```


Start the Backend Server

```bash
  npm run start:dev
```

Start the Frontend Development Server

```bash
  npm start
```