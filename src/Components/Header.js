import PropTypes from 'prop-types'

    return (
        <header className='header'>
            <h1>{ title }</h1>
            {
                location.pathname === '/' ? 
                <Button 
                color={!showAdd ? 'green': 'red'} 
                text={!showAdd ? 'Add': 'Close'} 
                onClick={ () => onAdd() } 
                /> : ''
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Temp Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


// CSS in JSX
// const headingStyle = {
//     color: 'red', 
//     textAlign: 'center'
// }

export default Header
