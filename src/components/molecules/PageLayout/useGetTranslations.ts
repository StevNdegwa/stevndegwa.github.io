import { useStaticQuery, graphql } from "gatsby";

export default function useGetTranslations() {
  const { allJson: { edges } } = useStaticQuery(
    graphql`
      query {
        allJson {
          edges {
            node {
              translations {
                locale
                messages {
                  my_name
                  I_am
                  what_i_offer
                  usability
                  responsiveness
                  insightful
                  thoughtful
                  accessibility
                  data_representation
                  test_driven
                  lets_talk
                  my_skills
                  I_need
                  web_design
                  web_dev
                  data_viz
                  full_name
                  email
                  message
                  send_message
                  send_email
                  badges_and_certs
                }
              }
              languages {
                ENGLISH
                GERMAN
              }
            }
          }
        }
      }
    `);

  const { node: { translations, languages } } = edges.find((edge: any) => Boolean(edge.node.languages))

  return { translations, languages };
}