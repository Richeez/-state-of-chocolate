import styled from 'styled-components'

export const StyledServices = styled.div`
/* background-color: var(--light-chocolate); */
border-radius: 1rem;
margin: 0 auto;
display: grid;
/* justify-content: center; */
/* align-items: center; */
padding: 3rem 1rem;
width: 100%;
/* padding: 1%; */
gap: 2rem;
grid-template-columns: 1fr;

@media screen and (min-width: 45rem) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
max-width: 90rem;
        
    }



.pricing{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .item{
        position: relative;
        .icon{
            font-size: 2.5rem;
            position: absolute;
            top: 0;
            left: 0;
        }
        .text{
            margin-left: 5rem;

            h3{
                text-transform: capitalize;
                padding-bottom: 1rem;

            }

            p{
                width: 100%;
            }
    
        }

    }
    @media screen and (min-width: 45rem) {
        grid-column: span 2 ;


    }
}


.services{
    overflow: hidden;
    border-radius: 1rem;
    max-height: 400px;
    box-shadow: 2px 2px 5px;
    align-self: stretch;
    
        

    &:last-of-type{
            grid-column: span 1;
        height: unset;
        
    }

    @media screen and (min-width: 45rem) {
        &:last-of-type{
            grid-column: span 1 ;
        height: unset;
        
    }
}
    @media screen and (min-width: 64rem) {
        &:last-of-type{
            grid-column: span 1;
        height: unset;
        }
    }
    @media screen and (min-width: 83rem) {
        &:last-of-type{
            grid-column: span 1;
        height: unset;
        }
    }





   /* &:hover .service {
        .service-desc{
            bottom: 40%;
            opacity: 1;

        }
    }
        &:hover .overlay {
          opacity: 1;
         overflow: hidden;
        } */
        &:hover .service {
            img{
                transform: scale(1.1);
                transition: 1s;

            }
        } 
        .service{
            width: 100%;
            height: 100%;
            position:relative;
            color: var(--white-color);
        
            /* .overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.5), #deb887);
          opacity: 0;
          transition: 1s;
        }
        .service-desc {
        width: 80%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: 1s;
        
        hr {
        background: #fff;
        height: 2px;
        border: 0;
        margin: 15px 0;
        width: 60%;
        }
        p {
        font-size: 14px;
        }
        
        h3{
        font-size: 1rem;
        text-transform: capitalize;
        }
        } */
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;


            }
        }
}



`;