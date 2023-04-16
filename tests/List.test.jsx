import { describe, expect, it, vi } from 'vitest';
import { getAll } from './mocks/data';
import App from '../src/App';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

vi.mock('axios');
window.scrollTo = vi.fn();

describe('Testing rendered items', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });
  it('Checks if axios was called', async () => {
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);

    expect(axios.get).toHaveBeenCalled();
  });

  it('Products section should appear on the screen', async () => {
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);

    await waitFor(() => {
      const section = screen.getByTestId('section-products');
      expect(section).toBeInTheDocument();
    });
  });

  it('Cards must be rendered', async () => {
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);

    await waitFor(() => {
      const cards = screen.getAllByTestId('card-product');
      expect(cards.length).toBe(getAll.length);
    });
  });

  it('Cards must have the expected attributes', async () => {
    parent.open = vi.fn();
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);

    await waitFor(() => {
      const cards = screen.getAllByTestId('card-product');
      const index = Math.floor(Math.random() * getAll.length);
      const imgs = cards[index].querySelectorAll('img');
      const btn = cards[index].querySelector('button');
      expect(btn).toHaveTextContent(/go site/i);
      fireEvent.click(btn);
      expect(parent.open).toBeCalledWith(getAll[index].link);
      expect(imgs.length).toBe(2);
      expect(imgs[0].getAttribute('src')).toBe(getAll[index].srcImg);
    });
  });

  it('Pagination buttons must be on screen and disabled', async () => {
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);

    await waitFor(() => {
      const next = screen.getByTestId('next-page');
      const prev = screen.getByTestId('prev-page');

      expect(next).toBeDisabled();
      expect(prev).toBeDisabled();
    });
  });
});
