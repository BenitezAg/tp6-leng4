import Header from "./components/Header";
import Footer from "./components/Footer";
import BlobDemo from "./components/BlobDemo";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <BlobDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
