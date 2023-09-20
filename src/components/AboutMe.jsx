import "../css/universal.css";
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
        Beyomd my work life, I am a huge fan of science fiction as well as real
        world documentaries. Additionally I like playing minecraft and many
        other open-world game.
      </p>
      <img className="blocks" src={blocks} />
    </div>
  );
}

export default AboutMe;
