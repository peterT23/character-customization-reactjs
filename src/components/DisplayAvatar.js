export default function DisplayAvatar({ avatar, handleRandomize }) {
  const {
    body,
    clothes1,
    clothes2,
    clothes3,
    eyebrows,
    eyes,
    facialHair,
    hair,
    mouths,
    noses,
    earrings,
    glasses,
    hats,
    neckwear,
  } = avatar;

  return (
    <div className="avatar-gr">
      <div className="app-avatar-gr">
        <img src={body} alt="" style={{ zIndex: 0 }} />
        <img src={clothes1} alt="" style={{ zIndex: 1 }} />
        <img src={clothes2} alt="" style={{ zIndex: 2 }} />
        <img src={clothes3} alt="" style={{ zIndex: 3 }} />
        <img src={eyebrows} alt="" style={{ zIndex: 3 }} />
        <img src={eyes} alt="" style={{ zIndex: 3 }} />
        <img src={facialHair} alt="" style={{ zIndex: 5 }} />
        <img src={hair} alt="" style={{ zIndex: 6 }} />
        <img src={mouths} alt="" style={{ zIndex: 4 }} />
        <img src={noses} alt="" style={{ zIndex: 4 }} />
        <img src={earrings} alt="" style={{ zIndex: 5 }} />
        <img src={glasses} alt="" style={{ zIndex: 6 }} />
        <img src={hats} alt="" style={{ zIndex: 7 }} />
        <img src={neckwear} alt="" style={{ zIndex: 5 }} />
      </div>
      <div className="randomize">
        <button onClick={handleRandomize}>Randomize</button>
      </div>
    </div>
  );
}
