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

function resolveLink(link) {
  const urlLinktypes = [
    'PRISMIC__ExternalLink',
    'PRISMIC__ImageLink',
    'PRISMIC__FileLink'
  ];

  if (!link) {
    return '';
  }

  return urlLinktypes.includes(link.__typename)
    ? link.url
    : resolveDocument(link._meta || link);
}

module.exports = {
  resolveDocument,
  resolveLink
};
