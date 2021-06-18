import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1 > {title}</h1>
            <Button color='green' text='Hello'></Button>
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker',
};
Header.PropTypes={
    title: PropTypes.string,
}
// css in js
//<h1 style={headingStyle}> {title}</h1>
// const headingStyle= {color: 'red' ,backgroundColor: 'black'}
export default Header;



//title
// const Header = ({title}) => {
//     return (
//         <header>
//             <h1>aa {title}</h1>
//         </header>
//     )
// }
// Header.defaultProps = {
//     title:'Task Tracker',
// };

// export default Header;


// Default props
// const Header = (props) => {
//     return (
//         <header>
//             <h1> {props.title}</h1>
//         </header>
//     )
// }
// Header.defaultProps = {
//     title:'Task Tracker',
// };
// export default Header;

