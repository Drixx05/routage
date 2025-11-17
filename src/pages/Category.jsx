import { useParams } from "react-router";

export default function Category() {
	const { category } = useParams();
	return <h1>{category}</h1>;
}
