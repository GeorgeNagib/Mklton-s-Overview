export default function Project({name, description}) {
    return (
        <div className="card project">
            <div className="card__title">
            <h3 className="card__heading">{name}</h3>
            </div>
            <div className="card__description">
                {description}
            </div>
        </div>
    )
}