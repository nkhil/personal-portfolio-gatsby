import styled from 'styled-components';

const Container = styled.div`

  /* border: 5px solid red; */

  max-width: ${props => {
    if(props.width) return props.width;
    return '700px';
  }};

  margin: auto;

  padding-left: ${props => {
    if (props.full) return 0;
    return 'calc((100vw - 960px) / 2)';
  }};

  padding-right: ${props => {
    if (props.full) return 0;
    return 'calc((100vw - 960px) / 2)';
  }};

  padding-top: ${props => {
    if (props.fullVertical) return 0;
    if (props.small) return '15px';
    return '25px';
  }};

  padding-bottom: ${props => {
    if (props.fullVertical) return 0;
    if (props.small) return '15px';
    return '25px';
  }};
`

export default Container;