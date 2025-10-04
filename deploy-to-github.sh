#!/bin/bash

# Connect your local repository to GitHub
# Replace YOUR-USERNAME with your actual GitHub username
echo "🔗 Connecting to GitHub..."
git remote add origin https://github.com/YOUR-USERNAME/character-forge.git

# Push your code to GitHub
echo "⬆️ Pushing code to GitHub..."
git push -u origin main

echo "✅ Successfully deployed to GitHub!"
echo "🌐 Your repository is now available at: https://github.com/YOUR-USERNAME/character-forge"

# Next steps
echo ""
echo "🚀 Next Steps for Live Deployment:"
echo "1. Go to vercel.com and sign in with GitHub"
echo "2. Import your character-forge repository"
echo "3. Add GOOGLE_API_KEY environment variable"
echo "4. Deploy!"
echo ""
echo "📚 See DEPLOYMENT.md for detailed instructions"