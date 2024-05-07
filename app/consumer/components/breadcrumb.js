
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
    const router = useRouter();

    if (!router) {
        return null; // Return null if useRouter returns falsy (usually during server-side rendering)
    }

    const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

    return (
        <div>
            {pathSegments.map((segment, index) => (
                <span key={index}>
          <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
            <a>{segment}</a>
          </Link>
                    {index < pathSegments.length - 1 && ' / '}
        </span>
            ))}
        </div>
    );
};

export default Breadcrumb;
