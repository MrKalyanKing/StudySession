# 💻 Study Session Frontend

This is the React-based frontend for the Study Session Planner. Built with Vite and Tailwind CSS v4, it provides a fast and responsive user interface for managing your learning tasks.

## 🛠️ Features

- ⚛️ **React 19**: Modern components and hooks.
- ⚡ **Vite**: Ultra-fast build tool and development server.
- 🎨 **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
- 📱 **Mobile First**: Fully responsive design for mobile, tablet, and desktop viewports.
- 📦 **Lucide Icons**: Beautiful, consistent icon set.
- 💾 **State Persistence**: Automatic data saving to `localStorage`.

## 📁 Source Overview

- `src/main.jsx`: Application entry point with providers.
- `src/App.jsx`: Main application container.
- `src/components/Context`: Handlers for shared data and persistence.
- `src/components/Dashboard`: Responsive layout arrangement.
- `src/components/Navbar`: Header component with mobile menu support.
- `src/components/Sidebar`: Collapsible sidebar drawer with fixed overlay for mobile.
- `src/components/Workspace`: Task overview and 'New Task' button.
- `src/components/Study/StudyCard.jsx`: Individual task display with progress tracking.
- `src/components/Study/StudyForm.jsx`: Responsive modal for adding new sessions.
- `src/components/Study/StudyViewModal.jsx`: Modal for viewing detailed task info.

## 🚀 Running the Frontend

### Installation
Ensure you're inside the `frontend` directory:
```bash
npm install
```

### Development
Start the dev server:
```bash
npm run dev
```

### Build
Generate production-ready assets in the `dist/` folder:
```bash
npm run build
```

### Linting
Check code quality:
```bash
npm run lint
```
