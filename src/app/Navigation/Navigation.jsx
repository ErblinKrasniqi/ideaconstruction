import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <h1>Idea construction</h1>
      </div>
      <div className={classes.menu}>
        <h5>HOME</h5>
        <h5>RRETH NESH</h5>
        <h5>SERVISET</h5>
        <h5>BLOG</h5>
        <h5>CONTACT</h5>
        <button>kontakto</button>
      </div>
      <div></div>
    </nav>
  );
};

export default Navigation;
