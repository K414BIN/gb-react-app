import { render, screen } from '@testing-library/react';
import Login from "../pages/Login";
import Register from "../pages/Register";

test('renders react link in Login page ', async () => {
    render(<Login/>);
    screen.debug();
    const linkElement = await screen.getByText(/Регистрация/i);
    expect(linkElement).toBeInTheDocument();
    screen.debug();
});


test('renders react link in Register page ', async () => {
    render(<Register/>);
    screen.debug();
    const linkElement = await screen.getByText(/Вход/i);
    expect(linkElement).toBeInTheDocument();
    screen.debug();
});