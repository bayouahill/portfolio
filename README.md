# Alex Hill Portfolio

A modern, responsive portfolio website showcasing data analytics projects and professional experience.

🌐 **Live Site:** [bayouahill.github.io/portfolio-site](https://bayouahill.github.io/portfolio-site)

## About

This portfolio website highlights my work as an early career data analyst with expertise in SQL, Python, Tableau, and VBA. The site features a clean, professional design with interactive project cards, mobile-responsive navigation, and a modern UI.

## Features

- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **Project Showcase:** Interactive project cards with hover effects and filtering by technology
- **Dynamic Navigation:** Dropdown menu for project categories with URL-based filtering
- **Modern UI:** Clean design with custom color palette and smooth animations
- **Contact Integration:** Direct links to LinkedIn, GitHub, and email
- **Mobile Menu:** Hamburger menu with overlay for mobile navigation

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Design:** Custom CSS with CSS Variables for theming
- **Hosting:** GitHub Pages
- **Development:** Built with Claude AI and Cursor IDE

## Project Structure

```
portfolio-site/
├── index.html              # Homepage
├── about.html              # About Me page
├── projects.html           # All Projects page
├── projects/               # Individual project pages
│   ├── Ames-Iowa-erd.html
│   ├── marriottcasecomp.html
│   └── utahcounty-hazardassesment.html
├── styles/
│   └── main.css           # Main stylesheet
├── images/                # Profile images
├── files/                 # Resume PDF
└── README.md

```

## Color Palette

The site uses a nature-inspired color palette:

- **Background:** `#fafbfa` (Off-white)
- **Text:** `#2d3b3a` (Dark green-gray)
- **Forest:** `#2d3b3a` (Primary dark)
- **Sage:** `#4a5d6a` (Muted blue-gray)
- **Moss:** `#5a6562` (Medium gray-green)
- **Stone:** `#8b9894` (Light gray)
- **Accent:** `#d4a574` (Warm tan)
- **Aqua:** `#5a7d7a` (Teal accent)

## Setup & Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/bayouahill/portfolio-site.git
cd portfolio-site
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Navigate to `http://localhost:8000`

### Deployment

The site is deployed automatically via GitHub Pages from the `main` branch.

To deploy updates:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Custom Domain Setup

To use a custom domain with GitHub Pages:

1. Create a `CNAME` file in the root directory with your domain
2. Configure DNS records with your domain registrar
3. Enable custom domain in GitHub repository settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Featured Projects

- **Ames Iowa Housing Analysis:** Statistical analysis of housing market data using Python
- **Marriott Case Competition:** Business strategy presentation (Top 6 finish)
- **Utah County Hazard Assessment:** GIS-based geological hazard mapping

## Contact

- **Email:** bayouahill21@gmail.com
- **LinkedIn:** [linkedin.com/in/alex-hill-bayou](https://www.linkedin.com/in/alex-hill-bayou)
- **GitHub:** [github.com/bayouahill](https://github.com/bayouahill)

## License

© 2025 Alex Hill. All rights reserved.

---

Built with HTML, CSS, and JavaScript
