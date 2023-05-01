import React from 'react'
import { shallow } from '../../testing'
import HomeContainer from "./HomeComponents";
import toJson from "enzyme-to-json";
import '@testing-library/jest-dom/extend-expect';


const isData = [
    {
        "id": "3",
        "title": "Ya no viajo en moto",
        "ranking": [
            {
                "position": 1,
                "word": "moto",
                "ocurrences": "8"
            }],
    },
]

const homeMessageInfo = {
    open: false,
    title: '',
    message: '',
    suggestion: '',
    btnCloseLabel: '',
    warning: true,
    closable: true,
}

const isProcess = {
    open: false,
    title: '',
    message: '',
}

const modal = {
    open: false,
    title: '',
    message: '',
    suggestion: '',
    btnCloseLabel: '',
    warning: true,
    closable: true,
}
const error ={
    open: false,
    title: '',
    message: '',
}

const defaultProps = {
    isError: error,
    isProcess: isProcess,
    isLoading: false,
    isMessageInfo: Object.create(homeMessageInfo),
    isData: isData,
    getRequestCount:jest.fn(),
    getOnOpen: jest.fn(),
    getOnClose: jest.fn(),
    onClearMessageInfo: jest.fn(),
    onModal: jest.fn(),
    modal: modal,
}

describe('home Test', () => {
    it('renders correctly enzyme', () => {
        const wrapper = shallow(<HomeContainer {...defaultProps} />);
        let data = toJson(wrapper)
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const wrapper = shallow(<HomeContainer {...defaultProps} />);
        let data = wrapper.find('.homeComponent-view')
        expect(data).toHaveLength(1)
    });
})