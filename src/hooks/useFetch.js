import { useEffect, useState } from "react";

export function useFetch(url, limit = null) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		fetch(url)
			.then((res) => {
				if (!res.ok) throw new Error("Erreur réseau");
				return res.json();
			})
			.then((result) => {
				if (limit) {
					setData(result.slice(0, limit));
				} else {
					setData(result);
				}
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [url, limit]);

	return { data, loading, error };
}
