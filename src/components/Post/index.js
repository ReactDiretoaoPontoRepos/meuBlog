import "./styles.css";

const Post = (props) => {
  return (
    <div>
      <article>
        <h2>{props.title}</h2>

        <small>
          Leia em {props.readingTime}{" "}
          {props.readingTime === "1" ? "minuto" : "minutos"}{" "}
        </small>

        {props.children}
      </article>
    </div>
  );
};

export default Post;
