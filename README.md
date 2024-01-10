## NextJS & OpenAI

Todo - need to get database url

Finished

- How to fetch data in sever components
- Handling error from fetching data
- Nested Layouts
- Prisma, DaisyUI
- Dynamic Routes
- Remote Images
- More Routing

  - [...folder] - Catch-all route segment
  - [[...folder]] Optional catch-all route segment ( used by Clerk)
    - [...folder]: Requires at least one segment, captures variable-depth paths.
      [[...folder]]: Allows the entire part of the URL after the specified section to be optional.
      - Eg. [..sign-in] folder VS [[..sign-in]] folder

- Server Actions
- Refactor (the process of restructuring code, while not changing its original functionality)
- Pending button state
- Error Checking
- Zod library for validation
- Providers

  - ```sh
    npm install react-hot-toast
    ```
    - the "react-hot-toast" package, which facilitates the implementation of toast notifications in React applications, enhancing the user interface with informative and visually appealing feedback.

- Route Handlers (GET, POST)

  - In Next.js, which is a React framework for building web applications, route handling is often done using the file system-based routing mechanism. Next.js uses a pages directory to automatically generate routes based on the file structure.

- middleware (middleware is a function that runs before handling a specific route.)
<!-- - PlanetScale -->
- force-dynamic

## Tailwind and DaisyUI

```sh
npm i -D daisyui@latest
npm i @tailwindcss/typography
```

tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    ...
    plugins: [require('@tailwindcss/typography'),require('daisyui')],
}
```

## Prisma

```sh
npm install prisma --save-dev
npm install @prisma/client
```

```sh
npx prisma init
```

    - add db.ts file
    - Create Prisma Model

```sh
//change to the .env file and schema.prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

//already changed
// schema.prisma 
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

//.env
DATABASE_URL="file:./dev.db"

```

```sh
npx prisma migrate dev
```

- in a new terminal window
- launch Prisma Studio, which is a visual editor for your database.
- http:localhost:5555

```sh
npx prisma studio
```

## Sever actions

- Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.

## Note

- useFormState is a Hook that allows you to update state based on the result of a form action

## Zod library

```js
npm install zod
```

```javascript
 Zod is a TypeScript-first schema declaration and validation library
 It provides a concise syntax for defining data shapes and enforcing their structure
 The library ensures type safety and facilitates runtime validation of data against schemas
 Zod is commonly used in applications to validate and sanitize input data, enhancing reliability
```

## Prisma CRUD Operations Examples

### Create Single Record

```js
const task = await prisma.task.create({
  data: {
    content: "some task",
  },
});
```

### Get All Records

```js
const tasks = await prisma.task.findMany();
```

### Get record by ID or unique identifier

```js
 By unique identifier
const user = await prisma.user.findUnique({
  where: {
    email: 'elsa@prisma.io',
  },
});
```

### By ID

```js
const task = await prisma.task.findUnique({
  where: {
    id,
  },
});
```

### Update Record

```js
const updateTask = await prisma.task.update({
  where: {
    id,
  },
  data: {
    content: "updated task",
  },
});
```

### Update or create records

```js
const upsertTask = await prisma.task.upsert({
  where: {
    id,
  },
  update: {
    content: "some value",
  },
  create: {
    content: "some value",
  },
});
```

### Delete a single record

```js
const deleteTask = await prisma.task.delete({
  where: {
    id,
  },
});
```
