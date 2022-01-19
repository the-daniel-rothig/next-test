import Next from './next.png';
import { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
    children?: ReactNode;
}

const Wrapper = styled.div`
    font-family: Azo-Sans, sans-serif;
    background-color: #000;
    color: #fff;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 20px;
`;

const Img = styled.img`
    width: 150px;
    margin-right: 20px;
`;

const AppHeading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

const Main = styled.main`
    background-color: #fff;
    color: #000;
    min-height: 200px;
    padding: 20px 80px;
`;

const MainInner = styled.div`
    max-width: 800px;
    margin: auto;
`;

const Footer = styled.footer`
    padding: 20px;
`;

export const Layout = ({children}: LayoutProps) => {
    return (
        <Wrapper>
            <Nav>
                <Img src={Next} />
                <AppHeading>
                    NextTrack
                </AppHeading>
            </Nav>
            <Main>
                <MainInner>
                    {children}
                </MainInner>
            </Main>
            <Footer>
                &copy; 2022
            </Footer>
        </Wrapper>
    );
}
