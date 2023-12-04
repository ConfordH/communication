// communication-app-frontend/src/components/features/Home.js

export function Header({ showForm, setShowForm }) {
  const appTitle = "Comms";

  return (
    <header className="header">
      <div className="logo">
        <img src="BuntuLabs-03.jpg" height="68" width="68" alt="Buntu Labs" />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Start Chat" : "Search Chats"}
      </button>
    </header>
  );
}
export default Home;
