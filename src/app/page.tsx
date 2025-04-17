import Game from '@/components/Game';

export default function Home() {
  return (
    <main>
      <h1>Dixit Scoreboard</h1>
      <div className="rules">
        <p>Track scores for your Dixit games with ease. Dixit is a storytelling game where players use beautifully
          illustrated cards to express themselves and guess others&#39; stories. The goal is to earn points by being
          clever, creative, and intuitive.</p><br/>
        <p>The rules of the game can be found <a href="https://cdn.1j1ju.com/medias/8f/03/3d-dixit-rulebook.pdf"
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 style={{ textDecoration: "underline" }}>here</a>.</p>
      </div>

      <Game/>
    </main>
  );
}
