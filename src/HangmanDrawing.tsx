const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '100px',
      right: '-10px',
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '130px',
      right: '-0px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '130px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '180px',
      right: '-10px',
      rotate: '300deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '180px',
      right: '-90px',
      rotate: '-300deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  guessCount: number;
};

export default function HangmanDrawing({ guessCount }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }} className="mt-6">
      {BODY_PARTS.slice(0, guessCount)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          left: '200px',
        }}
      />
      <div style={{ height: '10px', width: '200px', background: 'black' }} />
      <div style={{ height: '400px', width: '10px', background: 'black' }} />
      <div
        style={{
          height: '10px',
          width: '250px',
          background: 'black',
          marginLeft: '-120px',
        }}
      />
    </div>
  );
}
