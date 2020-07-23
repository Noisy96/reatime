import React from 'react';
import Box from '@material-ui/core/Box';

const myFooterStyle = {
    width: "95%",
    margin: "auto",
    marginTop: "37vh",
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
                <a href="https://www.github.com/noisy96/reatime" target="_blank" rel="noopener noreferrer" style={myFooterLinksStyle}><p>Github</p></a>
            </Box>
        </div>
    );
};

export default StickyFooter;