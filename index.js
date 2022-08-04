class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1)
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  };

  static titleize(string) {
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let separateString = string.split(" ")
    let afterCap = [this.capitalize(separateString[0])]
    for (let i = 1; i < separateString.length; i++) {
      if (noCap.includes(separateString[i])) {
        afterCap.push(separateString[i])
      } else {
        afterCap.push(this.capitalize(separateString[i]))
      };
    };
    return afterCap.join(" ")
  };

};