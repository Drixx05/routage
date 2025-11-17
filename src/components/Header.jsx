import { Link } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header() {
	return (
		<header>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Accueil
						</Nav.Link>
						<Nav.Link as={Link} to="/categorie/Vêtements">
							Vêtements
						</Nav.Link>
						<Nav.Link as={Link} to="/categorie/Chaussures">
							Chaussures
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
