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

interface WebsiteCardProps {
  customer?: string;
  plan?: string;
  sector?: string;
  websiteAddress?: string;
  thumbnail?: string;
  amountPaid?: string;
  salesman?: string;
  publishDate: string | undefined;
  className?: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({
  customer,
  plan,
  sector,
  websiteAddress,
  thumbnail,
  amountPaid,
  salesman,
  publishDate,
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
      <a href={websiteAddress} target="_blank" rel="noopener noreferrer">
        <Plan>{plan}</Plan>
        <img src={thumbnail} alt="Thumbnail Site" />

        <Details>
          <Title>{customer}</Title>

          <SubTitleContainer>
            <SubTitle>Nicho: </SubTitle>
            <Information>{sector}</Information>
          </SubTitleContainer>

          <SubTitleContainer>
            <SubTitle>Vendedor: </SubTitle>
            <Information>{salesman}</Information>
          </SubTitleContainer>

          <SubTitleContainer>
            <SubTitle>Valor: </SubTitle>
            <Information>{amountPaid}</Information>
          </SubTitleContainer>

          <SubTitleContainer>
            <SubTitle>Data da Publicação: </SubTitle>
            <Information>{publishDate}</Information>
          </SubTitleContainer>
        </Details>
      </a>
    </Container>
  );
};

export default WebsiteCard;
