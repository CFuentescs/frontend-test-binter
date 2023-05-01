import * as home from './HomeModule/homeModule'

const initializers = {
    home: home.initializer,
}
const reducers= {
    home: home.reducer,
}
export default {
    initializers,
    reducers,
}