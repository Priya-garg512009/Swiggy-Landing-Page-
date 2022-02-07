import React from 'react'
import './footer.css'

function NavLinks(props) {
    const {heading, links, showHeading} = props;

    return (
        <nav>
                <ul >
                    {showHeading? (<li className="footer-heading">{heading}</li>):(<li>&nbsp;</li>)}
                    
                    {links.map((link) => {
                        return (
                            <li><a href={link.url}>{link.text}</a></li>
                        )
                    })}

                </ul>
         </nav>
    );
}
export default NavLinks;