import $ from 'jquery';
import './style.scss';

let seconds = 0;

const timer = () => {
  $('#main').text(`you have been on this page for ${seconds} seconds`);
  seconds += 1;
};

setInterval(timer, 1000);
