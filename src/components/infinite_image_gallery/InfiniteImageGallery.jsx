import React from "react";
import css from "./InfiniteImageGallery.module.css"

const InfiniteImageGallery = () => {

    return (
        <div className={css.wrapper}>
            <h1>Unsplash Image Gallery!</h1>

            <form>
                <input type="text" placeholder="Search Unsplash..." />
                <button>Search</button>
            </form>

            <div className={css.image_grid}>
                {[...Array(100)].map((_, index) => (
                    <div className={css.image} key={index}>
                        <img src="https://placekitten.com/g/1920/1080" alt="Sample" />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default InfiniteImageGallery;
