export default function LearningMakingHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFDF7] gap-8">
      <img
        src="/loreley-logo.png"
        alt="Loreley"
        className="max-w-[12rem] w-full h-auto"
      />
      <h1
        className="text-5xl md:text-6xl font-light tracking-wide"
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: '#1E3A5F',
          fontStyle: 'italic'
        }}
      >
        Learning & Making
      </h1>
      <p
        className="text-xl md:text-2xl font-light tracking-wide"
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: '#1E3A5F',
        }}
      >
        By Loreley Wells
      </p>
    </div>
  )
}
