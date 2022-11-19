import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

:root{
  --light-chocolate:#d2691e;
  --lighter-chocolate:#ee9937;
  --dark-chocolate:#9b5606;
  --darker-chocolate:#9b5606;
  --white-color:#ffff;
  --font-family:  "Poppins", sans-serif;
  --light-white-color: rgba(255, 255, 255, 0.211);
  --lighter-white-color: rgba(255, 255, 255, 0.111);
  --transparent-black: rgba(0, 0, 0, 0.638);
}

*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 10rem;
  
}

body{
  font-size: 1.1rem;
  font-family: var(--font-family);
  /* color: var(--white-color); */

}
::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.2rem;
  background-color:var(--white-color); 
  
}

::-webkit-scrollbar-track {
  /* -webkit-margin-before: 6rem; */
  /* margin-block-start: 6rem; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: inset 0 0 6px var(--white-color);
  /* background:var(); */
  /* -webkit-box-shadow: inset 0 0 6px var(--transparent-color-02); */
}


::-webkit-scrollbar-thumb {
  background-color:var(--dark-chocolate);
  border-radius: 1rem;
  border: 2px inset var(--dark-chocolate);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}  

p{
  line-height: 1.6;

}  




`;

export default Globalstyles