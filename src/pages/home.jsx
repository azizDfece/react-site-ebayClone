import Slider from "../component/slider"
import '../css/home.css'
import ImageCargory from "../component/imageCatgory"



function Home() {

    const obj1 = [
        {
            id: 1,
            imageUrl: 'https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/px0AAeSwb5Fo2ldK/$_57.JPG',
            name: "Laptops"
        },
        {
            id: 2,
            imageUrl: "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/qsYAAeSwrodo2ldK/$_57.JPG",
            name: "Computer parts"
        }
        ,
        {
            id: 3,
            imageUrl: "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/imcAAeSwdTVo2ldK/$_57.JPG"
            , name: "Smartphones"
        }

    ]
    const obj2 = [
        {
            id: 1,
            imageUrl: "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/~R4AAeSwPNZo2len/$_57.JPG"
            , name: "Tech"
        },
        {
            id: 2,
            imageUrl: "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/hjsAAeSwgDlo2len/$_57.JPG"
            , name: "Motors"
        }
    ]

    return (
        <>
            <Slider />
            <div className="card">
                <div className="left">
                    <h2>Shopping made easy</h2>
                    <p>Enjoy reliability,secure deliveries and hassle-free returns</p>
                </div>
                <button>Start now</button>
            </div>
            <ImageCargory king={obj1} title={"The future in your hands"} />
            <ImageCargory king={obj2} title={"Trending on eBay"} />
            <div>
                <p>Home page</p>
            </div>
        </>

    )

}

export default Home