
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick=()=>{
    console.log('Clicked');
    }
    return (
       <header className='header'>
           <h1>{title}</h1>
           {/* <button onClick={onClick} className='btn'>Add</button> */}
           <Button color='green' text='Add' onClick={onClick}/>
       </header>
    )
}
Header.defaultProps = {
title:'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }

export default Header
