import styled from 'styled-components';

export default styled.div`
    margin-top: 2rem;

    .title {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
    }

    .wrapper {
        position: relative;
        height: max-content;
        display: flex;
        flex-wrap: ${(props) => (props.flexwrap ? 'wrap' : 'nowrap')};
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;
