# Discuss

- install and setup nextui library

  - Go nextui docs

- Auth with github

  - go to github.com/settings/applications/new
  - add http://localhost:3000/api/auth/callback/github to Authorization callback URL

- npm install --save-exact ( to install exact same version)

- Path Helpers ( If we wanna change the routes, easy to change in one file)

- Setup and install prisma

  - npm install prisma
    npx prisma init --datasource-provider sqlite
    add code to schema.prisma
    npx prisma migrate dev

    add (name) ( gave name for new migration )

- To validate data
  - npm install zod ( zod library )
    Zod is a TypeScript-first schema declaration and validation library. It allows you to define and enforce data schemas in a concise and type-safe manner. Zod is particularly useful for validating and working with data in TypeScript applications.
