import React, {useEffect, useState} from "react";
import css from "./InfiniteImageGallery.module.css"
import InfiniteScroll from "react-infinite-scroll-component";

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
// const accessKey = undefined;

const InfiniteImageGallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    /*const getPhotos = useCallback(() => {
        // console.log(accessKey);

        let apiUrl = `https://api.unsplash.com/photos?`;
        // let apiUrl = `https://api.unsplash.com/photos/random?&count=14`;

        if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}&count=14`;

        apiUrl += `&page=${page}`
        apiUrl += `&per_page=12`
        apiUrl += `&client_id=${accessKey}`;

        console.log(apiUrl);

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                const imagesFromApi = data.results ?? data;
                if (page === 1) setImages(imagesFromApi); // if page is 1, then we need a whole new array of images
                else setImages((images) => [...images, ...imagesFromApi]); // if page > 1,then we are adding for our infinite scroll
            });
    }, [page, query]);*/

    useEffect(() => {
        getPhotos();
        // eslint-disable-next-line
    }, [page]);

    // return an error if there is no access key
    if (!accessKey) {
        return (
            <a href="https://unsplash.com/developers" className={css.error}>
                Required: Get Your Unsplash API Key First
            </a>
        )
    }

    const searchPhotos = (e) => {
        e.preventDefault();
        setPage(1);
        getPhotos();
    };

    const getPhotos = () => {
        // console.log(accessKey);

        let apiUrl = `https://api.unsplash.com/photos?`;
        // let apiUrl = `https://api.unsplash.com/photos/random?&count=14`;

        if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}&count=14`;

        apiUrl += `&page=${page}`
        apiUrl += `&per_page=12`
        apiUrl += `&client_id=${accessKey}`;

        console.log(apiUrl);

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                const imagesFromApi = data.results ?? data;
                if (page === 1) setImages(imagesFromApi); // if page is 1, then we need a whole new array of images
                else setImages((images) => [...images, ...imagesFromApi]); // if page > 1,then we are adding for our infinite scroll
            });
    };

    return (
        <div className={css.wrapper}>
            <h1>Unsplash Image Gallery!</h1>

            <form onSubmit={searchPhotos}>
                <input
                    type="text"
                    placeholder="Search Unsplash..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button>Search</button>
            </form>

            <InfiniteScroll
                dataLength={images.length} //This is important field to render the next data
                next={() => setPage(page => page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >

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

            </InfiniteScroll>
        </div>
    )
};

export default InfiniteImageGallery;
