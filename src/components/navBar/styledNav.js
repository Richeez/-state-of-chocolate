import styled from "styled-components";

export const Header = styled.header`
height: fit-content;
padding: 1%;
position: fixed;
height: 4.4rem;
z-index: 90;
left: 0;
right: 0;
top: 0;
/* background-color: var(--lighter-chocolate); */
`;

export const Nav = styled.nav`
width: 100%;
position: relative;
display: flex;
padding: 1%;
align-items: center;
font-size: 1.2rem;
justify-content: space-between;

`;
export const LinkCont = styled.ul`
width: 50%;
background-color: var(--lighter-chocolate);
top: -50%;
margin-top: 4rem;
border-radius: 1rem 0 0 1rem ;
padding: 1rem;
right: -2%;
display: flex;
display: none;
flex-direction: column;
height: 50vh;
position: absolute;
align-items: center;
justify-content: flex-start;
gap: 2rem;

`;
export const NavLink = styled.li`
list-style: none;
cursor: pointer;

`;
export const Brand = styled.div`
width: 12.5rem;
height: 5rem;
display: flex;
align-items: flex-end;
justify-content: flex-start;

`;
export const BrandLogo = styled.img`
width: 100%;
max-width:fit-content;
height: 100%;
margin-left: 1rem;
object-fit: contain;

`;