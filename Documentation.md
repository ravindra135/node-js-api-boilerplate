# Node JS APIs Boilerplate

A starter template for REST APIs using Node.js, TypeScript, and Express.

## 🚀 Features

- Built with TypeScript
- Modular architecture for scalability
- Express app setup with `helmet` (CORS is pre-configured but commented)
- `.env.example` for environment configuration
- ESLint pre-configured for consistent code quality
- Helper scripts to boost development speed
- Folder structure suitable for medium to large scale apps
- MIT License

## 📁 Folder Structure

```
.
├── log/                      # Placeholder for logs (user-configurable)
├── scripts/
│   └── generate-module.mjs  # CLI to auto-generate module structure
├── src/
│   ├── core/
│   │   └── app.ts           # Express app instance and middleware setup
│   ├── modules/             # Modular folders for API features
│   ├── shared/              # Common middlewares and guards
│   ├── utils/
│   │   ├── handlers/        # Error and response handlers
│   │   └── helpers/         # String, DateTime helpers etc.
│   └── server.ts            # Entry point to run the app
├── .env.example             # Sample env file
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration (flat config)
```

## 📦 Scripts

```json
"scripts": {
  "test": "echo \"Hello World\";",
  "setup-env": "test -f .env || cp .example.env .env",
  "dev": "nodemon -x tsx src/server.ts",
  "build": "tsc --project tsconfig.json && tsc-alias -p tsconfig.json",
  "start": "node dist/server.js",
  "make-module": "node scripts/generate-module.mjs",
  "lint:fix": "eslint . --ext .js,.ts,.tsx,.jsx --fix"
}
```

## 🛠️ Usage

```bash
# Install dependencies
npm install

# Set up environment
npm run setup-env

# Start development server
npm run dev

# Build project
npm run build

# Start production server
npm start

# Generate new module
npm run make-module [module_name]
```

### 🧩 Module Generator (CLI Script)

This boilerplate includes a handy script to auto-generate a new module structure under `src/modules`.

You can run it with:

```bash
npm run make-module <module-name>
```

For example:

```bash
npm run make-module auth
```

This will create the following structure:

```
src/
└── modules/
    └── auth/
        ├── controllers/
        │   └── auth.controller.ts
        ├── services/
        │   └── auth.service.ts
        ├── routes/
        │   └── auth.route.ts
        ├── validators/
        │   └── auth.validator.ts
        └── dtos/
            └── .gitkeep
```

Each subfolder is created with an empty or boilerplate file (as applicable) to help you start quickly without manual setup.

> 📌 This script is located at: `scripts/generate-module.mjs`
## 🤝 Contributing

Contributions are welcome!

1. Fork this repo
2. Create your feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -am 'feat: add new feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a pull request

Please make sure your PR follows the coding standards defined in the ESLint configuration and has meaningful commit messages.

## 🧑‍💻 Author

[R Cube Dev](https://rcubedev.netlify.app)

## 📄 License

This project is licensed under the MIT License.