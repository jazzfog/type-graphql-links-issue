# type-graphql - Linked models issue demo

## Install

- Clone
- Create links for shared `models` and `common` within `app/src/shared`

```
Replace <code-location> with the path to the
example code on your computer:

On Linux/macOS:

ln -s <code-location>/shared/common <code-location>/app/src/shared/common
ln -s <code-location>/shared/models <code-location>/app/src/shared/models

E.g.:
ln -s /home/user/www/type-graphql-links-issue/shared/common /home/user/www/type-graphql-links-issue/app/src/shared/common
ln -s /home/user/www/type-graphql-links-issue/shared/models /home/user/www/type-graphql-links-issue/app/src/shared/models

On Windows:

mklink /D <code-location>\app\src\shared\models <code-location>\shared\models
mklink /D <code-location>\app\src\shared\common <code-location>\shared\common
```

- run `yarn install` within `shared` folder first

- run `yarn install && yarn start` within `app` folder

- Observe error:

```
(node:15377) UnhandledPromiseRejectionWarning: Error: Cannot determine GraphQL output type for 'uuid' of 'Base' class. Is the value, that is used as its TS type or explicit type, decorated with a proper decorator or is it a proper output value?
    at Function.getGraphQLOutputType (/home/user/www/type-graphql-links-issue/app/node_modules/type-graphql/dist/schema/schema-generator.js:519:19)
    at /home/user/www/type-graphql-links-issue/app/node_modules/type-graphql/dist/schema/schema-generator.js:175:47
    at Array.reduce (<anonymous>)
    at fields (/home/user/www/type-graphql-links-issue/app/node_modules/type-graphql/dist/schema/schema-generator.js:166:53)
    at resolveThunk (/home/user/www/type-graphql-links-issue/app/node_modules/graphql/type/definition.js:480:40)
    at defineFieldMap (/home/user/www/type-graphql-links-issue/app/node_modules/graphql/type/definition.js:692:18)
    at GraphQLObjectType.getFields (/home/user/www/type-graphql-links-issue/app/node_modules/graphql/type/definition.js:633:27)
    at Object.getFieldMetadataFromObjectType (/home/user/www/type-graphql-links-issue/app/node_modules/type-graphql/dist/schema/utils.js:20:28)
    at fields (/home/user/www/type-graphql-links-issue/app/node_modules/type-graphql/dist/schema/schema-generator.js:203:66)
    at resolveThunk (/home/user/www/type-graphql-links-issue/app/node_modules/graphql/type/definition.js:480:40)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:15377) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:15377) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

- Now you can delete the created links within the `<code-location>\app\src\shared\` and pysycally copy both `models` and `common` from `/shared` into the `<code-location>\app\src\shared\`.
- run `yarn start` -> server starts without issues.
- so the problem arises when the code folders are linked to the app.
