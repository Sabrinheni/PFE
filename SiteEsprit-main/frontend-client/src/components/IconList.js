import React from "react"

export default function IconList(data) {
  function renderDescription(desc) {
    if (Array.isArray(desc)) {
      return desc.map((item, index) => {
        return <React.Fragment key={index}>{item}</React.Fragment>
      })
    }
    return desc
  }

  const list = data.data?.list?.map((singleItem, index) => (
    <li className="" key={index}>
      <span className="services-box-list-text">{renderDescription(singleItem)}</span>
    </li>
  ))

  return (
    <>
      <div className="services-box">
        <div className="services-box-icon">
          <div className="services-box-icon-inner">
            <i className={`services-box-fonticon ${data.data.icon}`} />
          </div>
        </div>
        <div className="services-box-content">
          <h4 className="services-box-title">{data.data.title}</h4>
          <div className="services-box-desc">
            <p>{data.data.description ? renderDescription(data.data.description) : <br></br>}</p>
          </div>

          <ul className="services-box-list">{list}</ul>
        </div>
      </div>
    </>
  )
}
