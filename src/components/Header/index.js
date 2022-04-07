import "./styles.css";
import mainImage from "../../assets/img/Header/banner.jpeg";

const Header = () => {
  return (
    <header>
      <h1>Meu Blog</h1>
      <img src={mainImage} alt="Imagem de MacBook Pro" />
    </header>
  );
};

export default Header;
