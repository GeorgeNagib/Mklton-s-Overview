import moment from "moment";
export default function Post({title, body, createdAt, url}) {
    const date = moment(createdAt).format("DD MMMM YYYY");
    return (
        <a style={{display: "block"}} className="card post" href={url}>
          <div className="card__title">
            <h3 className="card__heading">{title}</h3>
            <span className="card__date">{date}</span>
          </div>
          <div className="card__description">
            {body}
          </div>
        </a>
    )
}