# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases your projects, skills, and experience with a beautiful and interactive user interface.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light theme support
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎬 Background video support
- 📝 Contact form with validation
- 🚀 Fast and optimized performance

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Hero Icons

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
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

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── background.mp4
│   └── projects/
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

1. Update personal information:
   - Edit the content in `src/pages/Home.tsx`
   - Update the profile image in `public/profile.jpg`
   - Modify the background video in `public/background.mp4`

2. Add your projects:
   - Edit the projects array in `src/pages/Projects.tsx`
   - Add project images to `public/projects/`

3. Update experience:
   - Modify the experiences array in `src/pages/About.tsx`

4. Customize styling:
   - Edit `tailwind.config.js` for theme customization
   - Modify `src/index.css` for global styles

5. Update contact information:
   - Edit the contact details in `src/pages/Contact.tsx`
   - Update social media links in both `Navbar.tsx` and `Footer.tsx`

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Hero Icons](https://heroicons.com/)
