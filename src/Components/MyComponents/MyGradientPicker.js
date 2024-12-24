import { useState } from 'react';
import { GradientPicker } from '@wordpress/components';

const MyGradientPicker = () => {
  const [ gradient, setGradient ] = useState( null );
//   console.log(gradient);

  return (
    <GradientPicker
      value={ gradient }
      onChange={ ( currentGradient ) => setGradient( currentGradient ) }
      gradients={ [
        {
          name: 'JShine',
          gradient:
            'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
          slug: 'jshine',
        },
        {
          name: 'Moonlit Asteroid',
          gradient:
            'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
          slug: 'moonlit-asteroid',
        },
        {
          name: 'Rastafarie',
          gradient:
            'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
          slug: 'rastafari',
        },
      ] }
    />
  );
};
export default MyGradientPicker;