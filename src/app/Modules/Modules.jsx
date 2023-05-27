import classes from "./Modules.module.scss";

const Modules = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Services</h3>
        <h2>What do we do</h2>
      </div>
      <div className={classes.modules}>
        <div className={classes.module}>
          <div>
            <img src="/1.jpg" alt="" />
          </div>
          <div className={classes.description}>
            <img src="./house.svg" alt="" />
            <h1>Construcgtion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              perspiciatis cum suscipit sint eligendi et praesentium amet
              repellat debitis assumenda quidem odio veritatis velit consequatur
              optio eaque ex asperiores quos nihil mollitia rem? Aut eligendi
              laborum quibusdam molestiae nostrum vitae.
            </p>
            <h3>Read more</h3>
          </div>
        </div>
        <div className={classes.module}>
          <div>
            <img src="/1.jpg" alt="" />
          </div>
          <div className={classes.description}>
            <img src="./hamer.svg" alt="" />
            <h1>Construcgtion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              perspiciatis cum suscipit sint eligendi et praesentium amet
              repellat debitis assumenda quidem odio veritatis velit consequatur
              optio eaque ex asperiores quos nihil mollitia rem? Aut eligendi
              laborum quibusdam molestiae nostrum vitae.
            </p>
            <h3>Read more</h3>
          </div>
        </div>
        <div className={classes.module}>
          <div>
            <img src="/1.jpg" alt="" />
          </div>
          <div className={classes.description}>
            <img src="./engineer.svg" alt="" />
            <h1>Construcgtion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              perspiciatis cum suscipit sint eligendi et praesentium amet
              repellat debitis assumenda quidem odio veritatis velit consequatur
              optio eaque ex asperiores quos nihil mollitia rem? Aut eligendi
              laborum quibusdam molestiae nostrum vitae.
            </p>
            <h3>Read more</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modules;
