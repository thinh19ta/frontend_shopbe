export default function Banner({ content }) {
    return (
        <div className="container-fluid">
            <div className="banner-section">
                <h1 className="banner-content">{content}</h1>
            </div>
        </div>
    )
}