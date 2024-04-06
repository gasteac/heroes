import { Link } from "react-router-dom";
import "../../../src/styles.css";

export const HeroesPage = () => {
  return (
    <>
      <div className="homePage ">
        <h1 className=" m-3 animate__animated animate__slideInDown animate__faster">
          Choose your favorite publisher
        </h1>

        <div className="d-flex">
          <Link to="dc">
            <div className="p-1 tarjeta animate__animated animate__fadeInLeft animate__faster">
              <img loading="lazy" src="/heroes/dc-batman.jpg" />
            </div>
          </Link>
          <Link to="marvel">
            <div className="p-1 tarjeta animate__animated animate__fadeInRight animate__faster mx-5">
              <img src="/heroes/marvel-spider.jpg" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
