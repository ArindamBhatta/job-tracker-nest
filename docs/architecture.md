# 🏛️ Project Architecture & NestJS Fundamentals

This guide explains how the **Job Tracker App** is structured, especially for those new to NestJS.

---

## 1. What is a "Decorator"? (`@Module`, `@Controller`, etc.)
A **Decorator** (anything starting with `@`) is like a **Post-it Note** for TypeScript. It tells NestJS what a class is supposed to do. Without decorators, these are just empty classes.

*   `@Module()`: "Hey Nest, this class is a **Container** (Box) for controllers and services."
*   `@Controller('auth')`: "Hey Nest, this class handles any web requests starting with URL `/auth`."
*   `@Injectable()`: "Hey Nest, this class (Service) is an **Engine** that can be used by other classes."

```typescript
@Module({
  imports: [UsersModule],        // Use another Module (Box) inside this one
  controllers: [AuthController], // Register the "Front Door" (Routes)
  providers: [AuthService],      // Register the "Engine" (Business Logic)
})
export class AuthModule {}
```

---

## 2. The Module System (The "Box" Analogy)
In NestJS, we don't put everything in one place. We use **Modules** to group related things.

### Why does `AppModule` import 5+ modules?
The `AppModule` is the **Root Module** (The Master Box). When we add `AuthModule`, `UsersModule`, `SharedModule`, etc., to the `imports` array, we are "plugging in" those feature boxes so the entire application knows they exist.

---

## 3. Controllers: Where are my routes?

### `AppController`: Why only `getHello()`?
The `AppController` is just a "Welcome" sign. It only has `getHello()` to prove the server is alive. We don't put real business logic here.

### How does `AuthController` connect to the main app?
1.  **Registry**: `AuthController` is listed inside `AuthModule`.
2.  **Connection**: `AuthModule` is imported by `AppModule`.
3.  **Discovery**: When NestJS starts, it scans `AppModule`'s imports and automatically "discovers" every controller inside those imported modules.

---

## 4. The Request Lifecycle (The Restaurant Analogy)
When a user sends a request (e.g., clicks "Signup"), it goes through a specific order of events:

### 🛡️ Middleware: The Security Guard
*   **What**: Runs before anything else. We use **Global Middleware** (`LoggerMiddleware`) in `AppModule`.
*   **Why**: It handles things that apply to *every* request, like logging the visitor's IP address.
*   **Code**: `AppModule` implements `NestModule` to configure this:
```typescript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

### 🚪 Guards: The VIP Guest List
*   **What**: Used for **Authentication** and Authorization.
*   **Why**: A Guard checks if you have a valid badge (JWT Token). If not, it stops you at the door.

### 🍱 Interceptors: The Waiter
*   **What**: They can "intercept" the order before it reaches the Chef and "intercept" the food before it reaches the Customer.
*   **Why**: Use them to transform data (e.g., hiding a password before sending a response).

### 🧪 Pipes vs DTOs: The Food Safety Check
*   **DTO (Data Transfer Object)**: The **Menu**. It defines what the data is *supposed* to look like.
*   **Pipe**: The **Chef's Assistant** (ValidationPipe) who validates the data. If the Menu says "Number" but the customer sends "Text," the Pipe sends it back.

---

## 5. Dependency Injection (`@Injectable()`)
Think of a Service as an **Engine**.
A Controller (The Car) needs an Engine to run. Instead of the Car building its own engine, NestJS "Injects" the existing Engine into the Car.
*   We mark our Services with `@Injectable()` so NestJS knows it can plug them into other classes.

---

## 6. Project Module Breakdown

| Module | Responsibility |
| :--- | :--- |
| **`SharedModule`** | Common data like Locations, Skills, and Universities. |
| **`UsersModule`** | User profiles, education history, and work experience. |
| **`CompaniesModule`** | Employer data, job designations, and interviewers. |
| **`JobsModule`** | Job listings, benefits, and requirement matching. |
| **`ApplicationsModule`** | The hiring pipeline: applications, interviews, and messaging. |

---

## 7. Database & ORM
*   **TypeORM**: The translator between your TypeScript code and the database.
*   **PostgreSQL (Neon)**: A managed cloud PostgreSQL database. Tables are automatically updated when you change your `@Entity` files!

---

## 8. Navigation Map: Tree + Flow
Use this as a quick map to understand where to go in the codebase.

### Application tree (module/controller level)
```text
App
`-- AppModule
  |-- Imports
  |   |-- AuthModule
  |   |   `-- AuthController
  |   |-- UsersModule
  |   |-- SharedModule
  |   |-- CompaniesModule
  |   |-- JobsModule
  |   `-- ApplicationsModule
  |-- Controllers
  |   `-- AppController
  |-- Providers
  |   `-- AppService
  `-- Middleware config
    `-- LoggerMiddleware -> forRoutes('*') (all routes)
```

### Request pipeline tree (execution order)
```text
HTTP Request
`-- Middleware
  `-- LoggerMiddleware (global in AppModule)
    `-- Guards
      `-- Auth/role checks (canActivate)
        `-- Interceptors (before handler)
          `-- Pipes
            `-- ValidationPipe, ParseIntPipe, etc.
              `-- Controller method (route handler)
                `-- Service (business logic)
                  `-- DB/Repository calls
        `-- Interceptors (after handler, response mapping/timing)
`-- Exception Filters (if any error is thrown)
```

### How decorators map to this
*   **Controller routing**: `@Controller('/auth')`, `@Get()`, `@Post()`
*   **Guard binding**: `@UseGuards(...)`
*   **Pipe binding**: `@UsePipes(...)`, or parameter pipes like `@Param('id', ParseIntPipe)`
*   **Interceptor binding**: `@UseInterceptors(...)`
*   **Filter binding**: `@UseFilters(...)`

### Current global configuration in this project
*   **Global pipe**: `src/main.ts` (ValidationPipe setup)
*   **App-wide middleware**: `src/app.module.ts` (`LoggerMiddleware` with `forRoutes('*')`)
