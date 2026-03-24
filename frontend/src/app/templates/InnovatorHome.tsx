import Image from 'next/image'

export default function InnovatorHome() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Image
        src="/projects/innovator/logo.png"
        alt="Innovator Systems"
        width={480}
        height={96}
        style={{ width: 'auto', height: 'auto', maxWidth: '80vw' }}
        priority
      />
    </div>
  )
}
