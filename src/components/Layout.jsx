import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Container from "react-bootstrap/Container";

const Layout = () => {
	return (
		<>
			<Header />
			<Container as="main" className="py-3">
				<Outlet />
			</Container>
			<Footer />
		</>
	);
};
export default Layout;
