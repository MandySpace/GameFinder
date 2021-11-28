import ps from "./img/playstation.svg";
import xbox from "./img/xbox.svg";
import pc from "./img/steam.svg";
import nintendo from "./img/nintendo.svg";
import gamepad from "./img/gamepad.svg";
import apple from "./img/apple.svg";

import esrp1 from "./img/esrp1.svg";
import esrp2 from "./img/esrp2.svg";
import esrp3 from "./img/esrp3.svg";
import esrp4 from "./img/esrp4.svg";
import esrp5 from "./img/esrp5.svg";
import esrpnull from "./img/esrpnull.svg";

import star from "./img/star.png";

import playstationStore from "./img/playStation_store.png";
import xboxStore from "./img/xbox_store.svg";
import steam_store from "./img/steam_store.jpeg";

export const smallImage = (imagePath, size) => {
  const image = imagePath?.split("media/");
  image?.splice(1, 0, `media/resize/${size}/-/`);
  return image?.join("");
};

export const platformNameToSvg = (platform) => {
  switch (platform) {
    case "PlayStation":
      return ps;
    case "Xbox":
      return xbox;
    case "PC":
      return pc;
    case "Nintendo":
      return nintendo;
    case "Apple Macintosh":
      return apple;
    default:
      return gamepad;
  }
};

export const esrpRatingSvg = (esrpId) => {
  switch (esrpId) {
    case 1:
      return esrp1;
    case 2:
      return esrp2;
    case 3:
      return esrp3;
    case 4:
      return esrp4;
    case 5:
      return esrp5;
    default:
      return esrpnull;
  }
};

export const ratingToStars = (rating) => {
  const arr = [];
  const diffPercentage = Math.floor((rating - Math.floor(rating)) * 100);

  for (let i = Math.floor(rating); i > 0; i--) {
    arr.push(<img src={star} alt="stars" />);
  }
  if (diffPercentage > 0) {
    arr.push(
      <img
        src={star}
        alt="stars"
        style={{
          clipPath: `polygon(0 0, ${diffPercentage}% 0, ${diffPercentage}% 100%, 0 100%)`,
        }}
      />
    );
  }
  return arr;
};

export const emptyStars = () => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(<img src={star} alt="dim star" style={{ opacity: 0.3 }} />);
  }
  return arr;
};

export const storeImages = (store) => {
  switch (store) {
    case "PlayStation Store":
      return playstationStore;
    case "Xbox Store":
      return xboxStore;
    case "Steam":
      return steam_store;
    default:
      return;
  }
};

export const reverseDate = (date) => {
  return date?.split("-").reverse().join("/");
};
