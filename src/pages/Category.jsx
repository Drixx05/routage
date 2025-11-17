import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function Category() {
	const { category } = useParams();
	const navigate = useNavigate();

	const toHomePage = () => {
		navigate("/");
	};

	return (
		<div>
			<h1>{category}</h1>
			<button onClick={toHomePage}>Retour à la page d'accueil</button>
		</div>
	);
}
