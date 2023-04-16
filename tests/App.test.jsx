import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import App from '../src/App.jsx';

describe('Testing in App', () => {
  it('Should be h1 in the screen', () => {
    render(<App />);
    const h1 = screen.getByText('Product Search');
    expect(h1).toBeInTheDocument();
  });

  it('Should be select store tag in the screen', () => {
    render(<App />);
    const select = screen.getByTestId('source-input');
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'buscape' } });
    expect(select.value).toBe('buscape');
    fireEvent.change(select, { target: { value: 'mercado_livre' } });
    expect(select.value).toBe('mercado_livre');
  });

  it('Should be select category tag in the screen', () => {
    render(<App />);
    const select = screen.getByTestId('category-input');
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'geladeira' } });
    expect(select.value).toBe('geladeira');
    fireEvent.change(select, { target: { value: 'tv' } });
    expect(select.value).toBe('tv');
    fireEvent.change(select, { target: { value: 'celular' } });
    expect(select.value).toBe('celular');
  });

  it('Should be loading... in the screen', () => {
    render(<App />);
    const p = screen.getByTestId('loader');
    expect(p).toBeInTheDocument();
  });
});
