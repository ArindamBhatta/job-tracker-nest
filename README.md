# Job Tracker App

A comprehensive Job Tracker application built with [NestJS](https://github.com/nestjs/nest) and [TypeORM](https://typeorm.io/).

## Description
This application helps job seekers track their applications and employers manage their hiring pipeline. It features a robust 25-table database schema covering:
- **Profiles**: Candidate (JobSeeker) and Employer (Recruiter) profiles.
- **Jobs**: Job listings, benefits, and required skills.
- **Pipeline**: Application tracking, interview scheduling, and feedback.
- **Data**: Global lookups for locations, skills, universities, and institutes.

## Tech Stack
- **Framework**: NestJS
- **ORM**: TypeORM
- **Database**: SQLite (`job-tracker.sqlite`)
- **Documentation**: Swagger/OpenAPI

## Project Setup
```bash
$ npm install
```

## Running the App
```bash
# development
$ npm run start

# watch mode (Recommended for learning)
$ npm run start:dev
```

## Features for Learning
This project was translated from a Drizzle/PostgreSQL schema to TypeORM/SQLite to demonstrate:
- Entity definitions and decorators.
- Complex relations (`ManyToOne`, `OneToOne`).
- Module organization in NestJS.
- Automatic database synchronization.

## Documentation
Once the app is running, visit `http://localhost:3000/doc` to explore the API with Swagger.

## License
Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
