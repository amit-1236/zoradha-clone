import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function Products() {
    return (
        <>
            <Hero />
            <LeftSection
                imageUrl="/src/assets/Picture/products-kite.png" productName="Kite" productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="Try demo" learnMore="
Learn more 
"  googlePlay="" appStore=""
            />
            <RightSection
                 imageUrl="/src/assets/Picture/products-console.png" productName="Console" productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="Learn More"
            
            />
            <LeftSection
                imageUrl="/src/assets/Picture/products-coin.png" productName="Coin" productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

" tryDemo="Coin" learnMore=""  googlePlay="" appStore=""
 

            />
            <RightSection 
                  imageUrl="/src/assets/Picture/landing (1).svg" productName="Kite Connect API" productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="Kite Connect"
            />
            <LeftSection
                imageUrl="/src/assets/Picture/varsity-products.svg" productName="Varsity mobile" productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo=" " learnMore=""  googlePlay="" appStore=""
            />
          <hr/>
            

            

        </>
    );
}

export default Products;
