# Character Forge 🎭

An AI-powered character generation platform that creates detailed, unique characters for stories, games, and creative projects. Built with Next.js and powered by Google's Generative AI.

![Character Forge Demo](https://via.placeholder.com/800x400/9333ea/ffffff?text=Character+Forge+Demo)

## ✨ Features

- 🎭 **Character Types** - Fantasy Hero, Modern Professional, Sci-Fi Explorer, Mystery Detective, and more
- 🧠 **Personality Archetypes** - Hero, Mentor, Rebel, Explorer, Creator, Caregiver, Jester, Sage
- 📊 **Detail Levels** - Basic, Detailed, or Comprehensive character profiles
- 🤖 **AI-Powered Generation** - Leverages Google's Gemini 2.5 Flash model
- 📱 **Responsive Design** - Works beautifully on desktop and mobile
- 💾 **Auto-Save** - Form data persists between sessions using localStorage
- 📋 **Easy Sharing** - Copy character data with one click
- 🎨 **Beautiful UI** - Modern, clean interface with intuitive navigation

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/YOUR-USERNAME/character-forge.git
cd character-forge
npm install
```

### 2. Environment Setup

Get your Google AI API key:
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Add it to `.env.local`:

```env
GOOGLE_API_KEY=your_google_ai_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start creating characters!

## 📖 Usage

1. **Select Character Type** - Choose from Fantasy Hero, Modern Professional, etc.
2. **Pick Personality Archetype** - Select the core personality type
3. **Set Detail Level** - Choose how comprehensive you want the character
4. **Add Custom Context** - Provide any specific details or requirements
5. **Generate!** - Let AI create your unique character
6. **Explore & Copy** - Review the detailed profile and copy sections you like

## 🎮 Character Types Available

| Type | Description | Perfect For |
|------|-------------|-------------|
| 🗡️ Fantasy Hero | Brave warriors and adventurers | D&D campaigns, fantasy novels |
| 💼 Modern Professional | Contemporary workplace characters | Modern fiction, business stories |
| 🚀 Sci-Fi Explorer | Futuristic space travelers | Space operas, cyberpunk stories |
| 🔍 Mystery Detective | Investigative problem solvers | Crime novels, detective stories |
| 👤 Everyday Person | Relatable, ordinary people | Literary fiction, slice-of-life |
| 🎨 Creative Artist | Artistic and creative souls | Romance, coming-of-age stories |

## 🧠 Personality Archetypes

- **Hero** - Courageous leaders and champions
- **Mentor** - Wise guides and teachers
- **Rebel** - Independent rule-breakers
- **Explorer** - Curious adventurers
- **Creator** - Innovative builders
- **Caregiver** - Nurturing protectors
- **Jester** - Playful entertainers
- **Sage** - Knowledge seekers

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Generative AI (Gemini 2.5 Flash)
- **Storage**: localStorage for form persistence
- **Validation**: Zod for API validation
- **Icons**: Heroicons

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/character-forge)

1. Click the deploy button above
2. Connect your GitHub account
3. Add your `GOOGLE_API_KEY` environment variable
4. Deploy!

### Manual Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for various platforms.

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/generate/   # Character generation API
│   ├── generate/       # Character builder page
│   └── about/          # About page
├── components/         # React components
│   ├── CharacterForm.tsx
│   ├── CharacterDisplay.tsx
│   └── Navigation.tsx
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── types/              # TypeScript type definitions
│   └── character.ts
└── utils/              # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Generative AI](https://ai.google.dev/) for the powerful language models
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling system
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](https://github.com/YOUR-USERNAME/character-forge/issues) page
2. Create a new issue if your question isn't answered
3. For urgent matters, reach out via email

---

**Built with ❤️ for storytellers, game masters, and creative minds everywhere.**