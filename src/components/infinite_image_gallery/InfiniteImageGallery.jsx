import React, {useEffect, useState} from "react";
import css from "./InfiniteImageGallery.module.css"
import InfiniteScroll from "react-infinite-scroll-component";


const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
// const accessKey = undefined;

const InfiniteImageGallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPhotos();
    }, [page]);

    // return an error if there is no access key
    if (!accessKey) {
        return (
            <a href="https://unsplash.com/developers" className={css.error}>
                Required: Get Your Unsplash API Key First
            </a>
        )
    }

    const getPhotos = () => {
        // console.log(accessKey);
        fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=14&page=${page}`)
            // fetch(`https://api.unsplash.com/photos/?client_id=bYRYecx0nTuGZUD7pF-vfW7v0XcxajNz2pETgpDwvlI`)
            .then((res) => res.json())
            // .then((data) => setImages(data));
            .then((data) => {
                setImages((images) => [...images, ...data])
            });
    };

    return (
        <div className={css.wrapper}>
            <h1>Unsplash Image Gallery!</h1>

            <form>
                <input type="text" placeholder="Search Unsplash..."/>
                <button>Search</button>
            </form>
            <InfiniteScroll
                dataLength={images.length} //This is important field to render the next data
                next={() => setPage(page => page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {/**/}
                <div className={css.image_grid}>
                    {/*{[...Array(14)].map((_, index) => (*/}
                    {images.map((image, index) => (
                        <a
                            target="_blank"
                            href={image.links.html}
                            className={css.image}
                            key={index}
                            rel="noopener noreferrer"
                        >
                            {/*<img src="https://placekitten.com/g/1920/1080" alt="Sample"/>*/}
                            <img src={image.urls.regular} alt={image.alt_description}/>
                        </a>
                    ))}
                </div>
                {/**/}
            </InfiniteScroll>
        </div>
    )
};

export default InfiniteImageGallery;
