import React from 'react';

import { format, parseISO } from 'date-fns';
import {
  Container,
  Details,
  Title,
  SubTitle,
  SubTitleContainer,
  Plan,
  Information,
} from './styles';

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

interface WebsiteCardProps {
  website: Website;
  className?: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({
  website,
  className = '',
  children,
}) => {
  /* function formatDateToString(vDate: string | undefined): string {
    const parsedDate = parseISO(vDate);
    const formattedDate = format(parsedDate, 'MM/DD/YYYY');
    return formattedDate;
  }
  */

  return (
    <Container className={className}>
      {children}
      <a
        href={website.website_address}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Plan>{website.plan}</Plan>
        <img src={website.thumbnail} alt="Thumbnail Site" />

        <Details>
          <Title>{website.customer}</Title>

          <SubTitleContainer>
            <SubTitle>Nicho: </SubTitle>
            <Information>{website.sector}</Information>
          </SubTitleContainer>

          <SubTitleContainer>
            <SubTitle>Vendedor: </SubTitle>
            <Information>{website.salesman}</Information>
          </SubTitleContainer>

          <SubTitleContainer>
            <SubTitle>Valor: </SubTitle>
            <Information>{website.amount_paid}</Information>
          </SubTitleContainer>

          <SubTitleContainer>
            <SubTitle>Data da Publicação: </SubTitle>
            <Information>{website.publish_date}</Information>
          </SubTitleContainer>
        </Details>
      </a>
    </Container>
  );
};

export default WebsiteCard;
