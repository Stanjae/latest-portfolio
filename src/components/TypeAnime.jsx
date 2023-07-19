import { TypeAnimation } from 'react-type-animation';
 
export const TypeAnime = () => {
  return (
    <TypeAnimation
      sequence={[
        'I Am a React + Django Full-Stack Developer', // Types 'One'
        1000, // Waits 1s
        'I am a Passionate Mautic Email Automation Marketer', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'I am a Creative Wordpress Developer', // Types 'Three' without deleting 'Two'
        /* () => {
          console.log('Sequence completed');
        }, */
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '18px', lineHeight:'30.6px', color:'#fff', display: 'inline-block' ,
    }}
    />
  );
};