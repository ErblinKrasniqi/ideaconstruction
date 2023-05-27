import classes from "./Background.module.scss";

const Background = () => {
  return (
    <div className={classes.background}>
      <img src="/1.jpg" alt="" />
      <div>
        <h3>We are leaders</h3>
        <h1>MODERN CONSTRUCTION</h1>
        <p>
          Lorem, ipsum dolor Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
        <button>KONTAKTO</button>
      </div>
    </div>
  );
};

export default Background;
