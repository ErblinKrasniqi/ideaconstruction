import "../styles/_app.scss";
import Navigation from "./Navigation/Navigation";
import Background from "./Navigation/Background";
import Description from "./Description/Description";
import Modules from "./Modules/Modules";
import Gallery from "./Gallery/Gallery";
import { Fragment } from "react";

export default function page() {
  return (
    <Fragment>
      <Navigation />
      <Background />
      <Description />
      <Modules />
      <Gallery />
    </Fragment>
  );
}
