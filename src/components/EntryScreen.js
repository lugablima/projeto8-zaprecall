export default function EntryScreen({ setScreen }) {
    return (
        <div className="entry-screen">
            <img src="./img/logo.svg" alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen("HomeScreen")}>Iniciar Recall!</button>
        </div>
    );
}