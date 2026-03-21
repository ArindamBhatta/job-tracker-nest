# 🏛️ Project Architecture

This project follows the **NestJS Modular Design** pattern to ensure scalability and maintainability.

## 1. Modular Structure
Instead of a monolithic approach, we split the 25+ entities into 5 specialized modules:

| Module | Responsibility |
| :--- | :--- |
| **`SharedModule`** | Core lookup data (Location, Skills, Universities, etc.). |
| **`UsersModule`** | Identity, Candidate Profiles, Education, and Experience. |
| **`CompaniesModule`** | Employer data, Designations, and interviewers. |
| **`JobsModule`** | Job listings, benefits, and requirements. |
| **`ApplicationsModule`** | Hiring pipeline, Interviews, Feedback, and Messaging. |

## 2. Database & ORM
*   **TypeORM**: Chosen for its robust TypeScript support and seamless integration with NestJS.
*   **SQLite**: Used for a zero-config local development experience (file: `job-tracker.sqlite`).
*   **Synchronization**: `synchronize: true` is enabled in development to auto-generate tables from entities.

## 3. Key Relationships
*   **Candidate Profile**: `User` has a One-to-One relationship with `JobSeeker`.
*   **Hiring Pipeline**: `JobApplication` connects `User` and `Job`.
*   **Employer Structure**: `Employee` and `Recruiter` link `User` to `Company`.
