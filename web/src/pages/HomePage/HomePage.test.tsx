import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import HomePage from './HomePage'
jest.useFakeTimers()
//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })

  it('displays the time correctly', async () => {
    render(<HomePage />)
    await waitFor(() => userEvent.click(screen.getByText('START'))) // Inicia o temporizador)

    jest.advanceTimersByTime(1200)
    // Aguarda um pequeno período após a atualização do estado
    await waitFor(() => screen.getByText('24:59'))

    // Verifica se o texto "24:59" foi renderizado na tela
    expect(screen.getByText('24:59')).toBeInTheDocument()
  })

  it('displays the time correctly when click on short break', async () => {
    render(<HomePage />)
    await waitFor(() => userEvent.click(screen.getByText('shortBreak'))) // Inicia o temporizador)
    expect(screen.getByText('05:00')).toBeInTheDocument()
  })
  it('displays the time correctly when click on long break break', async () => {
    render(<HomePage />)
    await waitFor(() => userEvent.click(screen.getByText('longBreak'))) // Inicia o temporizador)
    expect(screen.getByText('10:00')).toBeInTheDocument()
  })
})
