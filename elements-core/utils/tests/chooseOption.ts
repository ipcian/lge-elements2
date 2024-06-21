import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

export function chooseOption(select: any, option: string) {
  userEvent.click(select);
  userEvent.selectOptions(screen.getByRole('listbox'), screen.getByRole('option', { name: option }));
}
