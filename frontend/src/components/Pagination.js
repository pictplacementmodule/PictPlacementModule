import React from 'react'
import { makeStyles } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";


const styles = makeStyles(theme => ({
    root: {
        width: "85%",
        marginTop: theme.spacing(3),
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
}))

const Pagination = ({ postsPerPage, totalPosts, paginate, paginatePrev }) => {

    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const classes = styles();

    return (
        <nav className={classes.root} aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" tabindex="-1" onClick={() => { paginatePrev() }}>Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li class="page-item"><a class="page-link" onClick={() => { paginate(number) }}>{number}</a></li>
                ))}
                <li class="page-item disabled">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;