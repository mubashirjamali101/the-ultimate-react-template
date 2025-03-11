# React SPA Template

## Tech Stack

| Name | Description | Setup Status |
| ---- | --- | --- |
| React | A JavaScript library for building user interfaces | ✅ |
| Vite | Next generation frontend tooling | ✅ |
| TypeScript | A typed superset of JavaScript that compiles to plain JavaScript | ✅ |
| ESLint | A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript | ✅ |
| Prettier | An opinionated code formatter | ✅ |
| Tanstack React Query | Hooks for fetching, caching and updating asynchronous data in React | ✅ |
| Tanstack React Router | Declarative routing for React | ✅ |
| Mantine UI | The ultimate component library for React | ✅ |
| Zod | TypeScript-first schema declaration and validation library | ✅ |
| React Hook Form | Performant, flexible and extensible forms with easy-to-use validation | ✅ |
| Zustand | A small, fast and scale-able bear-bones state-management solution | ✅ |

## Folder Structure

```txt

root
├── public
├── src
│   ├── routes (app routes)
│   │
│   ├── assets (in app assets like icons)
│   │
│   ├── schemas (Zod validation schemas)
│   │
│   ├── components (reusable components)
│   │   ├── common (shared UI components)
│   │   ├── views (View components)
│   │
│   ├── hooks (custom hooks)
│   │
│   ├── layouts (layout components)
│   │
│   ├── pages (page components)
│   │
│   ├── services (API services)
│   │   │   ├── auth.service.ts
│   │
│   ├── store (global state management)
│   │   ├── slices (store slices)
│   │   │   ├── auth.slice.ts
│   │   │
│   │   ├── store.ts
│   │
│   ├── styles (global styles)
│   │   ├── theme (theme configuration)
│   │
│   ├── providers (providers)
│   │   ├── react-query.provider.tsx
│   │   ├── router.provider.tsx
│   │   ├── store.provider.tsx
│   │
│   ├── lib (utility functions)
│   │   ├── auth.ts (auth functions)
│   │   ├── constants.ts (app constants)
│   │   ├── utils (utility functions)
│   │
│   ├── types (custom types)
│   ├── App.tsx
│   ├── index.tsx 


```

## Setup and Development

Install dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn dev
```

Build the application:

```bash
yarn build
```

Preview the build application:

```bash
yarn preview
```

Lint the code:

```bash
yarn lint
```

Format the code:

```bash
yarn format
```

## License

UNLICENSED
