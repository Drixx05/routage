import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';

export default function Category() {
	const { category } = useParams();
	const navigate = useNavigate();

	const toHomePage = () => {
		navigate("/");
	};

	return (
		<div>
			<h1>{category}</h1>
			<Button variant="primary" onClick={toHomePage}>Retour à la page d'accueil</Button>
		</div>
	);
}
