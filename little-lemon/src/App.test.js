import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router';
import App from './App';
import BookingForm, {
  validateEmail,
  validateFormData,
  validateGuests,
  validateName,
  validatePhone,
} from './components/BookingForm';
import { initializeTimes, updateTimes } from './pages/BookingPage';

test('renders booking form static text', () => {
  render(
    React.createElement(BookingForm, {
      availableTimes: ['17:00', '18:00'],
      dispatch: () => {},
    })
  );

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
});

test('form inputs use the expected HTML5 validation attributes', () => {
  render(
    React.createElement(BookingForm, {
      availableTimes: ['17:00', '18:00'],
      dispatch: () => {},
    })
  );

  expect(screen.getByLabelText(/name/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/name/i)).toHaveAttribute('minlength', '2');
  expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email');
  expect(screen.getByLabelText(/email/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/phone/i)).toHaveAttribute('type', 'tel');
  expect(screen.getByLabelText(/phone/i)).toHaveAttribute('pattern', '[0-9+()\\-\\s]{7,}');
  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('type', 'date');
  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/choose time/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('min', '1');
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('max', '10');
  expect(screen.getByLabelText(/occasion/i)).toHaveAttribute('required');
});

test('submitting a valid form navigates to the confirmation page even when the API helper is unavailable', async () => {
  window.history.pushState({}, '', '/reservations');
  delete global.submitAPI;

  render(
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(App)
    )
  );

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jo' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '+1 (555) 123-4567' } });
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2026-08-29' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

  expect(await screen.findByText(/booking confirmed/i)).toBeInTheDocument();
});

test('initializeTimes returns the API times for today', () => {
  const today = new Date().toISOString().split('T')[0];
  const mockedTimes = ['17:00', '18:00', '19:00'];
  global.fetchAPI = vi.fn(() => mockedTimes);

  expect(initializeTimes()).toEqual(mockedTimes);
  expect(global.fetchAPI).toHaveBeenCalledWith(today);
});

test('updateTimes returns the API times for the selected date', () => {
  const mockedTimes = ['18:00', '19:00', '20:00'];
  global.fetchAPI = vi.fn(() => mockedTimes);
  const state = ['10:00', '11:00'];

  expect(updateTimes(state, { type: 'DATE_CHANGED', date: '2026-08-29' })).toEqual(mockedTimes);
  expect(global.fetchAPI).toHaveBeenCalledWith('2026-08-29');
});

test('validation helpers accept valid data and reject invalid data', () => {
  expect(validateName('Jo')).toBe(true);
  expect(validateName('J')).toBe(false);

  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid-email')).toBe(false);

  expect(validatePhone('+1 (555) 123-4567')).toBe(true);
  expect(validatePhone('123')).toBe(false);

  expect(validateGuests(2)).toBe(true);
  expect(validateGuests(0)).toBe(false);
  expect(validateGuests(11)).toBe(false);

  expect(
    validateFormData({
      name: 'Jo',
      email: 'test@example.com',
      phone: '+1 (555) 123-4567',
      date: '2026-08-29',
      time: '18:00',
      guests: '2',
      occasion: 'Birthday',
    })
  ).toBe(true);

  expect(
    validateFormData({
      name: 'J',
      email: 'test@example.com',
      phone: '+1 (555) 123-4567',
      date: '2026-08-29',
      time: '18:00',
      guests: '2',
      occasion: 'Birthday',
    })
  ).toBe(false);
});
