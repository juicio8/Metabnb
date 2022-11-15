export default function star(no) {
    const tar = []
    for (const x of Array(no).keys()) {
        tar.push(<img className="card--star" src="/stars.svg"/>)
    }
    return tar
}