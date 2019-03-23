import Header from './Header';
import Head from 'next/head';

const styles = {
   margin: 0,
   padding: 15
}
const Layout = props => (
    <div>
        <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <title>My Next App</title>
        </Head>
        <Header />
        <div className="container">
        {props.children}
        </div>
    </div>
)

export default Layout