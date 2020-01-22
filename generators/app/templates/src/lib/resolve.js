function resolveDocument({ type, uid, isBroken }) {
  if (isBroken || !type) {
    return null;
  }

  switch (type) {
    case 'home':
      return '/';
    default:
      return `/${uid}`;
  }
}

function resolveTypename(typename) {
  return typename.replace(/PRISMIC_/, '');
}

function resolveLink(link) {
  const urlLinktypes = ['_ExternalLink', '_ImageLink', '_FileLink'];

  if (!link) {
    return '';
  }

  return link.__typename &&
    urlLinktypes.includes(resolveTypename(link.__typename))
    ? link.url
    : resolveDocument(link._meta || link);
}

module.exports = {
  resolveTypename,
  resolveDocument,
  resolveLink
};
