import styled from "styled-components";

export const StyledContact = styled.div`

background-color: var(--light-chocolate);
.contact{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    place-content: center;
    padding: 4rem .5rem 2rem .5rem;
    margin: 0 auto;
    min-height: 50vh;
    max-width: 75rem;

    input, textarea{
        font-size: 1.2rem;
        width: 100%;
        border-radius: 25px;
        padding: .5rem 4rem .5rem 1rem;
        outline: none;
         border:  1px solid var(--dark-chocolate);

        
    }
    input::placeholder, textarea::placeholder{
        text-transform: capitalize;
    }

    .input-cont{
        display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    }

    
    
    @media screen and (min-width: 45rem) {
        .input-cont{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    padding: 2rem .5rem 0 .5rem;

    gap: 2rem;
    }

    
    textarea{
        resize: none;
        padding-top: 1rem;
    }


}    

`;