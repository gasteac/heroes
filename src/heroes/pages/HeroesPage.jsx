import { Link } from "react-router-dom";
import "../../../src/styles.css";

export const HeroesPage = () => {
  return (
    <>
      <h1 className="mt-5 animate__animated animate__slideInDown animate__faster">
        Choose your destiny
      </h1>
      <hr />
      <div className="d-flex justify-content-between">
        <Link  to="marvel" >
          <div className="p-1 card animate__animated animate__fadeInLeft animate__faster">
            <h1
              style={{
                position: "absolute",
                top: "3%",
                left: "50%",
                fontWeight: "bold",
              }}>
              DC Comics
            </h1>
            <img className='tarjeta' 
            src={`https://github.com/gasteac/heros/blob/main/src/assets/heroes/dc-batman.jpg?raw=true`} />
          </div>
        </Link>
        <Link to="dc">
          <div className="p-1 card animate__animated animate__fadeInRight animate__faster">
            <h1
              style={{
                position: "absolute",
                top: "13%",
                left: "20%",
                fontWeight: "bold",
              }}>
              Marvel
            </h1>
            <img className='tarjeta' 
               src={`https://github.com/gasteac/heros/blob/main/src/assets/heroes/marvel-spider.jpg?raw=true`}/>
          </div>
        </Link>
      </div>
    </>
  );
};
