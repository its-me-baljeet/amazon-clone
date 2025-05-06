import { Link } from "react-router-dom";
import { getProductData } from "../services/api";

const SearchPage = () => {

    async function getSearchData() {
        const data = await getProductData();
        console.log(data?.products)
    }
    getSearchData();
    return (
        <Link to={"/search"}>
            <div>
                Search Results
            </div>
            <div>

            </div>
        </Link>
    )
}
export default SearchPage;