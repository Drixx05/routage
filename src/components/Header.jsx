import { NavLink } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../styles/Header.css";

export default function Header() {
	return (
		<header>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/">
							Accueil
						</Nav.Link>
						<Nav.Link as={NavLink} to="/categorie/Vêtements">
							Vêtements
						</Nav.Link>
						<Nav.Link as={NavLink} to="/categorie/Chaussures">
							Chaussures
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
