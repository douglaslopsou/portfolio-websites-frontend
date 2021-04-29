import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 5px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 5px 5px rgba(0, 0, 0, 0.18);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.12);
  }

  a {
    text-decoration: none;

    img {
      width: 100%;
      max-width: 350px;
      border-radius: 5px 5px 0 0;
    }
  }

  margin-top: 20px;
`;

export const Details = styled.div`
  padding: 30px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #3d3d4d;
  margin-bottom: 20px;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  justify-content: left;
`;

export const SubTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #3d3d4d;
  margin-right: 5px;
`;

export const Information = styled.div`
  font-size: 17px;
  font-weight: 300;
  color: #3d3d4d;
  float: left;
`;

export const Plan = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #ec7910;
  float: right;
  position: relative;
  padding: 5px;
  margin-bottom: -50px;
  z-index: 10;
  border-radius: 0px 4px 0px 0px;
`;
