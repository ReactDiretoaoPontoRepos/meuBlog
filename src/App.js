import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Post title="Meu primeiro Post" readingTime="1">
          sou o conteudo do children desse objeto
        </Post>

        <Post title="Meu Segundo Post" readingTime="10">
          <div>
            <p>
              Eu sou o conteúdo que vem de um Childreen da prop do componente
              Post
            </p>
          </div>
        </Post>
      </main>
      <Footer />
    </>
  );
};
export default App;
