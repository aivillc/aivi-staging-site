# GitHub Copilot Instructions

This file contains instructions that GitHub Copilot will follow when working in this workspace.

## Project-Specific Guidelines

### Deployment Workflow
- Always commit changes with descriptive messages before deploying
- Push to origin/master before running `vercel --prod`
- Test locally first when possible before production deployment

### Code Style & Conventions
- Use TypeScript for all new files
- Follow the TRON theme: purple (#8b5cf6) to orange (#ff6b35) gradients
- Use Tailwind CSS for styling
- Add console.log statements with emoji prefixes (e.g., 🤖 for ChatBot)

### PowerShell Commands
- Use semicolons (;) to chain commands on a single line
- Use `Invoke-RestMethod` for API calls instead of curl
- Use `ConvertTo-Json` for JSON formatting in output

### API Endpoints
- Production URL: https://aivistagingsite.vercel.app
- Messages API: POST/GET /api/chat/messages
- Response API: POST /api/chat/respond
- Debug API: GET /api/chat/debug

### Known Issues & Limitations
- Vercel serverless functions don't share memory reliably between different route files
- In-memory storage resets on cold starts
- For production reliability, consider implementing Redis/Vercel KV

### Version Control
- Tag important versions (e.g., v1.0.2, v1.0.3)
- Use descriptive commit messages
- Document breaking changes

## Custom Instructions Examples

Everytime you make some code changes, you need to update the changes-made.txt file to log what has been changed including the prompt i inputted. 
Every 2 hours you are going to ask me whether i want this current version created as a new version. Going up by 0.0.1 for minor changes, 0.1.0 for moderate changes, and 1.0.0 for major changes. We are currently on "1.0.8" (update this when new versions are created).

### Example: Always run tests before deployment
<!-- When deploying, always run: npm test -->

### Example: Specific file handling
<!-- When editing ChatBot.tsx, always maintain the localStorage caching logic -->

### Example: Security reminders
<!-- Never commit API keys or sensitive credentials -->

### Example: Documentation
<!-- Update README.md when adding new features -->

---

**Note:** Edit this file to add your own instructions that Copilot should follow.
