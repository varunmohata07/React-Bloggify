import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2> Oops... Page Not Found</h2>
            <p>The page is not availabe !</p>
            <br></br>
            <br />
            <Link to="/" className="notfound-button">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;