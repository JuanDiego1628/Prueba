import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav class='bg-red-400'>
            <ul class="flex w-full justify-between my-3">
                <li>Logo</li>
                <li>nav1</li>
                <li>nav1</li>
                <li className="px-3">
                    <Link to='/login'>
                        <button className="bg-indigo-50 text-white rounded-lg shadow-me hover:bg-indigo-900">Iniciar Sesion</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default navbar
