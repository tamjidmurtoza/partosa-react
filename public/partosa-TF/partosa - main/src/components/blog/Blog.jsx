import { Link } from "react-router-dom";

export default function Blog({imgUrl, date, title, linkUrl}) {
  return (
    <div className="cs_post cs_style_1">
      <Link
        to={linkUrl}
        className="cs_post_thumb cs_radius_15 cs_mb_30"
      >
        <img src={imgUrl} alt="Thumb" />
      </Link>
      <div className="cs_post_info">
        <p className="cs_posted_by cs_accent_color cs_mb_15">{date}</p>
        <h2 className="cs_post_title cs_fs_28 cs_mb_26">
          <Link to={linkUrl}>{title}</Link>
        </h2>
        <Link to={linkUrl} className="cs_text_btn cs_semibold">
          Read More
        </Link>
      </div>
    </div>
  )
}
