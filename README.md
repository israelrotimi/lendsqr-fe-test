# Lendsqr Frontend Engineering Assessment

Welcome to the Lendsqr Frontend Engineering Assessment project. This application is designed to simulate a lending platform's dashboard, providing functionalities such as user management, detailed user information, and more.

## Table of Contents

- [About Lendsqr](#about-lendsqr)
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About Lendsqr

Lendsqr is a Lending-as-a-Service (LaaS) solution that empowers lenders to build, launch, and scale their digital lending businesses across multiple channels at the lowest cost. We provide a cloud lending platform to streamline the activities of your LaaS business by implementing novel solutions and superior domain expertise. Our mission is to make lenders succeed.

## Project Overview

This project is a frontend application developed as part of the Lendsqr Frontend Engineering Assessment. The application includes the following pages:

- **Login Page**: Authenticates users to access the dashboard.
- **Dashboard**: Displays an overview of key metrics and user statistics.
- **Users Page**: Lists all users with options to filter, sort, and paginate.
- **User Details Page**: Provides detailed information about a specific user.

## Features

- **Responsive Design**: Ensures usability across various devices.
- **User Authentication**: Secure login functionality.
- **Dashboard Metrics**: Overview of total users, active users, users with loans, and users with savings.
- **User Management**: View, filter, sort, and paginate through the user list.
- **User Details**: Access comprehensive information about individual users.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **SCSS**: CSS preprocessor for enhanced styling capabilities.
- **React Router**: For client-side routing.
- **Axios**: Promise-based HTTP client for API requests.
- **React Query**: Data-fetching library for React applications.
- **Jest**: Testing framework for JavaScript and TypeScript.

## Getting Started

### Prerequisites

Ensure you have the following installed on your development environment:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Node.js package manager (usually comes with Node.js)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/israelrotimi/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode:

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

Login with the following credentials:

```javascript
username: "test@example.com" // Fake email
password: "pass@123" // You should change this password
```

## Project Structure

The project's directory structure is organized as follows:

```
lendsqr-fe-test/
├── public/
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # SCSS stylesheets
│   ├── utils/           # Utility functions and helpers
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Application entry point
│   └── ...              # Other configuration files
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Launches the test runner.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Contact

For any inquiries or feedback, please contact:

- **Israel Rotimi**: [Email](mailto:israelrotimi@example.com)
- **GitHub Repository**: [https://github.com/israelrotimi/lendsqr-fe-test](https://github.com/israelrotimi/lendsqr-fe-test)

---

Thank you for checking out the Lendsqr Frontend Engineering Assessment project!

