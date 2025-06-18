# Backend Deployment Guide

## Environment Variables Required

Make sure to set these environment variables in your deployment platform:

### Required Variables:
```
DBURL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database_name?retryWrites=true&w=majority
PORT=4000 (or your platform's assigned port)
```

### Optional Variables:
```
NODE_ENV=production
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

## Deployment Platform Specific Instructions

### For Render:
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables in the dashboard

### For Railway:
1. Connect your GitHub repository
2. Add environment variables in the Variables tab
3. Deploy automatically

### For Heroku:
1. Connect your GitHub repository
2. Add environment variables in Settings > Config Vars
3. Deploy from GitHub

### For Vercel:
1. Connect your GitHub repository
2. Add environment variables in the dashboard
3. Set build command and output directory

## Testing Your Deployment

After deployment, test these endpoints:

1. **Root endpoint**: `https://your-backend-url.com/`
   - Should return: `{"message":"Blog App Backend API is running!","status":"success","timestamp":"..."}`

2. **Health check**: `https://your-backend-url.com/health`
   - Should return: `{"status":"healthy","message":"Server is running","timestamp":"..."}`

3. **API endpoints**: `https://your-backend-url.com/user-api/user`
   - Should return proper API responses

## Common Issues and Solutions

### Issue: "Cannot GET /"
**Solution**: ✅ Fixed - Added root route handler

### Issue: Database connection failed
**Solution**: Check your `DBURL` environment variable and ensure MongoDB Atlas is accessible

### Issue: Port binding error
**Solution**: Use `process.env.PORT` (already implemented)

### Issue: CORS errors
**Solution**: ✅ Fixed - CORS is already configured

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Replace `your_username`, `your_password`, `your_cluster`, and `your_database_name` with your actual values
5. Add the connection string as `DBURL` environment variable

## Testing Locally

1. Create a `.env` file in the Server directory
2. Add your environment variables
3. Run: `npm run dev`
4. Test: `http://localhost:4000/` 