import "./pagestyle.css";
import "./background.css";
import "./Animate.css";

export default function Home() {
  return (
    <div className="Home-page">
      <center>
        <br/>
        <h5 id="background">
          <b>
            {" "}
            <i>NS BANK</i>
          </b>
        </h5>

        <h3 className="animate-charcter"> Oh, hello... Welcome to NSB!</h3>
        <img
          src="https://cdn.dribbble.com/users/370956/screenshots/2219534/media/4ec039ffd633d30b7a1704999a409c3d.gif"
          alt="#"
          width="30%"
        ></img>

        <marquee>
          <h5>To get rich, have to be making money while you're asleep</h5>
        </marquee>
      </center>
    </div>
  );
}
