import makeButton from './button';
import { footer } from './footer';
import { makeColorStyle } from './button-styles';

const button = makeButton('Yay a button!!!! ');
button.style = makeColorStyle('gold');
document.body.appendChild(button);
document.body.appendChild(footer);
