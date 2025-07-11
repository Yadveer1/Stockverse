import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Universe from './Universe';

function ProductPage(){
    return ( 
        <>
            <Hero/>
            <LeftSection   imageURL="assets/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                tryDemo="" learnMore="" googlePlay="" appStore=""
            />

            <RightSection   imageURL="assets/images/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore=""
            />

            <LeftSection   imageURL="assets/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="" learnMore="" googlePlay="" appStore=""
            />

            <Universe/>
        </>
     );
}

export default ProductPage;