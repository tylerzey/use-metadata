import { useEffect } from 'react';

type Metadata = {
  title: string,
  description: string,
  image: string,
}

const setOGProperty = (property: string, value: string) => {
  let link = document.createElement('meta');
  link.setAttribute('property', property);
  link.content = value;
  document.getElementsByTagName('head')[0].appendChild(link);
}

export const useMetadata = ({ title = "", description = "", image = "" }: Metadata) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const descriptionsArray = document.getElementsByName('description')
    for (let i = 0; i < descriptionsArray.length; i++) {
      descriptionsArray[i].setAttribute('content', description)
    }

    let hasOgtitle = false;
    let hasOGDescription = false;
    let hasOGImage = false;

    const metaElements = document.getElementsByTagName("META");

    for (let i = 0; i < metaElements.length; i++) {
      for (let z = 0; z < metaElements[i].attributes.length; z++) {
        const { nodeName, nodeValue } = metaElements[i].attributes[z];
        if (title && nodeName === 'property' && nodeValue === 'og:title') {
          metaElements[i].setAttribute('og:title', title)
          hasOgtitle = true;
        } else if (description && nodeName === 'property' && nodeValue === 'og:description') {
          metaElements[i].setAttribute('og:description', description)
          hasOGDescription = true;
        } else if (image && nodeName === 'property' && nodeValue === 'og:image') {
          metaElements[i].setAttribute('og:image', image)
          hasOGImage = true
        }
      }
    }

    if (title && !hasOgtitle) setOGProperty('og:title', title)
    if (description && !hasOGDescription) setOGProperty('og:description', description)
    if (image && !hasOGImage) setOGProperty('og:image', image)

  }, [title, description, image])
};
