import React from 'react';
import categories from '../categories';
import css from "../Trivia.module.css"

export default function CategorySelector({chooseCategory, category}) {
    return (
        <div className={css.category_selector}>
            <p>Select Category</p>
            <select value={category} onChange={(e) => chooseCategory(e.target.value)}>
                {categories.map((category, index) => (
                    <option key={index} value={category.id} dangerouslySetInnerHTML={{__html: category.name}}>
                        {/*{console.log(category.name)}*/}
                        {/*{category.name}*/}
                    </option>
                ))}
            </select>
        </div>
    );
}
