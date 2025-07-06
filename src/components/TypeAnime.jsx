import { TypeAnimation } from 'react-type-animation';
 
export const TypeAnime = () => {
  return (
    <TypeAnimation
      sequence={[
        "HIRE ME NOW", // Types 'One'
        1000, // Waits 1s // Deletes 'One' and types 'Two' // Waits 2s
        'Lets build something Impactful together', // Types 'Three' without deleting 'Two'
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '18px', lineHeight:'30.6px', color:'#fff', display: 'inline-block' ,
    }}
    />
  );
};