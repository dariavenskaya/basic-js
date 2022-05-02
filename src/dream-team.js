const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members != Array) 
  {return false}
else {
  let names = members.slice();
  let almostLetters = names.toString;
  let letters = almostLetters.charCodeAt(0);
  let teamName = letters.concat();
  return teamNames.toUpperCase;

}
}

module.exports = {
  createDreamTeam
};
