import React, {useEffect} from 'react';
import {Container, Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
import '@/public/styles/consumer/megaMenu.css';
import Link from "next/link";
import {findAllCategories} from "@/app/service/catalogService";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProducts, fetchProductsFailure, fetchProductsSuccess} from "@/app/store/productAction";
import {fetchAllCategories, fetchCategoryFailure, fetchCategorySuccess} from "@/app/store/categoryAction";

const MegaMenu = () => {
    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories);

    useEffect(() => {
        const categories = fetchAllCategories()
        categories.then(response => {
            dispatch(fetchCategorySuccess(response.data))
        }).catch(error => {
            dispatch(fetchCategoryFailure(error))
        })
        // console.log(testCategories)
    }, []);

    return (
        <Navbar expand="lg" className='nav-mega-menu'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={<span>All Categories
                            <svg width="20" height="17" viewBox="0 0 16 17" fill="none"
                                 className="text-token-text-tertiary"><path
                                d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>} id="basic-nav-dropdown" className='show text-decoration-none text-body-secondary fw-bold mt-2'>
                            {categories.map(category => (
                                <NavDropdown.Item key={category.id} href={'/consumer/product/?category=' + category.id}>
                                    {category.name}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Link href={'/'} className='text-decoration-none text-body-secondary fw-bold p-2'>Home</Link>
                        <Link href="/consumer/product" className='text-decoration-none text-body-secondary fw-bold p-2'>Shop
                        </Link>
                        <Link href={'/consumer/contact'}
                              className='text-decoration-none text-body-secondary fw-bold  p-2'> Contact</Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Link href={'/consumer/product?isTrending=1'} className="trending text-decoration-none text-body-secondary fw-bold p-2">Trending
                            Product</Link>
                        <Link href="#" className="text-danger text-decoration-none text-body-secondary p-2">Almost Finished
                            <span className="sales">
                                Sales
                            </span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MegaMenu;
