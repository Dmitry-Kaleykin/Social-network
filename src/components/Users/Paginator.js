import React from "react";
import s from "./Users.module.css";

function Paginator (props) {

    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';

    const pageNeighbours = 2;
    const totalPages = Math.ceil(props.totalUsersCount / props.usersPerPage);

    //Additional function

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];
      
        while (i <= to) {
          range.push(i);
          i += step;
        }
      
        return range;
    }

    //Display pageNumbers logic

    const fetchPageNumbers = () => {

        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {

            const startPage = Math.max(2, props.currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, props.currentPage + pageNeighbours);
    
            let pages = range(startPage, endPage);
            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
    
            switch (true) {
            // handle: (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage - 1);
                pages = [LEFT_PAGE, ...extraPages, ...pages];
                break;
            }
    
            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT_PAGE];
                break;
            }
    
            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                break;
            }
            }
    
            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    }

    const handleClick = page => evt => {
        evt.preventDefault();
        props.onPageChanged(page);
    }
    
    const handleMoveLeft = evt => {
        evt.preventDefault();
        props.onPageChanged(props.currentPage - 1);
    }
    
    const handleMoveRight = evt => {
        evt.preventDefault();
        props.onPageChanged(props.currentPage + 1);
    }

    const pages = fetchPageNumbers();

    if (!props.usersPerPage || totalPages === 1) return null;

    return (
        <div>
          <nav>
            <ul className={s.pagination}>
              { pages.map((page, index) => {
                if (page === LEFT_PAGE) return (
                  <li key={index} className={s.pageItem}>
                    <a className={s.pageLink} href="!#" onClick={handleMoveLeft}>
                      <span>&laquo;</span>
                      <span>Previous</span>
                    </a>
                  </li>
                );
  
                if (page === RIGHT_PAGE) return (
                  <li key={index} className={s.pageItem}>
                    <a className={s.pageLink} href="!#" onClick={handleMoveRight}>
                      <span>&raquo;</span>
                      <span>Next</span>
                    </a>
                  </li>
                );
  
                return (
                  <li key={index} className={`${s.pageItem} ${ props.currentPage === page ? s.active : ''}`}>
                    <a className={s.pageLink} href="!#" onClick={ handleClick(page) }>{ page }</a>
                  </li>
                );
              }) }
            </ul>
          </nav>
        </div>
    );
}

export default Paginator;