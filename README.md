# Simple Restaurant Management Application

A simple restaurant management/ food delivery application built using Laravel 10, Vue 3, and Inertia.js. This MVC SPA (Model-View-Controller Single Page Application) is intended for learning purposes and to demonstrate the power and common usages of the Laravel Framework.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Personal Opinion](#authors-comments)

## Introduction

This application is designed to manage restaurant (delivery) operations, including menu management, orders, staff, and customers. It serves as a practical example for those looking to learn how to build a full-stack application using Laravel, Vue.js, and Inertia.js.

## Features

- User authentication and authorization
- Restaurant and menu management
- Order processing and management
- Staff and customer roles
- Admin panel for managing restaurants
- Real-time updates using Vue.js and Inertia.js (Single Page Application)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **PHP** >= 8.0
- **Composer**
- **Node.js** and **npm**
- A web server (e.g., Apache, Nginx)
- **Database** (e.g., MySQL, SQLite)

## Installation

Follow these steps to set up the application locally:

1. **Clone the repository and follow the instructions below:**

   ```bash
   git clone https://github.com/ikarolaborda/simple-food-delivery.git
   cd simple-restaurant-management
   cp .env.example .env
   composer install
   php artisan key:generate
   php artisan migrate:fresh --seed
   npm install
   npm run build
   php artisan serve
   ```
   
## License

This project is open-source and available under the MIT License.

## Author's Comments

While this application demonstrates the capabilities 
of Laravel, Vue.js, and Inertia.js, 
the approach used might be considered "old school" 
by modern development standards. 
The architecture and code structure may not reflect the latest 
best practices in software development.  (This app is just a "rewrite" of an old restaurant application i've written in the past)
If you take a look at my other projects, the majority of them strictly follow the principles of `Clean Architecture`, and I still believe that
`CONTROLLERS SHOULD NEVER KNOW MODELS, ONLY SERVICES/ACTIONS`
However, it serves as a valuable learning tool for understanding the fundamentals and common usages of the Laravel Framework.

