import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainContent from './MainContent';

// My tests!
// Add yet another comment

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    await userEvent.click(button);
    // intentionally fail the test to test out failure scenario
    // remove the a from 'help-area' below to 'help-are'
    expect(screen.getByTestId('help-are')).toBeInTheDocument();
  });
});
