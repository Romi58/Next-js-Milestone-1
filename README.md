# Milestone 1: Hello World using Next.js

This milestone covers setting up a basic Next.js project and displaying a simple "Hello, World!" message.

## Prerequisites
- Node.js installed (Latest LTS recommended)
- npm or yarn installed

## Steps to Set Up the Project

### 1. Create a Next.js App
Run the following command to create a new Next.js project:

```sh
npx create-next-app@latest hello-world-app --typescript
```

or using yarn:

```sh
yarn create next-app hello-world-app --typescript
```

### 2. Navigate to the Project Directory
```sh
cd hello-world-app
```

### 3. Start the Development Server
```sh
npm run dev
```

The development server will start at `http://localhost:3000/`.

### 4. Modify the Index Page
Open `pages/index.tsx` and replace its content with the following:

```tsx
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to your first Next.js app.</p>
    </div>
  );
};

export default Home;
```

### 5. View the Changes
Open your browser and visit `http://localhost:3000/` to see your "Hello, World!" message displayed.

## Deployment on Vercel
To deploy your project on Vercel:

1. Push your project to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and import your repository.
3. Deploy with default settings.

Your project will be live with a Vercel-generated URL.

---

**Author:** Romaisa

