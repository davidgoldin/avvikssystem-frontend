# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# avvikssystem-frontend

# 🛠️ Avvikssystem – Frontend

Dette er frontend-delen av hovedprosjektet ved Gokstad Akademiet.  
Bygget med **React** og **Tailwind CSS**.  
Systemet brukes til å registrere:

- Skademeldinger (personale)
- Pasienthendelser
- Forbedringsforslag

🧾 Brukeren logger inn, fyller ut skjema (wizard), og får en takk-side etter innsending.

---

### ✅ Krav for å kjøre applikasjon frontend

Før du starter, må du ha installert følgende

- [Node.js](https://nodejs.org/en/) versjon: 18.x
- [npm](https://www.npmjs.com/) (følger med Node.js)
- Git
- Nettleser for å sette opp localhost, kjører på localhost 5174 selv på frontend med Google Chrome

---

### 1. Klone prosjektet

```bash
git clone https://github.com/davidgoldin/avvikssystem-frontend.git
cd avvikssystem-frontend
```

### Mappe struktur jeg bruker

avvikssystem-frontend/
├── public/ # statisk innhold
├── src/
│ ├── assets/ # Bilder og ikoner
│ ├── components/ # Gjenbrukbare UI-komponenter
│ ├── features/ # Domene funksjoner wizard og authenticator
│ ├── pages/ # Sider på nettsiden (ruter) Så pasienthendelse, skademelding og forbedringsforslag osv.
│ ├── services/ # API-kall og databehandling
│ ├── styles/ # Globale CSS-filer for styling
│ ├── utils/ # Hjelpefunksjoner
│ └── main.tsx # Inngangspunkt
├── .eslintrc.cjs # ESLint-konfig
├── vite.config.ts # Vite-konfig
└── package.json
