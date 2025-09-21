# 0x04-TypeScript

This project is a full introduction to **TypeScript** through a series of progressively complex tasks.  
It demonstrates how to define interfaces, classes, types, namespaces, ambient declarations, and apply TypeScript features in real-world scenarios.

---

## 📌 Project Overview

The goal of this project is to gain hands-on experience with TypeScript by:
- Creating and using **interfaces** and **types**
- Building and extending **classes**
- Working with **advanced types** (string literals, type predicates)
- Using **ambient declarations** for third-party libraries
- Organizing code using **namespaces** and **declaration merging**
- Practicing **nominal typing** with branded types
- Compiling everything with Webpack and ensuring **no TypeScript errors**

---

## 📂 Project Structure

```bash
0x04-TypeScript/
│
├── task_0/              # Students table rendering
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── .eslintrc.js
│
├── task_1/              # Teacher interface, Directors, printTeacher, StudentClass
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│
├── task_2/              # Advanced types and employees
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│
├── task_3/              # Ambient namespaces & CRUD operations
│   ├── js/interface.ts
│   ├── js/crud.d.ts
│   ├── js/crud.js
│   └── js/main.ts
│
├── task_4/              # Namespace & Declaration merging
│   ├── js/subjects/Teacher.ts
│   ├── js/subjects/Subject.ts
│   ├── js/subjects/Cpp.ts
│   ├── js/subjects/Java.ts
│   ├── js/subjects/React.ts
│   └── js/main.ts
│
└── task_5/              # Brand convention & nominal typing
    ├── js/main.ts
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
