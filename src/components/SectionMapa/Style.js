import styled from "styled-components";

const Section = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
    //border-bottom: 0.4px solid var(--texto);
    background-color: var(--cinzaclaro);

    &.section-mapa { /* adicione essa linha */
        width: 100%; /* adicione essa linha */
    }

    .img_mapa{
        width: 268px;
        height: 590px;
        border-radius: 25px;
        margin-bottom: -2rem;
    }

    .section-mapa{
        background-color: var(--cinzaclaro);
    }

    .right {
        display: flex;
        background-image: url(/imagens/FotoMapaCelularBorda-PasseioCarioca.jpg);
        background-repeat: no-repeat;
        background-position: center;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 300px;
        height: 606px;
        margin-bottom: 2rem;
    }

    .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        .mapa {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem 0;
            .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                font-family: 'Poppins';
            }
            .section-title{
                    text-align: center;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--texto);
                    text-align: center;
                    //margin-bottom: 1rem;
                    //border-bottom: 0.4px solid var(--secundaria);
            }
            .section-subtitle{
                    font-size: 1.5rem;
                    color: var(--cinzaescuro);
                    text-align: center;
                    margin-bottom: 2rem;
            }
            .section-text{
                    color: var(--texto);
                    text-align: center;
                    margin-bottom: 2rem;
            }
        }
    }
    .containerMapa {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: auto;
        height: fit-content;
        margin: 0;
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 1024px){
        flex-direction: row;
        width: 75%;
        .right {
            margin-bottom: 2em;
        }

        .left {
            width: 50%;
            align-items: flex-start;
            padding-left: 5rem;
        }
        .mapa{
            flex-direction: row;
        }
        .section-text{
            width: 100%;
        }
    }
`;

export { Section };