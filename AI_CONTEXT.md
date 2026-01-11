# Codebase Context & Reference

This file serves as a reference for AI assistants to understand the project's technology stack and design system.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI Primitives (Accordion, Dialog, Dropdown, etc.)
- **State Management/Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Date Handling**: date-fns
- **Routing**: React Router DOM v7

## Design System & Colors

The project uses Tailwind CSS v4 with CSS variables for theming, defined in `src/index.css`.

### Color Variables

These variables are mapped to Tailwind utility classes.

| Variable               | Usage              |
| :--------------------- | :----------------- |
| `--background`         | Page background    |
| `--foreground`         | Default text color |
| `--card`               | Card background    |
| `--card-foreground`    | Card text color    |
| `--popover`            | Popover background |
| `--popover-foreground` | Popover text color |

These variables are mapped to Tailwind utility classes. Values are in OKLCH format.

| Variable                       | Usage                   | Light Mode Value             | Dark Mode Value              |
| :----------------------------- | :---------------------- | :--------------------------- | :--------------------------- |
| `--background`                 | Page background         | `oklch(1 0 0)`               | `oklch(0.147 0.004 49.25)`   |
| `--foreground`                 | Default text color      | `oklch(0.147 0.004 49.25)`   | `oklch(0.985 0.001 106.423)` |
| `--card`                       | Card background         | `oklch(1 0 0)`               | `oklch(0.216 0.006 56.043)`  |
| `--card-foreground`            | Card text color         | `oklch(0.147 0.004 49.25)`   | `oklch(0.985 0.001 106.423)` |
| `--popover`                    | Popover background      | `oklch(1 0 0)`               | `oklch(0.216 0.006 56.043)`  |
| `--popover-foreground`         | Popover text color      | `oklch(0.147 0.004 49.25)`   | `oklch(0.985 0.001 106.423)` |
| `--primary`                    | Primary brand color     | `oklch(0.216 0.006 56.043)`  | `oklch(0.923 0.003 48.717)`  |
| `--primary-foreground`         | Text on primary color   | `oklch(0.985 0.001 106.423)` | `oklch(0.216 0.006 56.043)`  |
| `--secondary`                  | Secondary background    | `oklch(0.97 0.001 106.424)`  | `oklch(0.268 0.007 34.298)`  |
| `--secondary-foreground`       | Text on secondary       | `oklch(0.216 0.006 56.043)`  | `oklch(0.985 0.001 106.423)` |
| `--muted`                      | Muted background        | `oklch(0.97 0.001 106.424)`  | `oklch(0.268 0.007 34.298)`  |
| `--muted-foreground`           | Muted text              | `oklch(0.553 0.013 58.071)`  | `oklch(0.709 0.01 56.259)`   |
| `--accent`                     | Accent background       | `oklch(0.97 0.001 106.424)`  | `oklch(0.268 0.007 34.298)`  |
| `--accent-foreground`          | Text on accent          | `oklch(0.216 0.006 56.043)`  | `oklch(0.985 0.001 106.423)` |
| `--destructive`                | Error/Destructive       | `oklch(0.577 0.245 27.325)`  | `oklch(0.704 0.191 22.216)`  |
| `--border`                     | Default border color    | `oklch(0.923 0.003 48.717)`  | `oklch(1 0 0 / 10%)`         |
| `--input`                      | Input field borders     | `oklch(0.923 0.003 48.717)`  | `oklch(1 0 0 / 15%)`         |
| `--ring`                       | Focus ring color        | `oklch(0.709 0.01 56.259)`   | `oklch(0.553 0.013 58.071)`  |
| `--sidebar`                    | Sidebar background      | `oklch(0.985 0.001 106.423)` | `oklch(0.216 0.006 56.043)`  |
| `--sidebar-foreground`         | Sidebar text            | `oklch(0.147 0.004 49.25)`   | `oklch(0.985 0.001 106.423)` |
| `--sidebar-primary`            | Sidebar primary         | `oklch(0.216 0.006 56.043)`  | `oklch(0.488 0.243 264.376)` |
| `--sidebar-primary-foreground` | Text on sidebar primary | `oklch(0.985 0.001 106.423)` | `oklch(0.985 0.001 106.423)` |
| `--sidebar-accent`             | Sidebar accent          | `oklch(0.97 0.001 106.424)`  | `oklch(0.268 0.007 34.298)`  |
| `--sidebar-accent-foreground`  | Text on sidebar accent  | `oklch(0.216 0.006 56.043)`  | `oklch(0.985 0.001 106.423)` |
| `--sidebar-border`             | Sidebar border          | `oklch(0.923 0.003 48.717)`  | `oklch(1 0 0 / 10%)`         |
| `--sidebar-ring`               | Sidebar ring            | `oklch(0.709 0.01 56.259)`   | `oklch(0.553 0.013 58.071)`  |

### Chart Colors

| Variable    | Light Mode Value            | Dark Mode Value              |
| :---------- | :-------------------------- | :--------------------------- |
| `--chart-1` | `oklch(0.646 0.222 41.116)` | `oklch(0.488 0.243 264.376)` |
| `--chart-2` | `oklch(0.6 0.118 184.704)`  | `oklch(0.696 0.17 162.48)`   |
| `--chart-3` | `oklch(0.398 0.07 227.392)` | `oklch(0.769 0.188 70.08)`   |
| `--chart-4` | `oklch(0.828 0.189 84.429)` | `oklch(0.627 0.265 303.9)`   |
| `--chart-5` | `oklch(0.769 0.188 70.08)`  | `oklch(0.645 0.246 16.439)`  |

### Radius Variables

- `--radius` (Default: 0.625rem)
- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--radius-xl`

## Key Files

- `src/index.css`: Contains the full CSS variable definitions and Tailwind theme configuration.
- `package.json`: Lists all dependencies and scripts.
- `vite.config.ts`: Vite configuration including aliases (e.g., `@` -> `./src`).

## Project Structure

- `src/apis`: Contains API integration hooks using `react-query`.
- `src/components`: Reusable UI components.
- `src/guards`: Route guards for authentication and authorization.
- `src/lib`: Core libraries and configurations (e.g., Axios setup).
- `src/pages`: Application pages/views.
- `src/routes`: Route definitions and configuration.
- `src/services`: Service layer for API requests.

## Key Conventions

### API Layer

- **React Query**: All API calls are wrapped in custom hooks using `@tanstack/react-query` (e.g., `useDummyGet`).
- **Service Pattern**: Actual HTTP requests are handled in `src/services/request.ts` using helper functions (`Get`, `Post`, `Put`, `Delete`).
- **Endpoints**: API endpoints are defined in `src/apis/endpoints.ts`.

### Routing

- **React Router**: Uses `createBrowserRouter` from `react-router-dom`.
- **Guards**: Route protection is implemented via loaders (e.g., `authGuard`, `nonAuthGuard`) in `src/guards`.

### HTTP Client

- **Axios**: Configured in `src/lib/axios.ts` with interceptors for token handling and error management.
