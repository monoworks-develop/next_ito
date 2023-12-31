import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page'
import {Button, Link} from '@/components/Elements'

describe('Home', () => {
  test('Button', () => {
    render(<Button/>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
}) 