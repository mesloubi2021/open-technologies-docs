import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/_pm-icons.css';
import Button from '../components/Shared/Button';
import {CallOut, Feature, Divider, SideXSide} from 'aether-marketing';

const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.grey_05};
  padding: 48px 80px;
    @media (max-width: 991px) {
        padding: 40px !important;
      }
    .hero-image {
        margin: 0px;
    }
    .img-frame {
        border-radius: ${(props) => props.theme.borderRadius.medium};
        border: 8px solid ${(props) => props.theme.colors.grey_20};// $grey_20
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.32);
    }
`

const HRStyles = styled.hr`
  border: 0;
  margin-top: 0;
  border-top: 1px solid ${(props) => props.theme.colors.grey_30};
  margin-bottom: 0;
`;

const callout = {
  title: "Collaborate with us",
divider: true,
body: [
  '<p class="subtitle">We welcome you to be a contributor to one of our 50 public GitHub repositories.</p>',
],
link: {
  buttonType: "secondary",
  text: "View our Github",
  src: "https://github.com/postman-open-technologies",
  target: "",
  id: "",
  gaCategory: "e",
  gaLabel: "",
  as: "a",
},
};

const tools  = {
  paddingTop: "",
  paddingBottom: "",
  divider: true,
  backgroundColor: "",
  title: "API Tools and Implementations",
  body: [
    "Providing a catalog of the tools available to service every stop along the API life cycle, including a mix of platform, third-party, and open-source solutions for teams.",
  ],
  items: [
    {
      imageSize: "icon",
      title: "API Gateways",
      subtitle: [],
      
      media: {
        src: "/assets/open-tech/postman-gateway.png",
        alt: "Postman API Gateways. Illustration.",
      },
      "link": {
        "src": "https://learning.postman.com/open-technologies/patterns/graphql",
        "text": "Read the doc",
        "target": ""
      }
    },
    {
      imageSize: "icon",
      title: "OpenApi-Linter",
      subtitle: [],
      
      media: {
        src:"/assets/open-tech/postman-open-api.png",
        alt: "Postman OpenAPI Linter. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Spectral",
      subtitle: [],
      
      media: {
        src: "/assets/open-tech/postman-log-checklist.png",
        alt: "Postman Spectral. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Collection Run Chrome Extension",
      subtitle: [],
      
      media: {
        src:"/assets/open-tech/postman-extension.png",
        alt: "Postman Collection Run Chrome Extension. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Blast",
      subtitle: [],
      
      media: {
        src: "/assets/open-tech/postman-application-performance.svg",
        alt: "Postman Blast. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Newman Trace",
      subtitle: [],
      
      media: {
        src: "/assets/open-tech/postman-newman.png",
        alt: "Postman Newman Trace. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "HTTPBin",
      subtitle: [],
      
      media: {
        src: "/assets/open-tech/postman-http-request.png",
        alt: "Postman HTTPBin. Illustration.",
      }
    },
  ],
};

const specifications = {
  paddingTop: "",
  paddingBottom: "",
  divider: true,
  backgroundColor: "",
  title: "API specifications",
  body: [
    "API specifications have evolved over the last decade to provide API providers and consumers with a machine readable way to descibe the surface area of the APIs being published and integrated with.",
  ],
  items: [
    {
      imageSize: "icon",
      title: "AsyncAPI",
      subtitle: [],
      
      media: {
        src: "/assets/open-tech/postman-async-api.png",
        alt: "Postman AsyncAPI. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "OpenAPI Initiative (OAI)",
      subtitle: [],
      
      media: {
        src:"/assets/open-tech/postman-open-api.png",
        alt: "Postman OpenAPI Initiative. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "GraphQL",
      subtitle: [],
      
      media: {
        src:"/assets/open-tech/postman-graphql.png",
        alt: "Postman GraphQL. Illustration.",
      },
      link: {
        text: "Read the doc",
        src: "X",
        target: "",
      },
    },
    {
      imageSize: "icon",
      title: "gRPC",
      subtitle: [],
      
      media: {
        src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgrpc.io%2Fimg%2Flogos%2Fgrpc-icon-color.png&f=1&nofb=1&ipt=295cbb615ec3d7629da68e94d6b83712030b68e87530c2e9fc8d2847c7a7e9f1&ipo=images",
        alt: "Postman gRPC. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Collection Format",
      subtitle: [],
      
      media: {
        src:"https://voyager.postman.com/icon/engineering-styleguide-icon-postman.svg",
        alt: "Postman Collection Format. Illustration.",
      },"link": {
          "src": "https://github.com/postman-open-technologies/collections",
          "text": "Read the doc",
          "target": ""
        }
    },
    {
      imageSize: "icon",
      title: "JSON Schema",
      subtitle: [],
      
      media: {
        src:"/assets/open-tech/postman-json-schema.png",
        alt: "Postman JSON Schema. Illustration.",
      }
    },
    {
      imageSize: "icon",
      title: "Spectral",
      subtitle: [],
      
      media: {
        src:"/assets/open-tech/postman-log-checklist.png",
        alt: "Postman Spectral. Illustration.",
      }
    },
  ],
};

const data = {
  
  "layout": "medium",
  "divider": false,
  "left": "media",
  "right": "text",
  "paddingBottom": "",
  "paddingTop": "",
  "backgroundColor": "",
  "textClassName": "",
  "textContainer": "",
  "headerTitle": "",
  "headerBody": [""],
  "SideXSideTextRight": true,
  "textPaddingBottomRight": "0px",
  "textPaddingTopRight": "0px", 
  "textTitleRight": "Read the blog post: How We're Protecting Your Postman API Keys in GitHub",
  "textSubtitleRight": "",
  "textBodyRight": [
    "<p>Developers contribute code to open source projects in GitHub every day; unfortunately, during this process sometimes security credentials are shared by accident. So Postman has implemented a new token-scanning service in GitHub that will send you a notification if you accidentally commit a Postman API key to a public repository. This gives you a chance to respond quickly before there's any unauthorized access your data.</p>"
  ],
  "linkRight": [
    {
      "type": "arrowLink",
      "text": "Read the Blog Post",
      "src": "https://blog.postman.com/how-were-protecting-your-postman-api-keys-in-github/",
      "target": "same-tab",
      "id": "read-blog-post",
      "gaCategory": "open-philosophy-page",
      "gaLabel": "read-blog-post"
    }
  ],
  "media": {
    "src": "https://voyager.postman.com/illustration/postman-security-illustration.svg",
    "alt": "Illustration of Postmanaut with lock. Illustration.",
    "shadow": false
  },
  "videoRight": {},
  "videoLeft": {},
  "iconList": {},
  "listTitle": ""
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Open Technology" slug="/" />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero" >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Open Technology</h1>
                  <p className="subtitle">
                  Open Tech is Postman's central instance for Open Source, whether it is using, contributing or creating Open Source software, specifications, libraries or other components, that the API industry relies on today or tomorrow. It consists of three operative pillars: Open Strategy, the Program Office and Developer Relations.
                  </p>
                  <Button
                    onClick={() => {
                      navigate("/specifications/collections/")
                    }} 
                    className="mb-5 secondary"
                  >
                    Explore the Docs
                  </Button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/postman-learning-center-documentation-illustration.svg"
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </HeroWrapper>
        </div>
        <div className="container">
        <Feature
        paddingTop={tools.paddingTop}
        paddingBottom={tools.paddingBottom}
        divider={tools.divider}
        title={tools.title}
        body={tools.body}
        media={tools.media}
        backgroundColor={tools.backgroundColor}
        items={tools.items}
        bodyLink={tools.bodyLink}
      />
          <Feature
        paddingTop={specifications.paddingTop}
        paddingBottom={specifications.paddingBottom}
        divider={specifications.divider}
        title={specifications.title}
        body={specifications.body}
        media={specifications.media}
        backgroundColor={specifications.backgroundColor}
        items={specifications.items}
        bodyLink={specifications.bodyLink}
      />
       
          <CallOut title={callout.title} textAlign="left"
          body={callout.body} link={callout.link}
           />
          
         <h2 className='my-5'>Form goes here</h2>
         <Divider />
         <SideXSide {...data} />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
