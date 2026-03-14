import { Metadata } from 'next'
import GrowthClawPage from '@projects/martinwells/growthclaw/GrowthClawPage'

export const metadata: Metadata = {
  title: 'OpenClaw Marketing — Your AI Marketing Team | Martin Wells',
  description: 'OpenClaw Marketing deploys and manages AI marketing agent teams for your business. 7 AI agents, setup in 48 hours, starting from $300/agent/month.',
  openGraph: {
    type: 'website',
    title: 'OpenClaw Marketing — Your AI Marketing Team',
    description: 'OpenClaw Marketing deploys and manages AI marketing agent teams for your business. 7 AI agents, setup in 48 hours, starting from $300/agent/month.',
    url: 'https://martinwells.com/openclaw-marketing',
    siteName: 'Martin Wells',
  },
}

export default function GrowthClawRoute() {
  return <GrowthClawPage />
}
