# VSCode Portfolio

[![React](https://img.shields.io/badge/React-18.0.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/yokwejuste/vscode_porfolio?style=flat&logo=github)](https://github.com/yokwejuste/vscode_porfolio/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/yokwejuste/vscode_porfolio?style=flat&logo=github)](https://github.com/yokwejuste/vscode_porfolio/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/yokwejuste/vscode_porfolio?style=flat&logo=github)](https://github.com/yokwejuste/vscode_porfolio/issues)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=flat&logo=vercel)](https://yokwejuste.me)

A modern, interactive developer portfolio designed to resemble Visual Studio Code. Built with React and styled with Tailwind CSS, this portfolio provides a unique and engaging way to showcase your projects, skills, and experience.

## Features

- **VSCode-Inspired Interface**: Familiar layout with file explorer, tabs, and terminal aesthetics
- **Multiple Pages**: Home, About, Projects, Blog, Followers, Recommendations, and Contact sections
- **Dark/Light Theme**: System-aware theme with manual toggle support
- **Project Filtering**: Filter projects by technology stack (Frontend, Backend, All)
- **Pagination**: Browse through projects, blog posts, and GitHub followers efficiently
- **Dynamic Content**: Live integration with Dev.to blog API and GitHub API
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Hover effects, smooth transitions, and animated typing

## Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Icons**: React Icons
- **Animations**: React Type Animation
- **API Integration**: GitHub REST API, Dev.to API

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yokwejuste/vscode_porfolio.git
cd vscode_porfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

### Personal Information

Update the following files with your personal information:

- `src/data/contacts.js` - Your contact information
- `src/data/projects.js` - Your project portfolio
- `src/data/recommendation.js` - Testimonials and recommendations
- `src/data/followers.js` - Additional follower data if needed

### API Integration

The portfolio fetches data from external APIs:

- **GitHub Followers**: Update the username in `src/pages/Followers.jsx`
- **Blog Posts**: Update the username in `src/pages/Blog.jsx` (Dev.to API)

Replace `yokwejuste` with your username in the respective API calls.

### Theme Customization

Theme colors can be modified in:
- `src/index.css` - CSS variables for light and dark themes
- `tailwind.config.js` - Tailwind configuration

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SideBar.jsx
│   ├── Pagination.jsx
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── Followers.jsx
│   ├── Contact.jsx
│   └── Recommendation.jsx
├── context/            # React Context for state management
│   ├── AppContext.js
│   └── AppProvider.jsx
├── data/               # Static data files
│   ├── projects.js
│   ├── contacts.js
│   └── ...
├── images/             # Image assets
└── styles/             # CSS files
```

## Available Scripts

### Development

```bash
npm run dev
```
Runs the app in development mode with hot module replacement.

### Build

```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview

```bash
npm run preview
```
Locally preview the production build.

### Deploy

```bash
npm run deploy
```
Deploys the built app to GitHub Pages.

## Customization Guide

### Adding a New Project

Add a new entry to `src/data/projects.js`:

```javascript
{
  name: "Project Name",
  description: "Brief description",
  src: "/path/to/image.png",
  repository: "https://github.com/username/repo",
  site: "https://project-url.com",
  technologies: ["React", "Node.js", "MongoDB"],
  type: ["front", "back"]
}
```

### Changing Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --blue-200: #539BF5;  /* Primary accent color */
  --text-primary: #24292f;
  --bg-primary: #ffffff;
  /* ... */
}
```

### Modifying Pagination

Adjust items per page in the respective page files:

- Projects: `src/pages/Projects.jsx` (default: 6)
- Blog: `src/pages/Blog.jsx` (default: 6)
- Followers: `src/pages/Followers.jsx` (default: 9)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application implements several performance optimizations:

- Code splitting with React Router
- Lazy loading of images
- Efficient state management with React Context
- Pagination to limit rendered items
- Parallel API requests for followers

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by Visual Studio Code interface design
- Icons provided by React Icons
- Blog content integration via Dev.to API
- Follower data via GitHub REST API

## Contact

Steve Yonkeu - [LinkedIn](https://www.linkedin.com/in/yokwejuste/)

Project Link: [https://github.com/yokwejuste/vscode_porfolio](https://github.com/yokwejuste/vscode_porfolio)

Live Demo: [https://yokwejuste.me](https://yokwejuste.me)
