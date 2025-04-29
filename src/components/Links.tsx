import { ExternalLink } from "lucide-react"

export default function QuickLinks() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">TronCodes</h1>
          <p className="text-zinc-400">Connect with all my platforms</p>
        </div>

        <div className="space-y-4">
          <LinkCard
            title="TronCodes"
            url="https://troncodes.in/"
            description="Portfolio"
            logoPath="/logos/troncodes.png"
          />

          <LinkCard
            title="AiBro"
            url="https://theaibro.com/"
            description="AI Solutions for Modern Businesses"
            logoPath="/logos/aibro.png"
          />

          <LinkCard
            title="TrenAI"
            url="https://thetrenai.com/"
            description="Streamline your productivity with AI"
            logoPath="/logos/trenai.png"
          />
        </div>

        <footer className="mt-12 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} TronCodes</p>
        </footer>
      </div>
    </div>
  )
}

interface LinkCardProps {
  title: string
  url: string
  description: string
  logoPath: string
}

function LinkCard({ title, url, description, logoPath }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-zinc-900 border border-zinc-800 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-600/20"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden">
          <img
            src={logoPath || "/placeholder.svg"}
            alt={`${title} logo`}
            width={48}
            height={48}
            className="object-cover"
            onError={(e) => {
              // Fallback for missing images
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=48&width=48"
            }}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-lg">{title}</h2>
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>
        <ExternalLink className="h-5 w-5" />
      </div>
    </a>
  )
}
