# 🌦️ Vayutrack - A Smart Weather Interface

**Vayutrack** is a sleek and responsive weather dashboard built with **React**, **Tailwind CSS**, and modern UI components powered by **Shadcn UI** **Recharts** and **Lucide Icons**. It allows users to search cities, view real-time weather information, and interact with a minimal, fast user interface.

---

## 🧠 Core Features

* 🌤️ Real-time weather updates via external APIs
* 🔍 City-based search with suggestions
* 🎨 Clean and minimal UI built with Tailwind and Radix UI
* 📱 Fully responsive for all screen sizes
* 🌙 Light/Dark mode theme switching
* 📦 Vite-powered blazing fast build and dev server
* 🧠 React Query for caching and reactivity of API data


---

## 🌈 Screenshots



![Screenshot 2025-07-08 180156](https://github.com/user-attachments/assets/2eec67e6-e9bf-43fa-a6ed-f0acda3a492e)

![Screenshot 2025-07-08 180219](https://github.com/user-attachments/assets/f0d7e2e9-1e1a-45e9-ab7e-10d7e90e3c3c)

![Screenshot 2025-07-08 180244](https://github.com/user-attachments/assets/b13c1093-a308-4730-901a-316a3e1a60d9)

![Screenshot 2025-07-08 180312](https://github.com/user-attachments/assets/6d81d387-c6bb-48af-b1a8-806c024e91c1)

![Screenshot 2025-07-08 180325](https://github.com/user-attachments/assets/b334a016-21c1-4470-b492-710fb4c2f7c8)

![Screenshot 2025-07-08 180137](https://github.com/user-attachments/assets/b43f1b3a-f171-4520-ac6a-e49add1e0751)

![Screenshot 2025-07-08 180352](https://github.com/user-attachments/assets/cedc1fbe-deba-40c8-bed5-44fd8562d014)

![Screenshot 2025-07-08 180414](https://github.com/user-attachments/assets/f126779a-2e3c-4594-a3d3-bc08c021aa30)

![Screenshot 2025-07-08 181416](https://github.com/user-attachments/assets/44b4badb-84d7-4732-a637-3b31e8ff8179)

![Screenshot 2025-07-08 181250](https://github.com/user-attachments/assets/d716be13-ccbf-46f1-a8fa-5ad3cf1e744e)


---


## 📁 Project Structure

```
weatherwise/
├── public/                     # Static assets (if any)
├── src/
│   ├── api/                    # API logic and configurations
│   │   ├── config.js           # Base API URL or constants
│   │   └── weather.js          # API calls to fetch weather data
│   ├── assets/                 # Images, logos, and static content
│   ├── components/             # Reusable UI components
│   │   ├── About.jsx           # About section UI
│   │   └── city-search.jsx     # City search input & logic
│   ├── App.jsx                 # Main layout and routing
│   ├── App.css                 # Tailwind + custom styles
│   ├── index.css               # Global styles
│   └── main.jsx                # ReactDOM entry point
├── index.html                  # Vite entry HTML
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind setup
├── vite.config.js              # Vite bundler config
├── .env                        # API keys & environment variables
└── README.md                   # Project documentation
```



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weatherwise.git
cd weatherwise
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file at the root:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Run Locally

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🧰 Tech Stack & Dependencies

### 💻 Core Tech:

* [React 19](https://reactjs.org/)
* [Vite 7](https://vitejs.dev/)
* [Tailwind CSS 4](https://tailwindcss.com/)

### 🛠 UI & UX:

* [Lucide React Icons](https://lucide.dev/)
* [Radix UI Primitives](https://www.radix-ui.com/)
* [CMDK](https://cmdk.paco.sh/) – command palette components
* [Sonner](https://sonner.emilkowal.dev/) – toasts & alerts

### 🧠 Utilities:

* [React Router DOM](https://reactrouter.com/)
* [React Query](https://tanstack.com/query/latest)
* [Date-fns](https://date-fns.org/) – modern date utilities

### ⚙️ Dev Tools:

* [ESLint](https://eslint.org/) + React Hooks plugin
* [Tailwind Animate CSS](https://github.com/tailwindlabs/animate.css)
* [Vite Plugin React](https://www.npmjs.com/package/@vitejs/plugin-react)

---

## 📦 Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start local dev server           |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint on codebase           |

---

## 📝 License

This project is licensed under the MIT License.
---

## 👨‍💻 Author

**Parvesh Bansal**

## 🔗 Connect with Me

- 💼 [LinkedIn](https://www.linkedin.com/in/parvesh-bansal/)  
- ✖️ [X (Twitter)](https://twitter.com/parve5h)  
- 📸 [Instagram](https://www.instagram.com/parve5h)  
- 📧 [Email Me](mailto:parveshbansal063@gmail.com)  
- 👨‍💻 [GitHub Profile](https://github.com/parve5h)

  ---



> "Vayutrack brings simplicity to complexity. Get the forecast, fast."
