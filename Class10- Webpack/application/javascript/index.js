//app/javascript/index.js
require('./another.js');
require('./class.js');
// require("style-loader!css-loader!../css/app.css")
require('../css/app.css');
import moment from 'moment';
console.log(moment().add(7,'days').format());
