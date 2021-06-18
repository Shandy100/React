import PropTypes from 'prop-types'
const Button = (props) => {
    return (<button style={{backgroundColor:props.color}} className='btn'>{props.text}</button>)
}

Button.defaultProps={
    colour: 'steelblue',
}
Button.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string,

}

export default Button;
