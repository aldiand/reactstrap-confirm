/**
 * @jest-environment jsdom
 */

/* global describe, it, expect, jest */
import confirm from '../src/Confirm';
import { act, fireEvent, screen } from '@testing-library/react';

describe('confirm function', () => {
  it('renders the modal on calling', () => {
    act(() => {
      confirm();
    });

    const found = screen.findByText('Are you sure?');

    expect(found).toBeDefined();

    const button = screen.getByText('Ok');

    fireEvent.click(button);
  });
});
