import {
    getCount,
} from '../../service/home/home'
import * as module from './homeModule'

jest.mock('../../service/home/home')

describe('Home table binter module tests', () => {
    describe('initializer test', () => {
        it('returns the initial state', () => {
            const initialize = module.initializer()
            expect(initialize).toEqual(undefined)
        })
    })
    describe('thunks tests', () => {
        const INITIAL_STATE = {
            isLoading: false,
            data: [],
            transactions: [],
            isProcess: {
                open: false,
                title: '',
                message: '',
            },
            isError: {
                open: false,
                title: '',
                message: '',
            },
            isClose: {
                open: false,
                title: '',
                message: '',
            },
            messageInfo: {
                title: '',
                message: '',
                suggestion: '',
            },
            modal: {
                open: false,
                title: '',
                message: '',
                suggestion: '',
                btnCloseLabel: '',
                warning: true,
                closable: true,
            },
        }
    })
    describe('conteo tests', () => {
        it('returns entrega ranking, id, title successfull', async () => {
            const mockedDispatch = jest.fn()
            getCount.mockRejectedValue()
            module.getCounts(mockedDispatch, {})
            expect(mockedDispatch.mock.calls[0][0].type).toBe(
                module.actions.START,
            )
        })
    })
    it('returns clearMessageInfo successfull', async () => {
        const mockedDispatch = jest.fn()
        module.clearMessageInfo(mockedDispatch)
        expect(mockedDispatch.mock.calls[0][0].type).toBe(
            module.actions.CLEAR_MESSAGE_INFO,
        )
    })
})