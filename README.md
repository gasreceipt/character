# AI Content Generator

An intelligent content generation platform powered by Google's Vertex AI. Create high-quality content including blog posts, marketing copy, product descriptions, and more with the power of advanced AI models.

## Features

- 🤖 **AI-Powered Generation** - Leverages Google's Vertex AI (Gemini models)
- ✍️ **Multiple Content Types** - Blog posts, marketing copy, social media, technical docs
- 🎨 **Customizable Outputs** - Tone, style, length, and format control
- � **Real-time Generation** - Stream responses for immediate feedback
- 💾 **Content History** - Save and manage your generated content
- � **Secure & Private** - Your content stays secure with Google Cloud

## Setup Instructions

### 1. Google Cloud Setup

1. Create a Google Cloud Project
2. Enable the Vertex AI API
3. Set up authentication (choose one):
   
   **Option A: Service Account (Recommended for production)**
   ```bash
   # Create service account
   gcloud iam service-accounts create vertex-ai-user
   
   # Download service account key
   gcloud iam service-accounts keys create key.json \
     --iam-account=vertex-ai-user@YOUR-PROJECT-ID.iam.gserviceaccount.com
   
   # Grant necessary permissions
   gcloud projects add-iam-policy-binding YOUR-PROJECT-ID \
     --member="serviceAccount:vertex-ai-user@YOUR-PROJECT-ID.iam.gserviceaccount.com" \
     --role="roles/aiplatform.user"
   ```
   
   **Option B: Application Default Credentials (Easier for development)**
   ```bash
   gcloud auth application-default login
   ```

### 2. Environment Configuration

Update `.env.local` with your project details:

```env
GOOGLE_CLOUD_PROJECT_ID=your-actual-project-id
GOOGLE_APPLICATION_CREDENTIALS=./key.json  # If using service account
VERTEX_AI_LOCATION=us-central1
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

## Usage

1. **Navigate to the Generator** - Use the main interface to create content
2. **Choose Content Type** - Select from various templates (blog, marketing, etc.)
3. **Provide Context** - Give the AI context about what you want to create
4. **Generate** - Watch as AI creates your content in real-time
5. **Refine** - Edit prompts and regenerate until perfect
6. **Save** - Keep your best content in the history section

## Content Types Supported

- 📰 **Blog Posts** - SEO-optimized articles with proper structure
- 📢 **Marketing Copy** - Compelling sales and promotional content
- 📱 **Social Media** - Posts optimized for different platforms
- 📋 **Product Descriptions** - Detailed, persuasive product content
- 📧 **Email Campaigns** - Subject lines and email body content
- 🔧 **Technical Documentation** - Clear, structured technical content

## Security & Privacy

- All content generation happens through secure Google Cloud APIs
- No content is stored by default (optional local storage)
- Full control over your data and generation parameters

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 15** - React framework
- **Vertex AI** - Google's AI platform
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Markdown** - Content rendering

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Test with your own Google Cloud project
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
