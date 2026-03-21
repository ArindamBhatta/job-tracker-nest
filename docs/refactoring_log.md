# 🔄 Refactoring & Implementation Log

## 🏁 Previous State
The project was a basic **Fitness App** with only a `User` entity and simple `Auth` and `Users` modules.

## 🚀 The Transition (Job Tracker)
We performed a full structural pivot to a **Job Tracker App**. 

### 1. Schema Translation
Translated a 25-table Drizzle (PostgreSQL) schema into TypeORM (SQLite).
- **Primary Keys**: Renamed `id` to `userId` in several entities to match the new schema.
- **Field Consistency**: Used `@Column({ name: 'snake_case' })` to maintain database naming conventions while using `camelCase` in code.

### 2. Dependency Fixes
Updating the `User` entity required refactoring `AuthService` and `UsersService` to use the new primary key name (`userId`).

### 3. Modularization
Created 3 new modules (`Shared`, `Companies`, `Jobs`, `Applications`) to house the 20+ new entities.
