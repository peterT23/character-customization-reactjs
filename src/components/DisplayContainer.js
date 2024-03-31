import DisplayAvatar from "./DisplayAvatar";
import ImageList from "./ImageList";
import { useEffect, useState } from "react";
import { imageData } from "./ImageData";

const initialAvatar = {
  body: "./character/body/1.png",
  clothes1: "./character/clothes/layer_1/1.png",
  clothes2: "./character/clothes/layer_2/1.png",
  clothes3: "./character/clothes/layer_3/1.png",
  eyebrows: "./character/eyebrows/1.png",
  eyes: "./character/eyes/1.png",
  facialHair: "./character/facial_hair/1.png",
  hair: "./character/hair/1.png",
  mouths: "./character/mouths/1.png",
  noses: "./character/noses/1.png",
};

export default function DisplayContainer() {
  const [avatar, setAvatar] = useState(initialAvatar);

  function handleRandomize() {
    const randomAvatarValue = Object.keys(imageData).map((name) => {
      const randomValue = Math.floor(Math.random() * imageData[name].total + 1);
      const newLinkAvatar = `${imageData[name].link}/${randomValue}.png`;
      setAvatar((avatar) => {
        avatar[name] = newLinkAvatar;
        return { ...avatar };
      });
      return { newLinkAvatar };
    });
    console.log("randomAvatarvalue", randomAvatarValue);
  }

  useEffect(() => {
    handleRandomize();
  }, []);

  return (
    <div className="app-display-container">
      <DisplayAvatar avatar={avatar} handleRandomize={handleRandomize} />
      <div>
        <ImageList name="body" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="clothes1" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="clothes2" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="clothes3" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="eyebrows" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="eyes" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="facialHair" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="hair" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="mouths" setAvatar={setAvatar} avatarObj={avatar} />
        <ImageList name="noses" setAvatar={setAvatar} avatarObj={avatar} />
      </div>
    </div>
  );
}
