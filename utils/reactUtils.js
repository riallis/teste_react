import React from 'react';

const childrenWithProps = (children, props) => {
    return React.Children.map(children, 
        child => React.cloneElement(child, {...props}))
}

export {childrenWithProps};
