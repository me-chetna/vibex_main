export default function Home() {
  return (
    <div className="flex flex-col items-center flex-1 text-center pt-12">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Welcome to
          <span className="ml-4 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            VibeX Hub
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your central hub for innovation, connection, and challenge. Dive into
          the future of collaboration.
        </p>
      </div>
    </div>
  );
}
