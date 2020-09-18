import "../../css/components/project-info.css"
import React from "react"

const ProjectInfo = ({
  paragraph,
  projectLink,
  textList,
  dataStart,
  links,
  Marg,
}) => {
  return (
    <section className="projects-info">
      <div className="projects-container">
        <div className="project-info-left">
          <p>
            {paragraph.map((item, index) => (
              <span key={index}>
                <span key={index}>{item}</span>
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="project-info-right">
          {/* style={Marg ? { marginRight: "150px" } : null} */}
          <ul>
            {textList
              ? textList.map((text, index) => <li key={index}>{text}</li>)
              : null}
            <li
              className="project-date"
              style={!textList ? { paddingTop: "0px" } : null}
            >
              {dataStart}
            </li>
            {projectLink ? (
              <>
                <li className="project-link project-link_correct">
                  <a
                    href={`https://${projectLink[0]}`}
                    title="stevendelduca.ca"
                  >
                    {projectLink[0]}
                  </a>
                </li>
                <li className="project-link project-link-red">
                  <a
                    href={`https://www.cbc.ca/news/canada/toronto/liberal-leader-ontario-convention-del-duca-1.5489944`}
                    title="CBC News"
                  >
                    {projectLink[1]}
                  </a>
                </li>
              </>
            ) : null}

            {links
              ? links.map((item, index) => (
                  <li className="project-link" key={index}>
                    <a
                      target="_blank"
                      href={`https://${item.link}`}
                      title={item.name}
                    >
                      {item.name}
                    </a>
                  </li>
                ))
              : null}
          </ul>
          {textList ? <div className="project-services">Services</div> : null}
        </div>
      </div>
    </section>
  )
}

export default ProjectInfo
