import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  background-color: #749fac;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <h2>Movie App</h2>
        <p>Created by @shofiesyrrr</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
