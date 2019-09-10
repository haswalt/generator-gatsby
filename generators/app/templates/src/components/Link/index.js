import { Link as GatsbyLink } from 'gatsby';
import React, { useEffect, useState } from 'react';

function isInternal(url) {
  const tester = document.createElement('a');

  tester.href = url;
  return !!url && tester.hostname === window.location.hostname;
}

/**
 * Link component
 * Anchor element that adapts to internal and external hrefs
 * @property {string} href Target of the link
 * @property {boolean} greedyActive Whether active state should be recursive
 */
export default function Link({
  href = '',
  greedyActive = false,
  children,
  className,
  ...attrs
}) {
  const [internal, setInternal] = useState(false),
    LinkElement = internal ? GatsbyLink : 'a',
    getActiveState = ({ isCurrent, isPartiallyCurrent }) => {
      const check = greedyActive ? isPartiallyCurrent : isCurrent;
      return { active: check.toString() };
    },
    hrefProp = internal ? { to: href } : { href };

  useEffect(() => {
    setInternal(isInternal(href));
  }, [href]);

  return (
    <LinkElement
      {...(!!href && hrefProp)}
      {...(internal && { getProps: getActiveState })}
      {...(!internal && { target: '_blank', rel: 'noopener noreferrer' })}
      className={className || ''}
      {...attrs}
    >
      {children}
    </LinkElement>
  );
}
