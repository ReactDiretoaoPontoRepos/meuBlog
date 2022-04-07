import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Post title="Meu primeiro Post" />
        <Post title="Meu Segundo Post" />
      </main>
      <Footer />
    </>
  );
};
export default App;
