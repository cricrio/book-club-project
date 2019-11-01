module.exports = {
  mini: ({ firstname, surname }) => `${firstname} ${surname[0].toUpperCase()}`,
  full: ({ firstname, surname }) => `${firstname} ${surname}`
};
