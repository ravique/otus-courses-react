import React from 'react';
import {Link} from "react-router-dom";


const Links = ({links}) => (
    links.map(({name, url}, i) =>
        [i > 0 && " | ", <Link to={url} key={i} className='menu__link'>{name}</Link>]
    )
);

export default Links;