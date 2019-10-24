import { graphql } from 'gatsby';

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

export const image = [
  graphql`
    fragment ImageLarge on File {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `,
  graphql`
    fragment ImageMedium on File {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `,
  graphql`
    fragment ImageSmall on File {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `,
  graphql`
    fragment ImageThumbnail on File {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `
];
