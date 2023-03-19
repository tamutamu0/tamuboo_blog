import Link from 'next/link';
import { Link as MuiLink, Pagination as MuiPagination, PaginationItem } from '@mui/material'
import { PER_PAGE } from '../../setting';

type Props = {
    currentPage: number,
    totalCount: number
}

const Pagination = ({ currentPage, totalCount }: Props) => {
    return (
        <MuiPagination
            page={currentPage}
            count={Math.ceil(totalCount / PER_PAGE)}
            renderItem={(item) => (
                <PaginationItem
                    component={MuiLink}
                    href={item.page === 1 ? '/' : `/blog/page/${item.page}`}
                    {...item}
                />
            )}
        />
    );
};

export default Pagination