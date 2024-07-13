import React, { Component } from 'react'
import './ScrollToTop.css'

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 300) {
            this.setState({ showButton: true });
        } else {
            this.setState({ showButton: false });
        }
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    render() {
        return (
            <>
                {this.state.showButton && (
                    <div className="scroll-to-top" onClick={this.scrollToTop}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.707 8.707a1 1 0 0 1-1.414 0L8 6.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414z" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="bi bi-arrow-up-circle">
                            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
                        </svg>
                    </div>
                )}
            </>
        );
    }
}
export default ScrollToTop;