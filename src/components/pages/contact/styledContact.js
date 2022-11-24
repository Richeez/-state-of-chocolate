import styled from "styled-components";

export const StyledContact = styled.div`
position: relative;
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
        outline: none;
         border:  1px solid var(--dark-chocolate);

        
    }

    input{
        padding: .5rem 4rem .5rem 1.5rem;

    }

    textarea{
        resize: none;
        padding: 1.5rem 4rem .5rem 1.5rem;
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

    
    
}


} 

.responseBox{
    .fail, .success{
        width: 10rem;
        height: max-content;
        border-radius: 1rem 0 0 1rem;
        padding: .5rem 1rem .9rem;
        font-size: .9rem;
        color: var(--white-color);
        position: absolute;
        top: 1%;
        right: 3%;
        user-select: none;
        overflow: hidden;

        /* &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: 5%;
            border-radius: 20px 0 0 20px;
            background-color: var(--white-color);

        } */
        p{
            width: 100%;
            text-align: center;

        }
    }
    .fail{
        background-color: rgba(250, 0, 0, .775);

    }
    .success{
        background-color: lightgreen;

    }
}

`;