import React from 'react'
import './Pagination.scss';
import { Link } from 'react-router-dom';
const Pagination = () => {
    return (
        <>
            <div className="wrapper ">
                <ul id="pagination" className='container'>
                    <li><Link class="" href="#">«</Link></li>
                    <li><Link href="#">1</Link></li>
                    <li><Link href="#" class="Linkctive">2</Link></li>
                    <li><Link href="#">3</Link></li>
                    <li><Link href="#">4</Link></li>
                    <li><Link href="#">5</Link></li>
                    <li><Link href="#">6</Link></li>
                    <li><Link href="#">7</Link></li>
                    <li><Link href="#">»</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Pagination