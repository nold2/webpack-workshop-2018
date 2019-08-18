import nav from './nav';
import { top, bottom } from './footer';
import getButton from './button';
import { makeColorStyle } from './button-styles';

console.log(nav(), top, bottom, getButton('Submit'), makeColorStyle('Purple'));
