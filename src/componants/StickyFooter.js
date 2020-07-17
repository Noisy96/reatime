import React from 'react';
import Box from '@material-ui/core/Box';

const myFooterStyle = {
    position: "fixed",
    bottom: "0",
    left: "2.5%",
    width: "95%",
    borderTop: "0.2px solid lightgray",
};

const myFooterLinksStyle = {
    fontSize: "0.8em",
    color: "gray",
    textDecoration: "none",
    padding: "0px 10px"
};

const StickyFooter = () => {
    return (
        <div style={myFooterStyle}>
            <Box display="flex" justifyContent="flex-end">
                <a href="https://www.twitter.com/noisy_96" target="_blank" rel="noopener noreferrer" style={myFooterLinksStyle}><p>Twitter</p></a>
                <a href="https://www.github.com/noisy96" target="_blank" rel="noopener noreferrer" style={myFooterLinksStyle}><p>Github</p></a>
            </Box>
        </div>
    );
};

export default StickyFooter;