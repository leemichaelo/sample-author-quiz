import React from 'react';

function Footer() {
    return (
        <div id='footer' className='row'>
            <div className='col-12'>
                <p className='text-muted credit'>
                    All Images are from
            <a href='https://commons.wikimedia.org/wiki/Main_page'>
                        Wikemedia Commons
            </a> and are in the public domain.
          </p>
            </div>
        </div>
    );
}

export default Footer;