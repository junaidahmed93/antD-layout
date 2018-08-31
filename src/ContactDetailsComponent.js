import React from 'react';

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Selected User : {JSON.stringify(this.props)}
            </div>
        );
    }
}

export default AboutContainer;
