import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// Using Link instead of "a" prevents the default event and changes the URL
// without sending the HTTP request
function HomePage() {

    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products');
    }

    return <>
        <h1>My Home Page</h1>
        <p>Go to <Link to="/products">the products list</Link></p>
        <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
}

export default HomePage;