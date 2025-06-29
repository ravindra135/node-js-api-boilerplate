#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const moduleName = process.argv[2];

if (!moduleName) {
  console.error("❌ Please provide a module name. Usage: npm run make-module auth");
  process.exit(1);
}

const basePath = path.resolve(`src/modules/${moduleName}`);
const folders = ['controllers', 'services', 'routes', 'validators', 'dtos'];
const files = {
  'controllers': `${moduleName}.controller.ts`,
  'services': `${moduleName}.service.ts`,
  'routes': `${moduleName}.route.ts`,
  'validators': `${moduleName}.validator.ts`,
  'dtos': [`.gitkeep`],
  // '': [`constants.ts`, `${moduleName}.module.ts`]
};

// creat folders and files
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath, { recursive: true });
  folders.forEach(folder => {
    const folderPath = path.join(basePath, folder);
    fs.mkdirSync(folderPath);

    const fileSet = files[folder];
    if (Array.isArray(fileSet)) {
      fileSet.forEach(file => fs.writeFileSync(path.join(folderPath, file), ''));
    } else {
      fs.writeFileSync(path.join(folderPath, fileSet), '');
    }
  });

  // root files
  // files[''].forEach(file => fs.writeFileSync(path.join(basePath, file), ''));

  console.log(`✅ Module "${moduleName}" created successfully.`);
} else {
  console.warn(`⚠️ Module "${moduleName}" already exists.`);
}