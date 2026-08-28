// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeLens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeLens/i);
    expect(titleElement).toBeInTheDocument();
});
