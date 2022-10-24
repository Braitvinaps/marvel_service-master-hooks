import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAigen': 'center', 'fontSize': '24px'}}>Page dosen't exist</p>
            <Link style={{'textAigen': 'center', 'fontSize': '24px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;