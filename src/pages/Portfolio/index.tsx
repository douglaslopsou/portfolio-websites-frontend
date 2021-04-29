import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
// import * as Yup from 'yup';
import { FiSearch } from 'react-icons/fi';
import { VscListSelection } from 'react-icons/vsc';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import WebsitesGallery from '../../components/WebsitesGallery';
import api from '../../services/api';

import { Container, Content, AnimationContainer } from './styles';

// const options = [
//   { value: 'landingpage', label: 'Landing Page' },
//   { value: 'prime', label: 'Prime' },
//   { value: 'personalizado', label: 'Personalizado' },
// ];

// const customStyles = {};

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

const Portfolio: React.FC = () => {
  const [websites, setWebsites] = useState<Website[][]>([]);

  useEffect(() => {
    api.get('websites/chunks').then((response) => {
      setWebsites(response.data);
    });
  }, []);

  // console.log(websites);

  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <img
              src={logoImg}
              width="350"
              style={{ marginLeft: '-28px' }}
              alt="Websites Explorer"
            />
            <h1>
              Explore os sites desenvolvidos <br />
              na Blueberry.
            </h1>
            <Form onSubmit={() => {}}>
              <Input name="search" icon={FiSearch} placeholder="https://..." />
              {/* <div>
                <Select
                  name="plan"
                  IsMulti
                  options={options}
                  styles={customStyles}
                />
              </div> */}
              <Input
                name="sector"
                icon={VscListSelection}
                placeholder="Setor"
              />
              <Button type="submit">Explorar</Button>
            </Form>
          </AnimationContainer>

          <AnimationContainer>
            <WebsitesGallery websites={websites}>
              {/* {websitesChunks.map((websitesChunk, index) => {
              return (
                <>
                  <WebsiteCard key={index} websites={websitesChunk} />
                </>
              );
            })} */}
            </WebsitesGallery>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};

export default Portfolio;
