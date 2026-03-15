# StreetWarm E-Commerce Application

StreetWarm is a modern, high-performance, and visually striking e-commerce web application built specifically for fashion and streetwear enthusiasts. The project showcases elegant UI/UX design, interactive fluid animations, and a seamless shopping experience using cutting edge web technologies.

## Tech Stack

- Framework: Astro
- UI Library: React
- Styling: Tailwind CSS v4
- State Management: Zustand 
- Animations: Framer Motion
- Carousels: Swiper.js
- Language: TypeScript

## Key Features

- Premium Design: Aesthetic interfaces with custom styling, glassmorphism, and smooth layout interactions.
- Dynamic Shopping Cart: Global state management powered by Zustand with persistent local storage support. Intelligent cart validation prevents checkout until required product variants (like size and colors) are selected.
- Interactive Product Details: Seamless image galleries and functional variant selectors (color and size) that directly integrate with the cart store.
- Custom Pages: Fully responsive layouts across Shop, Blog, FAQs, Contact and standard informational sections.
- Mobile Optimized: Lightweight architecture, native drawer menus, and flawless responsive grids suited for seamless mobile experiences.

## Project Structure

- /src/components: Reusable core React components (layout pieces, sections, UI controls)
- /src/pages: Astro file routing and main page structures
- /src/store: Zustand state management logic (cart functionalities, app UI state)
- /src/data: Mock structures containing products, blogs and static information
- /public: Static assets (images, icons, custom fonts)

## Setup and Installation

1. Clone this repository
2. Run 'npm install' to install dependencies
3. Run 'npm run dev' to start the local development server at localhost:4321
4. Run 'npm run build' to create an optimized production build

## License

This project was built as a creative portfolio piece to demonstrate modern aesthetic frontend development practices. Free for educational and inspirational purposes.
