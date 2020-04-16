// bitfields
let bitfield = 0b0000;
const FLAG_A = 0b0001;
const FLAG_B = 0b0010;
const FLAG_C = 0b0100;
const FLAG_D = 0b1000;

checkForFlags();
console.log('Set FLAG_A');
setFlag(FLAG_A);
checkForFlags();
console.log('Unset FLAG_A');
unsetFlag(FLAG_A);
checkForFlags();

function checkForFlags() {
  console.log ('FLAG_A: ', !!(FLAG_A & bitfield))
  console.log ('FLAG_B: ', !!(FLAG_B & bitfield))
  console.log ('FLAG_C: ', !!(FLAG_C & bitfield))
  console.log ('FLAG_D: ', !!(FLAG_D & bitfield))
}
function setFlag(flag) {
  bitfield += flag;
}
function unsetFlag(flag) {
  bitfield -= flag;
}
