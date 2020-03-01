module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        teamName.push(members[i].trim().toUpperCase()[0]);
      }
    }
    return teamName.sort().join("");
  }
  return false;
};