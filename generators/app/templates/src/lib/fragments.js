import { graphql } from 'gatsby';
import 'array-flat-polyfill';

export const link = graphql`
  fragment Link on PRISMIC__Linkable {
    ... on PRISMIC__Document {
      _meta {
        uid
        type
      }
    }
    ... on PRISMIC__ExternalLink {
      url
    }
    ... on PRISMIC__ImageLink {
      url
    }
    ... on PRISMIC__FileLink {
      url
    }
  }
`;


export function withFragments(PageComponent) {
  PageComponent.fragments = [link].flat();
  return PageComponent;
}
