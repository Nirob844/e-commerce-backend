# e-commerce-backend

## Installation Steps

### Follow these steps to clone and set up starter project:

1. `Clone the project:` Open your terminal or command prompt and run the following command to clone the project repository:

```bash
git clone https://github.com/Nirob844/e-commerce-backend.git
```

2. `Navigate into the project directory:` Use the cd command to navigate into the project directory:

```bash
cd e-commerce-backend
```

3. `Install project dependencies:` Next, install the project dependencies by running the following command:

```bash
yarn install
```



- Create a .env file in the project root directory and set the DATABASE_URL environment variable. Replace the placeholders with your database connection details:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```
- .env

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
NODE_ENV=development
PORT=5000
JWT_SECRET='very-secret'
JWT_EXPIRES_IN=3d
JWT_REFRESH_SECRET='very-refresh-secret'    
JWT_REFRESH_EXPIRES_IN=365d
```
