import React from 'react';
import categories from '../categories';
import css from "../Trivia.module.css"

export default function CategorySelector() {
    return (
        <div className={css.category_selector}>
            <p>Select Category</p>
            <select>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
