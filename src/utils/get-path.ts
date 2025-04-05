export function getPath(path: string) {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
	return `${basePath}${path}`;
}
