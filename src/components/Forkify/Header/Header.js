import React from 'react';
import classes from './Header.module.css'
import Logo from '../UI/Logo/Logo';
import Likes from '../UI/Likes/Likes';
import SearchInput from '../Search/SearchInput/SearchInput'

const header = (props) => {
    return ( 
        <header className={classes.Header}>
              <Logo click={props.isMob}/>
             <SearchInput subm={props.subm}
                         changed={props.change} 
                         def={props.desValue}
                         clear={props.clear}/>
              <Likes />
        </header>
      );
}
 
export default header;