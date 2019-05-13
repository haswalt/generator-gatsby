exports.resolveDocument = ({ type, uid, isBroken }) => {
  if (isBroken) {
    return null;
  }

  switch (type) {
    case 'home':
      return `/`;
    default:
      return `/${uid}`;
  }
};
