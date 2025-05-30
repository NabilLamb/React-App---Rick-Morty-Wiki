# Rick & Morty Wiki 🧪🌌

Explore the multiverse of Rick and Morty characters in this dynamic React-powered wiki portal!

![image alt](https://github.com/NabilLamb/React-App---Rick-Morty-Wiki/blob/bd54c33f200d743967e7363d92534b7a1a4e8cb6/Screenshot%202025-05-30%20202243.png)

## 🚀 Live Demo
[View Live Deployment](https://your-username.github.io/rick-morty-wiki/)

## ✨ Features
- **Character Browser**: Explore all characters from the Rick and Morty universe
- **Advanced Search**: Filter by:
  - 🔍 Name/Keyword
  - ❤️‍🩹 Status (Alive/Dead/Unknown)
  - 👽 Species (Human/Alien/Mythological)
  - ♂️ Gender
- **Character Details**: Deep dive into:
  - Origin & current location
  - Episode appearances
  - Full attributes
- **Favorites System**: Save your favorite characters
- **Responsive Design**: Works flawlessly on mobile, tablet & desktop
- **Portal Animations**: Rick-approved loading effects

## 🛠️ Tech Stack
- **Frontend**: React 19 + Vite
- **Routing**: React Router v6
- **State Management**: React Context API
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)
- **Pagination**: react-paginate
- **Styling**: Pure CSS with Flexbox/Grid
- **Deployment**: GitHub Pages

## 📂 Project Structure
```bash
src/
├── assets/               # Images & icons
├── components/           # Reusable UI components
│   ├── Cards/            # Character cards
│   ├── Filters/          # Search filters
│   ├── Pagination/       # Pagination controls
│   └── Search/           # Search component
├── context/              # State management
│   └── FavoritesContext.js
├── pages/                # Application views
│   ├── HomePage.jsx      # Main listing page
│   └── CharacterDetailsPage.jsx
├── App.jsx               # Root component
└── index.css             # Global styles


⚡️ Quick Start
Clone the repository:
git clone https://github.com/your-username/rick-morty-wiki.git
cd rick-morty-wiki

Install dependencies:
npm install
# or
yarn install

Start development server:
npm run dev
# or
yarn dev

Open in browser: http://localhost:5173



