import { useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

export default function Gallery({data}) {

  // Load Items
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(
    data.slice(0, itemsPerPage),
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = data.slice(
      currentLength,
      currentLength + itemsPerPage,
    );
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= data.length) {
      setShowLoadMore(false);
    }
  };


  return (
    <>
      <LightGallery 
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="cs_lightgallery"
      >
        {visibleItems?.map((item, index) => (
          <div className="cs_grid_item" key={index} href={item.imgUrl}>
            <div className="cs_portfolio cs_style_1 cs_lightbox_item cs_radius_15 overflow-hidden d-block position-relative" >
              <img src={item.imgUrl} alt="" />
              <span className="cs_portfolio_btn cs_fs_28 cs_semibold">
                <span>{item.title}</span>
                <svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 2C20.5 1.17157 19.8284 0.5 19 0.5L5.5 0.499999C4.67157 0.499999 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939339L0.93934 17.9393L3.06066 20.0607Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </LightGallery>
      {showLoadMore && 
        <div className="cs_grid_item">
          <div
            className="cs_portfolio_grid_btn text-center wow fadeIn"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <button className="cs_btn cs_style_1 cs_radius_15"  onClick={loadMoreItems}>More Project</button>
          </div>
        </div>
      }
    </>
  )
}
