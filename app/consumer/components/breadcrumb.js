import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {Breadcrumb, Container} from 'react-bootstrap';


const NextBreadcrumb = ({
                            homeElement,
                            separator,
                            containerClasses,
                            listClasses,
                            activeClasses,
                            capitalizeLinks,
                        }) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    return (
        <Container>
            <Breadcrumb className={containerClasses}>
                <Link href="/">
                    Home {homeElement}
                </Link>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    let itemClasses =
                        paths === href ? `${listClasses} ${activeClasses}` : listClasses;
                    let itemLink = capitalizeLinks
                        ? link[0].toUpperCase() + link.slice(1, link.length)
                        : link;
                    return (
                        <React.Fragment key={index}>
                                /<Link href={href} className={itemClasses}>{itemLink}</Link>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    );
                })}
            </Breadcrumb>
        </Container>
    );
};

export default NextBreadcrumb;