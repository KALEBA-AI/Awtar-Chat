# Awtar Chat App

Awtar Chat App is a real-time messaging platform designed to enhance communication and collaboration within organizations. Developed using modern technologies like React, Node.js, MongoDB, and Socket.io, it provides a seamless user experience for internal messaging.

## Features

- Real-time messaging with instant updates
- User authentication and profile management
- Secure storage of user data
- Responsive design for optimal use on different devices
- Scalable backend architecture

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Websockets:** Socket.io for real-time communication

## Database Setup

To enable login functionality and modify the database, you must first set up a MongoDB database.

1. Modify the .env File:Open the .env file in the server directory of the project.
2. Set the DATABASE_URL variable with the connection string to your MongoDB database:
   ```bash
DATABASE_URL="mongodb+srv://yourdatabase"


## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/awtar-chat.git

2. Install Dependencies:
   ```bash
   # For frontend
   cd client && npm install

   # For backend
   cd server && npm install

3. Run the App:Start the client and server
   ```bash
   # Start the backend server
   cd server
   npm run dev
   
   # Start the frontend
   cd client
   npm run dev
3. Access the App:Open your browser and visit http://localhost:5173.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your updates.

## License

This project is licensed under the MIT License.