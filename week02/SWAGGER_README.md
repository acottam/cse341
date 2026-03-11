# Swagger API Documentation

## Setup Complete

Swagger documentation has been added to your Temple API project.

## How to Use

1. **Generate Swagger Documentation** (already done, but to regenerate):
   ```bash
   npm run swagger
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Access Swagger UI**:
   Open your browser and navigate to:
   ```
   http://localhost:8080/api-docs
   ```

## API Endpoints Documented

### Temples
- **GET /temples/** - Get all temples (requires apiKey header)
- **GET /temples/:temple_id** - Get a single temple by ID (requires apiKey header)
- **POST /temples/** - Create a new temple

## Authentication

Most endpoints require an `apiKey` header for authentication. Add it in the Swagger UI by clicking "Authorize" or include it in your request headers.

## Files Created/Modified

- `swagger.js` - Swagger configuration and generator
- `swagger.json` - Generated Swagger documentation
- `index.js` - Updated to include Swagger UI route
- `routes/temple.js` - Added Swagger annotations
- `package.json` - Added swagger script
