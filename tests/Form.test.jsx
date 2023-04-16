import { describe, expect, it, vi } from 'vitest';
import { getAll } from './mocks/data';
import App from '../src/App';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

vi.mock('axios');
window.scrollTo = vi.fn();

describe('Test product search', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  it('Checks if axios was called with query search', async () => {
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);
    await waitFor(() => {
      const btn = screen.getByTestId('btn-source');
      const input = screen.getByTestId('input-search');

      fireEvent.change(input, { target: { value: 'xiaomi' } });
      fireEvent.click(btn);
    });
    expect(axios.get).toHaveBeenLastCalledWith(
      import.meta.env.VITE_URL_SEARCH + 'q=xiaomi&cat=&web=',
      {
        headers: {
          Authorization: import.meta.env.VITE_HASH_ATT,
        },
      }
    );
  });

  it('Checks if axios was called with query search', async () => {
    await axios.get.mockResolvedValue({
      data: getAll,
    });
    render(<App />);
    await waitFor(() => {
      const btn = screen.getByTestId('btn-source');
      const input = screen.getByTestId('input-search');
      const cat = screen.getByTestId('category-input');
      const web = screen.getByTestId('source-input');

      fireEvent.change(web, { target: { value: 'buscape' } });
      fireEvent.change(cat, { target: { value: 'celular' } });
      fireEvent.change(input, { target: { value: 'iphone' } });
      fireEvent.click(btn);
    });
    expect(axios.get).toHaveBeenLastCalledWith(
      import.meta.env.VITE_URL_SEARCH + 'q=iphone&cat=celular&web=buscape',
      {
        headers: {
          Authorization: import.meta.env.VITE_HASH_ATT,
        },
      }
    );
  });
});
