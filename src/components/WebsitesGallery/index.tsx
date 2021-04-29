import React from 'react';

// import { format, parseISO } from 'date-fns';
import WebsiteCard from './WebsiteCard';
import { Container } from './styles';

interface Website {
  id?: string;
  customer?: string;
  plan?: string;
  sector?: string;
  website_address?: string;
  thumbnail?: string;
  amount_paid?: string;
  salesman?: string;
  publish_date?: string;
}

interface WebsitesGalleryProps {
  websites: Website[][];
  className?: string;
}

const WebsitesGallery: React.FC<WebsitesGalleryProps> = ({
  websites,
  className = '',
  children,
}) => {
  return (
    <>
      {websites.map((website, index) => {
        return (
          <Container key={index} className={className}>
            {website.map((item, i) => (
              <WebsiteCard key={i} website={item}></WebsiteCard>
            ))}
          </Container>
        );
      })}
    </>
  );
};

export default WebsitesGallery;
