import { NavLink, useMatch } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../assets/styles/Header.css";

export default function Header() {
	const match = useMatch("/categorie/:category");

	return (
		<header>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					{match ? (
						<Navbar.Brand>
							Catégorie : {match.params.category}
						</Navbar.Brand>
					) : (
						<Navbar.Brand>Bienvenue sur le site</Navbar.Brand>
					)}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
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
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}