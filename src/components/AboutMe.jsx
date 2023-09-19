import "./AboutMe.css";
import blocks from "../../public/blocks.png";

function AboutMe() {
  return (
    <div className="AboutMeParent">
      <h1 className="abtMe">About Me</h1>
      <p className="mcp1">
        Hey, I am a self learned web developer. I specialize in full stack
        smartcontract development. Beyond this I have also worked with web2
        based projects.
      </p>

      <p className="mcp2">
        Currently I am involved with a startup called VaultxLedger. We at
        VaultxLedger design and develop inovative web3 based apps to
        revolutionalize the world.
      </p>

      <p className="mcp3">
        Beyomd my work life, I love riding bikes. I own a Royal Enfield
        Interceptor 650 that I ocationally ride. I also hava a strong liking \
        towards science fiction and real world documentaries.
      </p>
      <img className="blocks" src={blocks} />
    </div>
  );
}

export default AboutMe;
