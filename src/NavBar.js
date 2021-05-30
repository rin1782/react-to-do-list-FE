import {Link} from 'react-router-dom'

export default function NavBar(props) {

    return (
        <>
            <Link to="/lists">Lists</Link><br></br>
            <Link to="/lists/new">New List</Link>
        </>
    )

}