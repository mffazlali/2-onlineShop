import React, { Component } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { Dialog } from 'primereact/dialog'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props)
            this.state = {
                error: null
            }
        }

        componentWillMount() {
            this.resInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })
            this.resInterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }

        componentWillUnmount() {
            console.log('Unmount Interceptors')
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Wrapper>
                    <Dialog visible={this.state.error} onHide={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Dialog>
                    <WrappedComponent {...this.props} />
                </Wrapper>
            )
        }
    }
}

export default withErrorHandler