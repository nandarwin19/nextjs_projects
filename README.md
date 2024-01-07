# Discuss

- install and setup nextui library

  - npm install @nextui-org/react framer-motion
  - add that
    - import { nextui } from '@nextui-org/react'
    - './node\*modules/@nextui-org/theme/dist/\*\*/\_.{js,ts,jsx,tsx}'
    - darkMode: "class",
    - plugins: [nextui()],
    - providers.tsx ( to app folder )

  Auth

  - @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3

- Setup and install prisma

  - npm install prisma
    npx prisma init --datasource-provider sqlite
    add code to schema.prisma
    npx prisma migrate dev

    add (name) ( gave name for new migration )

- To validate data
  - npm install zod ( zod library )
    Zod is a TypeScript-first schema declaration and validation library. It allows you to define and enforce data schemas in a concise and type-safe manner. Zod is particularly useful for validating and working with data in TypeScript applications.
