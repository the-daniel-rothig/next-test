import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
    it('has the expected structure', () => {
        const res = render(<Layout>Hello!</Layout>);
        expect(res.container.firstChild).toMatchSnapshot();
    });

    it('renders the child node', () => {
        const res = render(<Layout><div data-testid="found" /></Layout>);
        res.getByTestId('found');
    })
})