import classes from "./Description.module.scss";

const description = () => {
  return (
    <div className={classes.container}>
      <div>
        <h3>We build dream of people & companies</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          facere praesentium placeat soluta enim facilis, aperiam reprehenderit
          natus, culpa ipsum aspernatur ipsa officia quidem laudantium cum
          voluptatem consectetur voluptatibus doloribus dolorum numquam adipisci
          dignissimos. Ut maxime quas laboriosam quo aut ex sint modi obcaecati
          sit itaque optio quia hic atque molestias soluta, id, vel commodi,
          veniam quisquam tempora laborum ea explicabo? Suscipit neque in
          tempore repellat magnam, earum asperiores quibusdam ratione
          perspiciatis unde? Dolorum, inventore nostrum reprehenderit porro
          possimus dolor suscipit ullam ea recusandae !
        </p>

        <h5>Read More</h5>
      </div>
      
      <div className={classes.image}>
        <img src="1.jpg" alt="" />
      </div>
    </div>
  );
};

export default description;
