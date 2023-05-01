import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import history from './history'

jest.mock(
    './containers/HomeContainers/HomeContainer',
    () => () => <div>homeContainer</div>,
)

describe('app tests', () => {
    it('renders main container route as root', () => {
        history.push('/')
        render(<App />)

        const mainContainer = screen.queryByText('homeContainer')

        expect(mainContainer).not.toBeNull()
    })

    it('redirects to home in root route', () => {
        history.push('/')
        render(<App />)

        expect(window.top.location.pathname).toEqual('/')
    })
})