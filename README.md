# ToЧ Bin

Welcome to the ToЧ Bin repository. This project is a web application designed to provide a customizable spinning wheel for prizes. It's perfect for creating engaging reward systems for kids or fun activities for events.

## Table of Contents

- [ToЧ Bin](#toч-bin)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Marketing Site Usage](#marketing-site-usage)
  - [Vercel App Usage](#vercel-app-usage)
  - [Customization](#customization)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

ToЧ Bin is a web app that allows users to create a spinning wheel with custom prizes. It's designed to be flexible and easy to use, making it ideal for various applications, from educational reward systems to party games.

## Features

- **Customizable Prizes**: Easily add and modify prizes on the spinning wheel.
- **Interactive Design**: Engaging and fun interface for users of all ages.
- **Responsive Layout**: Ensures the app looks great on any device.
- **Simple Setup**: Quick and easy to get started with minimal configuration.

## Installation

To set up the project locally using Hatch, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dev3l/toy-bin.git
   cd toy-bin
   ```

2. **Create and activate a virtual environment**:
   Use Hatch to create and activate a virtual environment:

   ```bash
   hatch env create
   hatch shell
   ```

3. **Navigate to the contents directory**:

   ```bash
   cd contents
   ```

## Marketing Site Usage

To preview the site locally, use the following command:

```bash
mkdocs serve
```

Access the site at `http://127.0.0.1:8000`.

## Vercel App Usage

To set up and run the application locally, follow these steps:

1. **Navigate to the app directory**:

   ```bash
   cd app
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   yarn dev
   ```

4. **Access the app**: Open your browser and go to `http://localhost:3000` to see the application in action.

## Customization

- **Theme Configuration**: Modify `mkdocs.yml` to change the theme settings, including colors and fonts. The theme is designed to be sleek and modern, with a focus on readability and aesthetics.
- **CSS Styling**: Add custom styles in `stylesheets/extra.css` to enhance the site's appearance, including the hero banner and carousel.

## Deployment

To deploy the site to GitHub Pages, run:

```bash
mkdocs gh-deploy
```

Ensure your repository is linked to a GitHub account and has GitHub Pages enabled.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
