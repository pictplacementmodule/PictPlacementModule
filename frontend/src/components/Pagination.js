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

    blah: {
        backgroundColor: "#b90000",
        borderRadius: "5px",

        "&:hover": {
            backgroundColor: "#772e2e",
        },

        "&:active": {
            backgroundColor: "#772e2e",
        }
    }
}))

const Pagination = ({ postsPerPage, totalPosts, paginate, paginatePrev }) => {

    const pageNumbers = [];

    const [currentPage, setCurrentPage] = React.useState(1);

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const classes = styles();

    const clickHandler = (number) => {
        setCurrentPage(number);
        paginate(number);
    }

    return (
        <nav className={classes.root} aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                {pageNumbers.map(number => (
                    <li className={currentPage===number?'page-item active':'page-item'}>
                        <a class="page-link" onClick={() => { clickHandler(number) }}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;