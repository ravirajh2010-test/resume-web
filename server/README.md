# Portfolio Contact Form Backend

This is a Node.js/Express backend server for handling contact form submissions and sending emails using Gmail.

## Setup Instructions

### 1. Gmail Configuration

To send emails via Gmail, you need to:

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create an App Password**:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password - copy this!

### 2. Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=where-to-send-emails@gmail.com
PORT=5000
NODE_ENV=development
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Send Email
- **Endpoint:** `POST /api/send-email`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to work with you..."
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Email sent successfully!"
  }
  ```

### Health Check
- **Endpoint:** `GET /api/health`
- **Response:**
  ```json
  {
    "status": "Server is running"
  }
  ```

## Running Both Services

You'll need **two terminals**:

1. **Terminal 1 - Backend Server:**
   ```bash
   cd server
   npm run dev
   ```
   (Runs on localhost:5000)

2. **Terminal 2 - Frontend (Vite):**
   ```bash
   npm run dev
   ```
   (Runs on localhost:5173)

## Testing

You can test the API using tools like:
- **Postman**
- **Thunder Client** (VS Code extension)
- **cURL:**
  ```bash
  curl -X POST http://localhost:5000/api/send-email \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","message":"Test message from backend"}'
  ```

## Troubleshooting

- **"Authentication failed"**: Check your `EMAIL_PASSWORD` (use the 16-char app password, not your Gmail password)
- **"CORS error"**: Make sure the backend is running on port 5000
- **"Email not sent"**: Check that 2FA and App Passwords are enabled on your Gmail account
