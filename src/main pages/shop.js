import NewCollection from "../components/newcollection";
import PopularWomen from "../components/popularwomen";
import ShopBanner from "../components/shopbanner";
import Subscribe from "../components/subscribe";


const Shop = () => {
    return(
        <>
            <ShopBanner/>
            <PopularWomen/>
            <NewCollection/>
            <Subscribe/>
        </>
    );
}

export default Shop;