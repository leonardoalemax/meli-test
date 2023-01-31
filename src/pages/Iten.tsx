import React from "react";
import { Description, Loading } from "../components";
import useIten from "../hooks/useIten";

function Iten() {
	const { isLoading, iten } = useIten();

	return (
		<>
			{isLoading && <Loading />}

			{!isLoading && <Description iten={iten} />}
		</>
	);
}

export default Iten;
